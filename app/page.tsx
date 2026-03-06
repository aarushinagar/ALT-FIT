"use client";
import { useState, useEffect } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 to-purple-900">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400"></div>
          <p className="mt-4 text-purple-200">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-900 to-slate-900 flex flex-col">
      {/* Header */}
      <header className="bg-black/40 backdrop-blur-md h-16 flex justify-between px-6 items-center border-b border-purple-500/20">
        <div className="flex items-center gap-3">
          <Image 
            src="/logo.webp" 
            alt="ALT FIT Logo" 
            width={32} 
            height={32}
            className="w-8 h-8"
          />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">ALT FIT</h1>
        </div>
        <div className="flex gap-4 items-center">
          {isSignedIn ? (
            <div className="flex gap-4 items-center">
              <span className="text-sm text-purple-200">Welcome, {user?.firstName}</span>
              <UserButton />
            </div>
          ) : (
            <div className="flex gap-2">
              <Link href="/sign-in" className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 text-white text-sm font-medium hover:from-purple-700 hover:to-purple-600 transition-all">
                Login
              </Link>
              <Link href="/sign-up" className="px-4 py-2 rounded-lg border border-purple-400 text-purple-300 text-sm font-medium hover:bg-purple-500/20 transition-all">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-6">
        {isSignedIn ? (
          <div className="max-w-5xl w-full space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent mb-2">Welcome back, {user?.firstName}!</h2>
              <p className="text-lg text-purple-200">Your personal style advisor is ready to help.</p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/dashboard" className="p-8 bg-gradient-to-br from-purple-900/50 to-slate-900/50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-500/30 hover:border-purple-400/60 group backdrop-blur-sm">
                <div className="text-4xl mb-4">👕</div>
                <h3 className="font-bold text-lg text-purple-100 mb-2 group-hover:text-purple-200">Today's Outfit</h3>
                <p className="text-sm text-purple-300">Personalized recommendations based on weather and your schedule.</p>
              </Link>

              <Link href="/wardrobe" className="p-8 bg-gradient-to-br from-purple-900/50 to-slate-900/50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-500/30 hover:border-purple-400/60 group backdrop-blur-sm">
                <div className="text-4xl mb-4">👔</div>
                <h3 className="font-bold text-lg text-purple-100 mb-2 group-hover:text-purple-200">Your Wardrobe</h3>
                <p className="text-sm text-purple-300">Manage your collection of clothes and accessories.</p>
              </Link>

              <Link href="/pricing" className="p-8 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-400/60 hover:border-purple-300 group">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="font-bold text-lg text-white mb-2 group-hover:text-purple-100">Premium Features</h3>
                <p className="text-sm text-purple-100">Unlock advanced AI insights and unlimited recommendations.</p>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-purple-900/50 to-slate-900/50 rounded-xl shadow-lg p-8 border border-purple-500/30 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-purple-100 mb-6">Your Stats</h3>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-300">0</p>
                  <p className="text-sm text-purple-300 mt-1">Items in Wardrobe</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-300">0</p>
                  <p className="text-sm text-purple-300 mt-1">Outfits Created</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-300">Free</p>
                  <p className="text-sm text-purple-300 mt-1">Current Plan</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-8 max-w-2xl">
            <div className="flex justify-center mb-6">
              <Image 
                src="/logo.webp" 
                alt="ALT FIT Logo" 
                width={120} 
                height={120}
                className="w-32 h-32 drop-shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent mb-4">ALT FIT</h2>
              <p className="text-xl text-purple-200">Get AI-powered outfit recommendations and manage your wardrobe with ease. Never wonder what to wear again.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/50 to-slate-900/50 rounded-xl shadow-lg p-8 border border-purple-500/30 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-purple-100 mb-4">Why Choose ALT FIT?</h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">✓</span>
                  <span className="text-purple-200">AI-powered outfit recommendations tailored to your style</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">✓</span>
                  <span className="text-purple-200">Weather-aware suggestions for the perfect look</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">✓</span>
                  <span className="text-purple-200">Organize and track your entire wardrobe</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">✓</span>
                  <span className="text-purple-200">Get style insights and fashion tips</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/sign-up" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-lg font-bold text-lg hover:from-purple-700 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl">
                Get Started Free
              </Link>
              <Link href="/pricing" className="px-8 py-4 border-2 border-purple-400 text-purple-300 rounded-lg font-bold text-lg hover:bg-purple-500/20 transition-all">
                View Pricing
              </Link>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-purple-500/20 text-center text-purple-300 text-sm bg-black/20 backdrop-blur-sm">
        &copy; {new Date().getFullYear()} ALT FIT. All rights reserved.
      </footer>
    </div>
  );
}
