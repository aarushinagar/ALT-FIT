"use client";
import { useState, useEffect } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm h-16 flex justify-between px-6 items-center border-b border-gray-200">
        <h1 className="text-2xl font-bold text-black">My Wardrobe AI</h1>
        <div className="flex gap-4 items-center">
          {isSignedIn ? (
            <div className="flex gap-4 items-center">
              <span className="text-sm text-gray-600">Welcome, {user?.firstName}</span>
              <UserButton />
            </div>
          ) : (
            <div className="flex gap-2">
              <Link href="/sign-in" className="px-4 py-2 rounded-lg bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors">
                Login
              </Link>
              <Link href="/sign-up" className="px-4 py-2 rounded-lg border border-black text-black text-sm font-medium hover:bg-black hover:text-white transition-colors">
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
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Welcome back, {user?.firstName}!</h2>
              <p className="text-lg text-gray-600">Your personal style advisor is ready to help.</p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/dashboard" className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-black group">
                <div className="text-4xl mb-4">👕</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-black">Today's Outfit</h3>
                <p className="text-sm text-gray-600">Personalized recommendations based on weather and your schedule.</p>
              </Link>

              <Link href="/wardrobe" className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-black group">
                <div className="text-4xl mb-4">👔</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-black">Your Wardrobe</h3>
                <p className="text-sm text-gray-600">Manage your collection of clothes and accessories.</p>
              </Link>

              <Link href="/pricing" className="p-8 bg-gradient-to-br from-black to-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-white group">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="font-bold text-lg text-white mb-2 group-hover:text-gray-100">Premium Features</h3>
                <p className="text-sm text-gray-300">Unlock advanced AI insights and unlimited recommendations.</p>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Your Stats</h3>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-black">0</p>
                  <p className="text-sm text-gray-600 mt-1">Items in Wardrobe</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-black">0</p>
                  <p className="text-sm text-gray-600 mt-1">Outfits Created</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-black">Free</p>
                  <p className="text-sm text-gray-600 mt-1">Current Plan</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-8 max-w-2xl">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-4">Your Wardrobe, Intelligent.</h2>
              <p className="text-xl text-gray-600">Get AI-powered outfit recommendations and manage your wardrobe with ease. Never wonder what to wear again.</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Why Choose My Wardrobe AI?</h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">AI-powered outfit recommendations tailored to your style</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">Weather-aware suggestions for the perfect look</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">Organize and track your entire wardrobe</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">Get style insights and fashion tips</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/sign-up" className="px-8 py-4 bg-black text-white rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors">
                Get Started Free
              </Link>
              <Link href="/pricing" className="px-8 py-4 border-2 border-black text-black rounded-lg font-bold text-lg hover:bg-black hover:text-white transition-colors">
                View Pricing
              </Link>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 text-center text-gray-500 text-sm bg-white">
        &copy; {new Date().getFullYear()} My Wardrobe AI. All rights reserved.
      </footer>
    </div>
  );
}
