"use client";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const PLANS = [
  {
    id: "free",
    name: "Starter",
    price: "$0",
    description: "Perfect for exploring your style",
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
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-purple-500/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <Image src="/logo.webp" alt="ALT FIT" width={32} height={32} className="w-8 h-8" />
            <span className="text-xl font-black tracking-tighter bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">ALT FIT</span>
          </Link>
          <Link href="/" className="text-purple-300 hover:text-purple-100 transition">Back</Link>
        </div>
      </nav>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-30 animate-pulse" style={{animationDelay: "1s"}}></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-black tracking-tight mb-6">
            <span className="bg-gradient-to-r from-purple-300 via-purple-200 to-purple-100 bg-clip-text text-transparent">Pricing That Scales With You</span>
          </h1>
          <p className="text-xl text-purple-200/70 max-w-2xl mx-auto mb-12">
            Choose the perfect plan for your style journey. Upgrade or downgrade anytime, no questions asked.
          </p>

          {/* Billing Toggle */}
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-3 rounded-full font-bold transition-all ${
                billingCycle === "monthly"
                  ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg shadow-purple-500/50"
                  : "text-purple-300 hover:text-purple-100 border border-purple-500/30"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-6 py-3 rounded-full font-bold transition-all relative ${
                billingCycle === "annual"
                  ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg shadow-purple-500/50"
                  : "text-purple-300 hover:text-purple-100 border border-purple-500/30"
              }`}
            >
              Annual Billing
              {billingCycle === "annual" && (
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-purple-400 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                  Save 20%
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative group rounded-2xl transition-all duration-300 ${
                plan.highlighted ? "md:scale-105" : ""
              }`}
            >
              {/* Background */}
              <div
                className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-gradient-to-br from-purple-600/40 to-purple-900/40 border border-purple-400/60 shadow-2xl shadow-purple-500/30"
                    : "bg-gradient-to-br from-purple-900/30 to-purple-950/30 border border-purple-500/20 group-hover:border-purple-400/50 group-hover:shadow-xl group-hover:shadow-purple-500/20"
                }`}
              ></div>

              {/* Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-purple-500 to-purple-400 text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Content */}
              <div className="relative p-8 h-full flex flex-col backdrop-blur-xl">
                <div className="mb-8">
                  <h3 className="text-2xl font-black text-purple-100 mb-2">{plan.name}</h3>
                  <p className="text-purple-300/70 text-sm">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black text-purple-100">{plan.price}</span>
                    {plan.period && <span className="text-purple-300/60">{plan.period}</span>}
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href={plan.ctaLink}
                  className={`w-full py-3 rounded-full font-bold text-center transition-all duration-300 mb-8 ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white hover:from-purple-500 hover:to-purple-400 shadow-lg hover:shadow-purple-500/50 transform hover:scale-105"
                      : "border border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400"
                  }`}
                >
                  {plan.cta}
                </Link>

                {/* Features */}
                <div className="flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-purple-200/80">
                        <span className="text-purple-400 font-bold mt-0.5">✓</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: "🔒", title: "Secure Payments", desc: "Your payment information is encrypted and secure" },
            { icon: "⚡", title: "Instant Activation", desc: "Start using premium features immediately" },
            { icon: "🔄", title: "Flexible Plans", desc: "Change or cancel your plan anytime" }
          ].map((item, i) => (
            <div key={i} className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-900/30 to-purple-950/30 border border-purple-500/20 hover:border-purple-400/50 transition-all backdrop-blur-xl">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-purple-100 mb-2">{item.title}</h3>
              <p className="text-purple-300/70 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12">
            <span className="bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">Frequently Asked Questions</span>
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Can I change plans anytime?",
                a: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately."
              },
              {
                q: "Is there a free trial?",
                a: "Yes! Start with our Starter plan and upgrade whenever you're ready. No credit card required."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards through our secure payment processor."
              },
              {
                q: "Do you offer refunds?",
                a: "We offer a 7-day money-back guarantee on all paid plans. No questions asked."
              }
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-purple-900/30 to-purple-950/30 rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/50 transition-all backdrop-blur-xl">
                <h3 className="font-bold text-purple-100 mb-2">{item.q}</h3>
                <p className="text-purple-300/70 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-purple-500/10 py-12 px-6 bg-black/50 backdrop-blur-xl mt-20">
        <div className="max-w-6xl mx-auto text-center text-sm text-purple-300/50">
          <p>&copy; 2026 ALT FIT. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
