"use client";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";

const PLANS = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    description: "Perfect for getting started",
    features: [
      "5 outfit recommendations per month",
      "Basic wardrobe management",
      "Weather-based suggestions",
      "Community access",
    ],
    cta: "Get Started",
    ctaLink: "/sign-up",
    highlighted: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: "$9.99",
    period: "/month",
    description: "For fashion enthusiasts",
    features: [
      "Unlimited outfit recommendations",
      "Advanced style analysis",
      "Weather & occasion-based suggestions",
      "Wardrobe analytics & insights",
      "Priority support",
      "Monthly style reports",
    ],
    cta: "Subscribe Now",
    ctaLink: "/checkout?plan=pro",
    highlighted: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: "$19.99",
    period: "/month",
    description: "For style professionals",
    features: [
      "Everything in Pro",
      "AI personal stylist consultation",
      "Custom outfit collections",
      "Shopping recommendations",
      "Exclusive fashion tips & trends",
      "VIP support (24/7)",
      "Export wardrobe data",
    ],
    cta: "Subscribe Now",
    ctaLink: "/checkout?plan=premium",
    highlighted: false,
  },
];

export default function PricingPage() {
  const { isSignedIn } = useUser();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm h-16 flex justify-between px-6 items-center border-b border-gray-200">
        <Link href="/" className="text-2xl font-bold text-black">
          My Wardrobe AI
        </Link>
        <div>
          {!isSignedIn && (
            <Link href="/sign-in" className="px-4 py-2 rounded-lg bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors">
              Login
            </Link>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 mb-8">Choose the perfect plan for your style journey</p>

          {/* Billing Toggle */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                billingCycle === "monthly"
                  ? "bg-black text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-gray-400"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                billingCycle === "annual"
                  ? "bg-black text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-gray-400"
              }`}
            >
              Annual (Save 20%)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
                plan.highlighted
                  ? "border-2 border-black scale-105 bg-black text-white"
                  : "border border-gray-200 bg-white hover:shadow-xl"
              }`}
            >
              {plan.highlighted && (
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-center py-2 text-sm font-bold">
                  MOST POPULAR
                </div>
              )}

              <div className="p-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.highlighted ? "text-gray-200" : "text-gray-600"}`}>
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className={`text-4xl font-bold ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={plan.highlighted ? "text-gray-200" : "text-gray-600"}>
                      {plan.period}
                    </span>
                  )}
                </div>

                <Link
                  href={plan.ctaLink}
                  className={`block text-center py-3 px-6 rounded-lg font-bold transition-colors mb-8 ${
                    plan.highlighted
                      ? "bg-yellow-400 text-black hover:bg-yellow-500"
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
                >
                  {plan.cta}
                </Link>

                <div className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className={`text-lg ${plan.highlighted ? "text-yellow-400" : "text-green-500"}`}>
                        ✓
                      </span>
                      <span className={plan.highlighted ? "text-gray-100" : "text-gray-700"}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: "Can I change my plan anytime?",
                a: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
              },
              {
                q: "Is there a free trial?",
                a: "Yes, you can start with our Free plan to explore all features. Upgrade to Pro or Premium whenever you're ready.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards (Visa, Mastercard, American Express) and other payment methods through Stripe.",
              },
              {
                q: "Can I cancel anytime?",
                a: "Absolutely! You can cancel your subscription at any time. No questions asked, no hidden fees.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 text-center text-gray-500 text-sm bg-white mt-16">
        &copy; {new Date().getFullYear()} My Wardrobe AI. All rights reserved.
      </footer>
    </div>
  );
}
