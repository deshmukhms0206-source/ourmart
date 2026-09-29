"use client";

import { useState } from "react";

const stores = [
  {
    name: "Amazon",
    price: 699,
    rating: 4.4,
    delivery: "2-4 days",
    returns: "7 days",
  },
  {
    name: "Flipkart",
    price: 749,
    rating: 4.3,
    delivery: "2-3 days",
    returns: "7 days",
  },
  {
    name: "Myntra",
    price: 799,
    rating: 4.5,
    delivery: "3-5 days",
    returns: "14 days",
  },
  {
    name: "Meesho",
    price: 679,
    rating: 4.1,
    delivery: "4-6 days",
    returns: "7 days",
  },
  {
    name: "AJIO",
    price: 729,
    rating: 4.2,
    delivery: "3-5 days",
    returns: "10 days",
  },
];

export default function ProductPage() {
  const [wishlisted, setWishlisted] = useState(false);

  const lowestPrice = Math.min(...stores.map((store) => store.price));

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      {/* Navbar */}
      <nav className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="text-2xl font-bold">
            OUR<span className="text-green-600">MART</span>
          </a>

          <div className="hidden gap-8 text-sm font-medium md:flex">
            <a href="/" className="hover:text-green-600">
              Home
            </a>
            <a href="/search" className="hover:text-green-600">
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

      {/* Product */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        {/* Breadcrumb */}
        <p className="mb-8 text-sm text-zinc-500">
          Home / Fashion / Women&apos;s Kurti
        </p>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Product Image */}
          <div className="flex min-h-[500px] items-center justify-center rounded-3xl bg-white p-10 shadow-sm">
            <div className="text-[180px]">👗</div>
          </div>

          {/* Product Information */}
          <div className="py-4">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-sm font-semibold text-green-600">
                  FASHION
                </p>

                <h1 className="mt-2 text-4xl font-bold">
                  Women&apos;s Kurti
                </h1>

                <p className="mt-2 text-zinc-500">
                  Comfortable everyday printed kurti
                </p>
              </div>

              <button
                onClick={() => setWishlisted(!wishlisted)}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white text-2xl"
              >
                {wishlisted ? "♥" : "♡"}
              </button>
            </div>

            {/* Rating */}
            <div className="mt-6 flex items-center gap-3">
              <span className="rounded-lg bg-green-100 px-3 py-2 text-sm font-bold text-green-700">
                ★ 4.4
              </span>

              <span className="text-sm text-zinc-500">
                1,240 reviews
              </span>
            </div>

            {/* Price */}
            <div className="mt-8 rounded-2xl bg-green-50 p-6">
              <p className="text-sm text-zinc-500">Lowest listed price</p>

              <div className="mt-1 flex items-end gap-3">
                <span className="text-4xl font-bold">
                  ₹{lowestPrice}
                </span>

                <span className="mb-1 text-sm text-green-700">
                  Best listed price
                </span>
              </div>
            </div>

            {/* Product Highlights */}
            <div className="mt-8">
              <h2 className="text-lg font-bold">Why consider this?</h2>

              <ul className="mt-4 space-y-3 text-sm text-zinc-600">
                <li>✓ Good customer rating</li>
                <li>✓ Available across multiple stores</li>
                <li>✓ Multiple return policies to compare</li>
                <li>✓ Lowest listed price currently ₹{lowestPrice}</li>
              </ul>
            </div>

            <button className="mt-8 w-full rounded-xl bg-green-600 py-4 font-semibold text-white hover:bg-green-700">
              Track Price
            </button>
          </div>
        </div>

        {/* Comparison */}
        <section className="mt-16">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-green-600">
              Compare
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Compare prices across stores
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-zinc-200 bg-white">
            <table className="w-full min-w-[700px] text-left">
              <thead className="border-b border-zinc-200 bg-zinc-50">
                <tr>
                  <th className="px-6 py-4 text-sm font-semibold">
                    Store
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold">
                    Price
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold">
                    Rating
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold">
                    Delivery
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold">
                    Returns
                  </th>

                  <th className="px-6 py-4"></th>
                </tr>
              </thead>

              <tbody>
                {stores.map((store) => (
                  <tr
                    key={store.name}
                    className="border-b border-zinc-100 last:border-0"
                  >
                    <td className="px-6 py-5 font-semibold">
                      {store.name}
                    </td>

                    <td className="px-6 py-5 font-bold">
                      ₹{store.price}
                    </td>

                    <td className="px-6 py-5">
                      ⭐ {store.rating}
                    </td>

                    <td className="px-6 py-5 text-sm text-zinc-600">
                      {store.delivery}
                    </td>

                    <td className="px-6 py-5 text-sm text-zinc-600">
                      {store.returns}
                    </td>

                    <td className="px-6 py-5">
                      <button className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-green-600">
                        Visit Store
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Transparent Insights */}
        <section className="mt-16 grid gap-5 md:grid-cols-4">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-zinc-500">Lowest Price</p>
            <p className="mt-2 text-2xl font-bold">₹679</p>
            <p className="mt-1 text-xs text-zinc-400">Meesho</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-zinc-500">Highest Rating</p>
            <p className="mt-2 text-2xl font-bold">4.5 ⭐</p>
            <p className="mt-1 text-xs text-zinc-400">Myntra</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-zinc-500">Fastest Delivery</p>
            <p className="mt-2 text-2xl font-bold">2-3 days</p>
            <p className="mt-1 text-xs text-zinc-400">Flipkart</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-zinc-500">Longest Return</p>
            <p className="mt-2 text-2xl font-bold">14 days</p>
            <p className="mt-1 text-xs text-zinc-400">Myntra</p>
          </div>
        </section>

        {/* Product Details */}
        <section className="mt-16 rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold">Product Details</h2>

          <div className="mt-6 grid gap-6 text-sm text-zinc-600 md:grid-cols-2">
            <div>
              <p className="font-semibold text-zinc-900">Category</p>
              <p className="mt-1">Women&apos;s Fashion</p>
            </div>

            <div>
              <p className="font-semibold text-zinc-900">Material</p>
              <p className="mt-1">Cotton Blend</p>
            </div>

            <div>
              <p className="font-semibold text-zinc-900">Fit</p>
              <p className="mt-1">Regular Fit</p>
            </div>

            <div>
              <p className="font-semibold text-zinc-900">Occasion</p>
              <p className="mt-1">Casual / Daily Wear</p>
            </div>
          </div>
        </section>
      </section>

      {/* Footer */}
      <footer className="mt-10 border-t border-zinc-200 bg-white px-6 py-8 text-center text-sm text-zinc-400">
        © 2026 OURMART — Search Once. Compare Everything. Shop Smarter.
      </footer>
    </main>
  );
}