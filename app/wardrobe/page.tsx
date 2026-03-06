"use client";
import { useUser, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Wardrobe() {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();
  const [filter, setFilter] = useState("all");

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

  const categories = ["All", "Tops", "Bottoms", "Dresses", "Outerwear", "Shoes", "Accessories"];
  const items: any[] = []; // Empty wardrobe for now

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
            <Link href="/wardrobe" className="text-sm font-medium text-purple-100 font-bold border-b-2 border-purple-400">
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
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent mb-2">Your Wardrobe</h1>
            <p className="text-purple-200">Manage and organize your clothing collection</p>
          </div>
          <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-purple-600 transition-all">
            + Add Item
          </button>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex gap-2 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category.toLowerCase())}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filter === category.toLowerCase()
                  ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white"
                  : "bg-purple-900/50 text-purple-300 border border-purple-500/30 hover:border-purple-400/60"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Items Grid or Empty State */}
        {items.length === 0 ? (
          <div className="bg-gradient-to-br from-purple-900/50 to-slate-900/50 rounded-xl shadow-lg p-16 border border-purple-500/30 backdrop-blur-sm text-center">
            <div className="text-6xl mb-4">👔</div>
            <h2 className="text-2xl font-bold text-purple-100 mb-2">Your wardrobe is empty</h2>
            <p className="text-purple-300 mb-6 max-w-md mx-auto">
              Start building your wardrobe by adding clothing items. ALT FIT will then create personalized outfit recommendations for you.
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-purple-600 transition-all inline-block">
              Add Your First Item
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {items.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-900/50 to-slate-900/50 rounded-lg shadow-md p-4 border border-purple-500/30 hover:border-purple-400/60 transition-all cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-purple-800/30 to-slate-800/30 rounded-md mb-3 flex items-center justify-center border border-purple-500/20">
                  <span className="text-4xl">👕</span>
                </div>
                <h3 className="text-sm font-semibold text-purple-100">{item.name}</h3>
                <p className="text-xs text-purple-400">{item.category}</p>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-purple-500/20 text-center text-purple-300 text-sm bg-black/20 backdrop-blur-sm mt-16">
        &copy; {new Date().getFullYear()} ALT FIT. All rights reserved.
      </footer>
    </div>
  );
}
