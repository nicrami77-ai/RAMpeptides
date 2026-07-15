"use client";
import { useCart } from "@/components/CartContext";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_live_51TcStTRvNi3NexqU7vAUlAtP7LLDwIvLgTng30AKrNAvZ5trtfyW6FYPepKeZKGbu3GZjEDszMqqgHwI4uR6zM5w00OyJ7YdN5");

const STATE_TAX_RATES: Record<string, number> = {
  AL: 4.0, AK: 0.0, AZ: 5.6, AR: 6.5, CA: 7.25, CO: 2.9, CT: 6.35, DE: 0.0, FL: 6.0, GA: 4.0,
  HI: 4.0, ID: 6.0, IL: 6.25, IN: 7.0, IA: 6.0, KS: 6.5, KY: 6.0, LA: 4.45, ME: 5.5, MD: 6.0,
  MA: 6.25, MI: 6.0, MN: 6.875, MS: 7.0, MO: 4.225, MT: 0.0, NE: 5.5, NV: 6.85, NH: 0.0, NJ: 6.625,
  NM: 5.125, NY: 4.0, NC: 4.75, ND: 5.0, OH: 5.75, OK: 4.5, OR: 0.0, PA: 6.0, RI: 7.0, SC: 6.0,
  SD: 4.5, TN: 7.0, TX: 6.25, UT: 6.1, VT: 6.0, VA: 5.3, WA: 6.5, WV: 6.0, WI: 5.0, WY: 4.0
};

function CheckoutForm({ total, formData }: { total: number, formData: any }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { cart } = useCart();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setLoading(true);
    setErrorMessage("");

    // Send backup notification of the order to the business email
    const orderDetails = {
      access_key: "bd570075-3607-4e8f-9f41-a1576e32b064",
      subject: `New Checkout Started: ${formData.name} ($${total.toFixed(2)})`,
      from_name: "RAMpeptides Stripe Checkout",
      ...formData,
      items: JSON.stringify(cart, null, 2),
      total: total.toFixed(2),
    };
    
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(orderDetails)
    }).catch(() => {});
    
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success?total=${total.toFixed(2)}&paid=true`,
        receipt_email: formData.email,
      },
    });

    if (error) {
      setErrorMessage(error.message || "An error occurred during payment.");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 mt-8 p-6 md:p-8 bg-zinc-50 dark:bg-zinc-900 border border-[var(--border)] rounded-xl">
      <h2 className="text-xl font-bold mb-6">Payment Details</h2>
      <PaymentElement />
      {errorMessage && <div className="text-red-600 text-sm mt-4 font-semibold">{errorMessage}</div>}
      <button disabled={!stripe || loading} type="submit" className="w-full mt-8 bg-[var(--foreground)] text-[var(--background)] uppercase tracking-[0.18em] text-sm font-semibold px-7 py-4 hover:opacity-90 disabled:opacity-50 transition-opacity">
        {loading ? "Processing..." : `Pay $${total.toFixed(2)}`}
      </button>
    </form>
  );
}

export default function CheckoutPage() {
  const { cart, subtotal } = useCart();
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    name: "", email: "", street: "", city: "", state: "CA", zip: ""
  });
  const [clientSecret, setClientSecret] = useState("");
  const [loadingClientSecret, setLoadingClientSecret] = useState(false);

  // Math
  const shipping = 10.00;
  const taxRate = STATE_TAX_RATES[formData.state] || 0;
  const tax = subtotal * (taxRate / 100);
  const total = subtotal + shipping + tax;

  useEffect(() => {
    if (cart.length === 0) router.push('/cart');
  }, [cart, router]);

  const handleContinueToPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoadingClientSecret(true);
    
    try {
      const res = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cart,
          shippingAddress: formData
        })
      });
      const data = await res.json();
      if (data.clientSecret) {
        setClientSecret(data.clientSecret);
      } else {
        alert(data.error || "Failed to initialize payment gateway.");
      }
    } catch (err) {
      alert("Network error starting payment process.");
    }
    setLoadingClientSecret(false);
  };

  if (cart.length === 0) return null;

  return (
    <div className="max-w-2xl mx-auto px-6 py-12 md:py-24">
      <h1 className="font-display text-4xl mb-10">Checkout</h1>
      
      <div className="mb-10 bg-[var(--foreground)] text-[var(--background)] p-6 rounded-xl">
        <h2 className="text-xl font-bold mb-4 border-b border-[var(--background)]/20 pb-4">Order Summary</h2>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
          <div className="flex justify-between"><span>Shipping</span><span>${shipping.toFixed(2)}</span></div>
          <div className="flex justify-between"><span>Tax ({taxRate}%)</span><span>${tax.toFixed(2)}</span></div>
          <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t border-[var(--background)]/20">
            <span>Total</span><span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {!clientSecret ? (
        <form onSubmit={handleContinueToPayment} className="space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-widest mb-2">Name</label>
            <input required type="text" className="w-full p-3 border border-[var(--border)] bg-transparent rounded-none" value={formData.name} onChange={e=>setFormData({...formData, name: e.target.value})} />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest mb-2">Email</label>
            <input required type="email" className="w-full p-3 border border-[var(--border)] bg-transparent rounded-none" value={formData.email} onChange={e=>setFormData({...formData, email: e.target.value})} />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest mb-2">Street</label>
            <input required type="text" className="w-full p-3 border border-[var(--border)] bg-transparent rounded-none" value={formData.street} onChange={e=>setFormData({...formData, street: e.target.value})} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-widest mb-2">City</label>
              <input required type="text" className="w-full p-3 border border-[var(--border)] bg-transparent rounded-none" value={formData.city} onChange={e=>setFormData({...formData, city: e.target.value})} />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest mb-2">State</label>
              <select className="w-full p-3 border border-[var(--border)] bg-transparent rounded-none appearance-none text-black" value={formData.state} onChange={e=>setFormData({...formData, state: e.target.value})}>
                {Object.keys(STATE_TAX_RATES).map(st => <option key={st} value={st}>{st}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest mb-2">ZIP Code</label>
            <input required type="text" className="w-full p-3 border border-[var(--border)] bg-transparent rounded-none" value={formData.zip} onChange={e=>setFormData({...formData, zip: e.target.value})} />
          </div>
          
          <button disabled={loadingClientSecret} type="submit" className="w-full mt-10 bg-[var(--foreground)] text-[var(--background)] uppercase tracking-[0.18em] text-sm font-semibold px-7 py-4 hover:opacity-90 disabled:opacity-50 transition-opacity">
            {loadingClientSecret ? "Securely initializing payment..." : "Continue to Payment"}
          </button>
        </form>
      ) : (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="opacity-70 text-sm p-5 bg-gray-50 dark:bg-zinc-900 border border-[var(--border)] rounded-lg">
            <h3 className="font-bold mb-1 uppercase tracking-wider text-xs">Shipping to</h3>
            <p className="mt-2">{formData.name} <br/> {formData.street} <br/> {formData.city}, {formData.state} {formData.zip}</p>
            <p className="mt-4 text-xs font-medium">Receipt will be sent securely to: {formData.email}</p>
          </div>
          <Elements stripe={stripePromise} options={{ clientSecret, appearance: { theme: 'stripe' } }}>
            <CheckoutForm total={total} formData={formData} />
          </Elements>
        </div>
      )}
    </div>
  );
}
