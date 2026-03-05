"use client";
import { useUser, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

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
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  const categories = ["All", "Tops", "Bottoms", "Dresses", "Outerwear", "Shoes", "Accessories"];
  const items: any[] = []; // Empty wardrobe for now

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
            <Link href="/wardrobe" className="text-sm font-medium text-gray-700 hover:text-black font-bold border-b-2 border-black">
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
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Your Wardrobe</h1>
            <p className="text-gray-600">Manage and organize your clothing collection</p>
          </div>
          <button className="px-6 py-3 bg-black text-white rounded-lg font-bold hover:bg-gray-800 transition-colors">
            + Add Item
          </button>
        </div>

        {/* Filter Bar */}
        <div className="mb-8 flex gap-2 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category.toLowerCase())}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === category.toLowerCase()
                  ? "bg-black text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-gray-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Wardrobe Grid */}
        {items.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-16 border border-gray-200 text-center">
            <div className="text-6xl mb-4">👕</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your wardrobe is empty</h2>
            <p className="text-gray-600 mb-6">Start by adding items to your wardrobe to get personalized outfit recommendations.</p>
            <button className="px-8 py-3 bg-black text-white rounded-lg font-bold hover:bg-gray-800 transition-colors">
              Add Your First Item
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {items.map((item: any, idx: number) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-3xl">👕</span>
                </div>
                <p className="font-medium text-gray-900 text-sm">{item.name}</p>
                <p className="text-xs text-gray-500">{item.category}</p>
              </div>
            ))}
          </div>
        )}

        {/* Tips Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tips for Building Your Wardrobe</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Start with Basics",
                desc: "Build a foundation with neutral colors and classic pieces that mix and match easily.",
              },
              {
                title: "Add Your Style",
                desc: "Incorporate pieces that reflect your personal style and make you feel confident.",
              },
              {
                title: "Quality Over Quantity",
                desc: "Invest in well-made pieces that will last longer and look better over time.",
              },
            ].map((tip, idx) => (
              <div key={idx} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-sm text-gray-600">{tip.desc}</p>
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
