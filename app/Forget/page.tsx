"use client";

import { useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Home() {
  const [sent, setSent] = useState(false);

  return (
    <main
      className={`w-full max-w-md bg-white rounded-2xl shadow-xl p-8 ${poppins.className}`}
    >

      {/* Logo */}
      <div className="flex justify-center mb-6">
        
          <span className="text-white text-3xl font-bold">🌿</span>
        
      </div>

      {!sent ? (
        <>
          <h1 className="text-2xl font-bold text-center mb-2">
            Forgot Password?
          </h1>

          <p className="text-center text-gray-500 mb-6">
            Enter your email address and we’ll send you a password reset link.
          </p>

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <input
              type="email"
              required
              placeholder="Email address"
              className="w-full rounded-lg border px-4 py-3"
            />

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Send Reset Link
            </button>
          </form>
        </>
      ) : (
        <>
          <h1 className="text-2xl font-bold text-center mb-4">
            Check your email 
          </h1>
<p className="text-center text-[#1fa463] font-semibold">
  A password reset link has been sent to your email address.
</p>

        </>
      )}

    </main>
  );
}