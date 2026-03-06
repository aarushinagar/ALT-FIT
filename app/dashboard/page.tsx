"use client";
import { useUser, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 to-purple-900">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400"></div>
          <p className="mt-4 text-purple-200">Loading...</p>
        </div>
      </div>
    );
  }

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
        <div className="flex gap-4 items-center">
          <nav className="flex gap-6">
            <Link href="/dashboard" className="text-sm font-medium text-purple-300 hover:text-purple-100">
              Dashboard
            </Link>
            <Link href="/wardrobe" className="text-sm font-medium text-purple-300 hover:text-purple-100">
              Wardrobe
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-purple-300 hover:text-purple-100">
              Upgrade
            </Link>
          </nav>
          <UserButton />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent mb-2">Today's Outfit</h1>
          <p className="text-purple-200">Get personalized outfit recommendations based on weather and your style</p>
        </div>

        {/* Placeholder Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Outfit Card */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-purple-900/50 to-slate-900/50 rounded-xl shadow-lg p-8 border border-purple-500/30 backdrop-blur-sm">
              <div className="aspect-square bg-gradient-to-br from-purple-800/30 to-slate-800/30 rounded-lg flex items-center justify-center mb-6 border border-purple-500/20">
                <div className="text-center">
                  <div className="text-6xl mb-4">👗</div>
                  <p className="text-purple-300">Add items to your wardrobe to get started</p>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-purple-100 mb-4">Curated for You</h2>
              <p className="text-purple-200 mb-6">Start by adding items to your wardrobe. ALT FIT will then create personalized outfit combinations.</p>
              <Link href="/wardrobe" className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-purple-600 transition-all">
                Add to Wardrobe
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats Card */}
            <div className="bg-gradient-to-br from-purple-900/50 to-slate-900/50 rounded-xl shadow-lg p-6 border border-purple-500/30 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-purple-100 mb-4">Your Stats</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-purple-300 text-sm mb-1">Wardrobe Items</p>
                  <p className="text-3xl font-bold text-purple-200">0</p>
                </div>
                <div>
                  <p className="text-purple-300 text-sm mb-1">Outfits Created</p>
                  <p className="text-3xl font-bold text-purple-200">0</p>
                </div>
                <div>
                  <p className="text-purple-300 text-sm mb-1">Current Plan</p>
                  <p className="text-xl font-bold text-purple-300">Free</p>
                </div>
              </div>
            </div>

            {/* Upgrade Card */}
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl shadow-lg p-6 border border-purple-400/50">
              <h3 className="text-lg font-bold text-white mb-2">Upgrade to Pro</h3>
              <p className="text-purple-100 text-sm mb-4">Unlock unlimited recommendations and advanced AI insights.</p>
              <Link href="/pricing" className="block text-center px-4 py-2 bg-white text-purple-700 rounded-lg font-semibold hover:bg-purple-50 transition-all">
                View Plans
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
