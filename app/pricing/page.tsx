"use client";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/40 backdrop-blur-md shadow-sm h-16 flex justify-between px-6 items-center border-b border-purple-500/20">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/logo.webp" 
            alt="ALT FIT Logo" 
            width={32} 
            height={32}
            className="w-8 h-8"
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">ALT FIT</span>
        </Link>
        <div>
          {!isSignedIn && (
            <Link href="/sign-in" className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 text-white text-sm font-medium hover:from-purple-700 hover:to-purple-600 transition-all">
              Login
            </Link>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Choose the perfect plan for your style journey. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg bg-purple-900/50 border border-purple-500/30 p-1">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-md font-semibold transition-all ${
                billingCycle === "monthly"
                  ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white"
                  : "text-purple-300 hover:text-purple-100"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-6 py-2 rounded-md font-semibold transition-all ${
                billingCycle === "annual"
                  ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white"
                  : "text-purple-300 hover:text-purple-100"
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-purple-600/50 px-2 py-1 rounded">Save 20%</span>
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
                  ? "md:scale-105 bg-gradient-to-br from-purple-600 to-purple-800 border-2 border-purple-400"
                  : "bg-gradient-to-br from-purple-900/50 to-slate-900/50 border border-purple-500/30 backdrop-blur-sm"
              }`}
            >
              {plan.highlighted && (
                <div className="bg-gradient-to-r from-purple-400 to-purple-300 text-purple-900 text-center py-2 font-bold text-sm">
                  MOST POPULAR
                </div>
              )}

              <div className="p-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-purple-100"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.highlighted ? "text-purple-100" : "text-purple-300"}`}>
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className={`text-4xl font-bold ${plan.highlighted ? "text-white" : "text-purple-200"}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={plan.highlighted ? "text-purple-100" : "text-purple-300"}>
                      {plan.period}
                    </span>
                  )}
                </div>

                <Link
                  href={plan.ctaLink}
                  className={`block w-full text-center py-3 rounded-lg font-semibold mb-8 transition-all ${
                    plan.highlighted
                      ? "bg-white text-purple-700 hover:bg-purple-50"
                      : "bg-gradient-to-r from-purple-600 to-purple-500 text-white hover:from-purple-700 hover:to-purple-600"
                  }`}
                >
                  {plan.cta}
                </Link>

                <div className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className={`text-lg ${plan.highlighted ? "text-white" : "text-purple-400"}`}>✓</span>
                      <span className={plan.highlighted ? "text-white" : "text-purple-200"}>
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
        <div className="bg-gradient-to-br from-purple-900/50 to-slate-900/50 rounded-xl shadow-lg p-8 border border-purple-500/30 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-purple-100 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-purple-200 mb-2">Can I change plans anytime?</h3>
              <p className="text-purple-300">Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-purple-200 mb-2">Is there a free trial?</h3>
              <p className="text-purple-300">Yes! Start with our Free plan and upgrade whenever you're ready.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-purple-200 mb-2">What payment methods do you accept?</h3>
              <p className="text-purple-300">We accept all major credit cards through our secure Stripe payment processor.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-purple-200 mb-2">Do you offer refunds?</h3>
              <p className="text-purple-300">We offer a 7-day money-back guarantee on all paid plans.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-purple-500/20 text-center text-purple-300 text-sm bg-black/20 backdrop-blur-sm mt-16">
        &copy; {new Date().getFullYear()} ALT FIT. All rights reserved.
      </footer>
    </div>
  );
}
