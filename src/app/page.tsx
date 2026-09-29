"use client";

import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  const categories = [
    { name: "Fashion", icon: "👗" },
    { name: "Mobiles", icon: "📱" },
    { name: "Beauty", icon: "💄" },
    { name: "Electronics", icon: "🎧" },
  ];

  const deals = [
    {
      name: "Women's Kurti",
      price: "₹699",
      image:
        "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Wireless Earbuds",
      price: "₹1,299",
      image:
        "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Running Shoes",
      price: "₹1,499",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const handleSearch = () => {
    if (!search.trim()) return;

    console.log("Searching for:", search);

    // Search functionality will be connected later.
  };

  return (
    <main className="min-h-screen bg-[#fafafa] text-gray-900">
      {/* Navbar */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="text-2xl font-black tracking-tight">
            OUR<span className="text-emerald-500">MART</span>
          </div>

          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#" className="transition hover:text-emerald-500">
              Home
            </a>
            <a href="#" className="transition hover:text-emerald-500">
              Trending
            </a>
            <a href="#" className="transition hover:text-emerald-500">
              Wishlist
            </a>
          </div>

          <button className="rounded-full border border-gray-200 px-5 py-2 text-sm font-semibold transition hover:border-emerald-500 hover:text-emerald-500">
            Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 pb-16 pt-20">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
            ✨ Smarter way to shop
          </div>

          <h1 className="text-5xl font-black tracking-tight sm:text-6xl md:text-7xl">
            Search Once.
            <br />
            <span className="text-emerald-500">Compare Everything.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-500">
            Compare prices, ratings, reviews, delivery and more across your
            favorite shopping platforms — all in one place.
          </p>

          {/* Search Box */}
          <div className="mx-auto mt-10 max-w-3xl">
            <div className="flex items-center rounded-2xl border border-gray-200 bg-white p-2 shadow-lg shadow-gray-200/50 focus-within:border-emerald-400">
              <span className="px-4 text-xl">🔍</span>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
                placeholder="Search products, brands or paste URL..."
                className="min-w-0 flex-1 bg-transparent py-4 text-sm outline-none sm:text-base"
              />

              <button
                onClick={handleSearch}
                className="rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-white transition hover:bg-emerald-600"
              >
                Search
              </button>
            </div>

            <div className="mt-4 flex flex-wrap justify-center gap-3 text-sm text-gray-500">
              <span>Try:</span>

              <button
                onClick={() => setSearch("Black kurti under ₹1000")}
                className="rounded-full bg-white px-4 py-2 shadow-sm transition hover:text-emerald-500"
              >
                "Black kurti under ₹1000"
              </button>

              <button
                onClick={() => setSearch("Best earbuds under ₹2000")}
                className="rounded-full bg-white px-4 py-2 shadow-sm transition hover:text-emerald-500"
              >
                "Best earbuds under ₹2000"
              </button>
            </div>
          </div>

          {/* AI Actions */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button className="rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-400">
              📷 Search by Image
            </button>

            <button className="rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-400">
              ✨ Ask OurMart AI
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-y border-gray-200 bg-white px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-500">
                Explore
              </p>

              <h2 className="mt-1 text-2xl font-bold">Shop by Category</h2>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {categories.map((category) => (
              <button
                key={category.name}
                className="group rounded-2xl border border-gray-200 bg-[#fafafa] p-6 text-left transition hover:-translate-y-1 hover:border-emerald-300 hover:bg-emerald-50"
              >
                <div className="text-3xl">{category.icon}</div>

                <p className="mt-4 font-semibold">{category.name}</p>

                <p className="mt-1 text-sm text-gray-500 group-hover:text-emerald-600">
                  Explore products →
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Deals */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-500">
                Curated for you
              </p>

              <h2 className="mt-1 text-3xl font-bold">Today's Smart Deals</h2>

              <p className="mt-2 text-gray-500">
                Compare before you buy.
              </p>
            </div>

            <button className="hidden text-sm font-semibold text-emerald-600 md:block">
              View all →
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {deals.map((deal) => (
              <div
                key={deal.name}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-64 overflow-hidden bg-gray-100">
                  <img
                    src={deal.image}
                    alt={deal.name}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-bold">{deal.name}</h3>

                      <p className="mt-1 text-sm text-gray-500">
                        Compare across 5 stores
                      </p>
                    </div>

                    <p className="font-bold text-emerald-600">{deal.price}</p>
                  </div>

                  <button className="mt-5 w-full rounded-xl bg-gray-900 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500">
                    Compare Prices
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why OurMart */}
      <section className="bg-gray-900 px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
              Why OurMart?
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              One search.
              <br />
              Better shopping decisions.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {[
              ["💰", "Price Compare", "Compare prices across multiple stores."],
              ["⭐", "Review Intelligence", "Understand what real buyers say."],
              ["📉", "Price History", "See whether today's deal is actually good."],
              ["🤖", "OurMart AI", "Ask questions before making a decision."],
            ].map(([icon, title, description]) => (
              <div
                key={title}
                className="rounded-2xl border border-gray-700 bg-gray-800 p-6"
              >
                <div className="text-3xl">{icon}</div>

                <h3 className="mt-5 font-bold">{title}</h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
          <div className="font-bold text-gray-900">
            OUR<span className="text-emerald-500">MART</span>
          </div>

          <p>Search Once. Compare Everything. Shop Smarter.</p>

          <p>© 2026 OurMart</p>
        </div>
      </footer>
    </main>
  );
}