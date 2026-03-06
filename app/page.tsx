"use client";
import { useState, useEffect } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-purple-500/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-8 h-8">
              <Image 
                src="/logo.webp" 
                alt="ALT FIT" 
                width={32} 
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-black tracking-tighter bg-gradient-to-r from-purple-400 via-purple-300 to-purple-200 bg-clip-text text-transparent">ALT FIT</span>
          </div>
          <div className="flex gap-3 items-center">
            {isSignedIn ? (
              <div className="flex gap-4 items-center">
                <span className="text-sm text-purple-300">Welcome, {user?.firstName}</span>
                <UserButton />
              </div>
            ) : (
              <div className="flex gap-2">
                <Link href="/sign-in" className="px-4 py-2 text-sm font-medium text-purple-300 hover:text-purple-100 transition-colors">
                  Sign In
                </Link>
                <Link href="/sign-up" className="px-5 py-2 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full text-sm font-bold hover:from-purple-500 hover:to-purple-400 transition-all shadow-lg hover:shadow-purple-500/50">
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-30 animate-pulse" style={{animationDelay: "1s"}}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-8">
          {/* Logo */}
          <div className="flex justify-center mb-8 transform hover:scale-105 transition-transform duration-500">
            <div className="relative w-40 h-40 bg-gradient-to-br from-purple-500/20 to-purple-900/20 rounded-3xl p-8 backdrop-blur-xl border border-purple-500/30 shadow-2xl">
              <Image 
                src="/logo.webp" 
                alt="ALT FIT Logo" 
                width={160} 
                height={160}
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </div>
          </div>

          {/* Main Headline */}
          <div className="space-y-6">
            <h1 className="text-7xl md:text-8xl font-black tracking-tighter leading-tight">
              <span className="bg-gradient-to-r from-purple-300 via-purple-200 to-purple-100 bg-clip-text text-transparent">Your AI</span>
              <br />
              <span className="bg-gradient-to-r from-purple-200 to-purple-400 bg-clip-text text-transparent">Fashion Genius</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-200/80 max-w-3xl mx-auto leading-relaxed font-light">
              Elevate your style with AI-powered outfit recommendations that understand your unique aesthetic. Never wonder what to wear again.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/sign-up" className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full font-bold text-lg text-white overflow-hidden shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link href="/pricing" className="px-8 py-4 border-2 border-purple-500/50 rounded-full font-bold text-lg text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 backdrop-blur-sm">
              View Plans
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-purple-300/60">
            <div className="flex items-center gap-2">
              <span className="text-purple-400">✓</span>
              <span>No credit card required</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-purple-500/20"></div>
            <div className="flex items-center gap-2">
              <span className="text-purple-400">✓</span>
              <span>14-day free trial</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-purple-500/20"></div>
            <div className="flex items-center gap-2">
              <span className="text-purple-400">✓</span>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
              <span className="bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">Powered by Advanced AI</span>
            </h2>
            <p className="text-xl text-purple-200/70 max-w-2xl mx-auto">Experience the future of personal styling</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Smart Recommendations",
                desc: "AI analyzes your style, body type, and preferences to suggest outfits you'll love"
              },
              {
                icon: "🌤️",
                title: "Weather-Aware Styling",
                desc: "Get outfit suggestions that match the weather and occasion perfectly"
              },
              {
                icon: "👔",
                title: "Wardrobe Management",
                desc: "Organize, track, and maximize every piece in your closet"
              },
              {
                icon: "📊",
                title: "Style Analytics",
                desc: "Discover insights about your fashion preferences and trends"
              },
              {
                icon: "🛍️",
                title: "Shopping Assistant",
                desc: "Get personalized shopping recommendations that complement your style"
              },
              {
                icon: "⭐",
                title: "Exclusive Tips",
                desc: "Access premium fashion advice from industry experts"
              }
            ].map((feature, i) => (
              <div key={i} className="group relative p-8 bg-gradient-to-br from-purple-900/30 to-purple-950/30 rounded-2xl border border-purple-500/20 hover:border-purple-400/50 backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-bold text-purple-100 mb-2">{feature.title}</h3>
                <p className="text-purple-300/70">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-center mb-20">
            <span className="bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">How ALT FIT Works</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Sign Up", desc: "Create your profile in seconds" },
              { step: "2", title: "Build Wardrobe", desc: "Add your clothing items" },
              { step: "3", title: "Get AI Advice", desc: "Receive personalized recommendations" },
              { step: "4", title: "Look Amazing", desc: "Wear outfits with confidence" }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-black mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-purple-100 mb-2">{item.title}</h3>
                <p className="text-purple-300/70">{item.desc}</p>
                {i < 3 && <div className="hidden md:block absolute top-8 -right-3 w-6 h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-purple-600/20 to-purple-900/20 rounded-3xl border border-purple-500/30 p-16 text-center backdrop-blur-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                <span className="bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">Ready to Transform Your Style?</span>
              </h2>
              <p className="text-lg text-purple-200/80 mb-8">Join thousands of fashion enthusiasts who've discovered their best looks with ALT FIT.</p>
              <Link href="/sign-up" className="inline-block px-10 py-4 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full font-bold text-lg text-white hover:from-purple-500 hover:to-purple-400 transition-all shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105">
                Start Your Free Trial Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/10 py-12 px-6 bg-black/50 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src="/logo.webp" alt="ALT FIT" width={24} height={24} className="w-6 h-6" />
                <span className="font-black text-lg bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">ALT FIT</span>
              </div>
              <p className="text-purple-300/60 text-sm">Your AI-powered fashion genius</p>
            </div>
            <div>
              <h4 className="font-bold text-purple-100 mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-purple-300/60">
                <li><Link href="/pricing" className="hover:text-purple-300 transition">Pricing</Link></li>
                <li><a href="#" className="hover:text-purple-300 transition">Features</a></li>
                <li><a href="#" className="hover:text-purple-300 transition">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-purple-100 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-purple-300/60">
                <li><Link href="/contact" className="hover:text-purple-300 transition">Contact</Link></li>
                <li><a href="#" className="hover:text-purple-300 transition">Blog</a></li>
                <li><a href="#" className="hover:text-purple-300 transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-purple-100 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-purple-300/60">
                <li><Link href="/privacy" className="hover:text-purple-300 transition">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-purple-300 transition">Terms</Link></li>
                <li><a href="#" className="hover:text-purple-300 transition">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-500/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-purple-300/50">
            <p>&copy; 2026 ALT FIT. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-purple-300 transition">Twitter</a>
              <a href="#" className="hover:text-purple-300 transition">Instagram</a>
              <a href="#" className="hover:text-purple-300 transition">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
