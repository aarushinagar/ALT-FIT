"use client";
import { useUser, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function Dashboard() {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/sign-in");
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded || !isSignedIn) {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm h-16 flex justify-between px-6 items-center border-b border-gray-200">
        <Link href="/" className="text-2xl font-bold text-black">
          My Wardrobe AI
        </Link>
        <div className="flex gap-4 items-center">
          <nav className="flex gap-6">
            <Link href="/dashboard" className="text-sm font-medium text-gray-700 hover:text-black">
              Dashboard
            </Link>
            <Link href="/wardrobe" className="text-sm font-medium text-gray-700 hover:text-black">
              Wardrobe
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-gray-700 hover:text-black">
              Upgrade
            </Link>
          </nav>
          <UserButton />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Today's Outfit</h1>
          <p className="text-gray-600">Get personalized outfit recommendations based on weather and your style</p>
        </div>

        {/* Placeholder Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Outfit Card */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your AI-Recommended Outfit</h2>

              <div className="grid grid-cols-4 gap-4 mb-8">
                {["Top", "Bottom", "Shoes", "Accessory"].map((item) => (
                  <div key={item} className="aspect-square bg-gray-100 rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
                    <div className="text-4xl mb-2">👕</div>
                    <p className="text-sm text-gray-600 text-center">{item}</p>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-blue-900">
                  <strong>AI Insight:</strong> This outfit combines comfort with style. Perfect for a casual day out with friends!
                </p>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 px-6 py-3 bg-black text-white rounded-lg font-bold hover:bg-gray-800 transition-colors">
                  Save Outfit
                </button>
                <button className="flex-1 px-6 py-3 border-2 border-black text-black rounded-lg font-bold hover:bg-black hover:text-white transition-colors">
                  Get Another
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Weather Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Today's Weather</h3>
              <div className="text-center">
                <div className="text-5xl mb-2">☀️</div>
                <p className="text-2xl font-bold text-gray-900">72°F</p>
                <p className="text-sm text-gray-600">Sunny & Warm</p>
              </div>
            </div>

            {/* Style Score */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Style Score</h3>
              <div className="space-y-3">
                {[
                  { label: "Comfort", value: 85 },
                  { label: "Trend", value: 72 },
                  { label: "Versatility", value: 90 },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700">{item.label}</span>
                      <span className="font-bold text-gray-900">{item.value}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-black rounded-full h-2 transition-all"
                        style={{ width: `${item.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upgrade CTA */}
            <Link
              href="/pricing"
              className="block bg-gradient-to-br from-black to-gray-800 rounded-xl shadow-lg p-6 border border-gray-700 text-white text-center hover:shadow-xl transition-shadow"
            >
              <p className="font-bold mb-2">Unlock Premium</p>
              <p className="text-sm text-gray-200 mb-4">Get unlimited recommendations & AI insights</p>
              <button className="w-full px-4 py-2 bg-yellow-400 text-black rounded-lg font-bold hover:bg-yellow-500 transition-colors">
                Upgrade Now
              </button>
            </Link>
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
