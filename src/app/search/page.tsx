"use client";

import { useState } from "react";

const products = [
  {
    name: "Women's Kurti",
    brand: "Fashion Collection",
    category: "Fashion",
    image: "👗",
    price: 699,
    rating: 4.4,
    reviews: 1240,
    store: "Amazon",
  },
  {
    name: "Wireless Earbuds",
    brand: "SoundPro",
    category: "Electronics",
    image: "🎧",
    price: 1299,
    rating: 4.3,
    reviews: 856,
    store: "Flipkart",
  },
  {
    name: "Running Shoes",
    brand: "SportFit",
    category: "Fashion",
    image: "👟",
    price: 1499,
    rating: 4.5,
    reviews: 632,
    store: "Myntra",
  },
  {
    name: "Smart Watch",
    brand: "TechTime",
    category: "Electronics",
    image: "⌚",
    price: 1999,
    rating: 4.2,
    reviews: 421,
    store: "Meesho",
  },
  {
    name: "Face Serum",
    brand: "GlowCare",
    category: "Beauty",
    image: "🧴",
    price: 549,
    rating: 4.6,
    reviews: 2100,
    store: "AJIO",
  },
  {
    name: "Oversized Hoodie",
    brand: "Urban Wear",
    category: "Fashion",
    image: "🧥",
    price: 799,
    rating: 4.3,
    reviews: 987,
    store: "Amazon",
  },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    `${product.name} ${product.brand} ${product.category}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      {/* Navbar */}
      <nav className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="text-2xl font-bold tracking-tight">
            OUR<span className="text-green-600">MART</span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="/" className="hover:text-green-600">
              Home
            </a>
            <a href="/search" className="text-green-600">
              Search
            </a>
            <a href="#" className="hover:text-green-600">
              Wishlist
            </a>
            <a href="#" className="hover:text-green-600">
              Login
            </a>
          </div>
        </div>
      </nav>

      {/* Search Header */}
      <section className="border-b border-zinc-200 bg-white px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-medium text-green-600">
                OURMART SEARCH
              </p>

              <h1 className="mt-1 text-3xl font-bold">
                Compare products before you buy.
              </h1>
            </div>

            <div className="flex w-full max-w-xl overflow-hidden rounded-xl border border-zinc-200 bg-white">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="min-w-0 flex-1 px-4 py-3 outline-none"
              />

              <button className="bg-green-600 px-6 font-semibold text-white hover:bg-green-700">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
          {/* Filters */}
          <aside className="h-fit rounded-2xl border border-zinc-200 bg-white p-5">
            <h2 className="font-semibold">Filters</h2>

            <div className="mt-6">
              <p className="text-sm font-semibold">Category</p>

              <div className="mt-3 space-y-3 text-sm text-zinc-600">
                <label className="flex gap-2">
                  <input type="checkbox" />
                  Fashion
                </label>

                <label className="flex gap-2">
                  <input type="checkbox" />
                  Mobiles
                </label>

                <label className="flex gap-2">
                  <input type="checkbox" />
                  Beauty
                </label>

                <label className="flex gap-2">
                  <input type="checkbox" />
                  Electronics
                </label>
              </div>
            </div>

            <div className="mt-7">
              <p className="text-sm font-semibold">Price</p>

              <div className="mt-3 space-y-3 text-sm text-zinc-600">
                <label className="flex gap-2">
                  <input type="checkbox" />
                  Under ₹500
                </label>

                <label className="flex gap-2">
                  <input type="checkbox" />
                  ₹500 – ₹1,000
                </label>

                <label className="flex gap-2">
                  <input type="checkbox" />
                  ₹1,000 – ₹2,000
                </label>

                <label className="flex gap-2">
                  <input type="checkbox" />
                  Above ₹2,000
                </label>
              </div>
            </div>

            <div className="mt-7">
              <p className="text-sm font-semibold">Rating</p>

              <div className="mt-3 space-y-3 text-sm text-zinc-600">
                <label className="flex gap-2">
                  <input type="checkbox" />
                  ⭐ 4+ rating
                </label>

                <label className="flex gap-2">
                  <input type="checkbox" />
                  ⭐ 3+ rating
                </label>
              </div>
            </div>
          </aside>

          {/* Products */}
          <div>
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">
                  {filteredProducts.length} Products
                </h2>

                <p className="mt-1 text-sm text-zinc-500">
                  Compare prices across multiple stores.
                </p>
              </div>

              <select className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm outline-none">
                <option>Sort: Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
              </select>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-zinc-300 bg-white p-12 text-center">
                <div className="text-4xl">🔎</div>
                <h2 className="mt-4 text-xl font-semibold">
                  No products found
                </h2>
                <p className="mt-2 text-sm text-zinc-500">
                  Try searching for another product.
                </p>
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <div
                    key={product.name}
                    className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    {/* Product Image */}
                    <div className="relative flex h-52 items-center justify-center bg-zinc-100 text-7xl">
                      {product.image}

                      <button
                        aria-label="Add to wishlist"
                        className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg shadow-sm hover:text-red-500"
                      >
                        ♡
                      </button>
                    </div>

                    {/* Product Info */}
                    <div className="p-5">
                      <p className="text-xs font-medium text-green-600">
                        {product.category}
                      </p>

                      <h3 className="mt-2 text-lg font-semibold">
                        {product.name}
                      </h3>

                      <p className="mt-1 text-sm text-zinc-500">
                        {product.brand}
                      </p>

                      <div className="mt-3 flex items-center gap-2">
                        <span className="rounded-md bg-green-50 px-2 py-1 text-xs font-semibold text-green-700">
                          ★ {product.rating}
                        </span>

                        <span className="text-xs text-zinc-400">
                          {product.reviews.toLocaleString()} reviews
                        </span>
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        <div>
                          <p className="text-2xl font-bold">
                            ₹{product.price.toLocaleString()}
                          </p>

                          <p className="text-xs text-zinc-400">
                            Listed on {product.store}
                          </p>
                        </div>
                      </div>

                      <button className="mt-5 w-full rounded-xl bg-zinc-900 py-3 text-sm font-semibold text-white transition hover:bg-green-600">
                        Compare Prices
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}