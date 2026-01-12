"use client";

import { useState } from "react";

export default function Home() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    setError("");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      
      {/* CARD */}
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden flex">

        {/* LEFT PANEL */}
        <div className="hidden md:flex w-1/2 bg-white-50 items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-6">🌿</div>
            <h1 className="text-4xl font-bold">Zero Artificial</h1>
            <p className="text-gray-600 mt-3 text-lg">
              Pure AI. Zero Artificial.
            </p>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-full md:w-1/2 p-10 md:p-12">

          {/* MOBILE LOGO */}
          <div className="text-center mb-8 md:hidden">
            <div className="text-5xl mb-3">🌿</div>
            <h1 className="text-3xl font-bold">Zero Artificial</h1>
            <p className="text-gray-600 mt-2">
              Pure AI. Zero Artificial.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-center mb-8">
            Welcome Back! Please Enter Your Details.
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit}>

            {/* EMAIL */}
            <input
              type="email"
              name="username"
              autoComplete="username"
              required
              placeholder="Email address"
              className="w-full rounded-lg border px-4 py-3 text-base
                         focus:outline-none focus:ring-2 focus:ring-black-500"
            />
            {/* PASSWORD */}
           <div className="relative">
  <input
    type={showPassword ? "text" : "password"}
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder="Password"
    className="w-full rounded-lg border px-4 py-3 text-base
                         focus:outline-none focus:ring-2 focus:ring-black-500"
  />

  <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="eye-btn"
                aria-label="Toggle password visibility"
              >
                {showPassword ? (
                  // OPEN EYE
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7
                      -1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ) : (
                  // CLOSED EYE
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M3 3l18 18" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M10.58 10.58A3 3 0 0012 15a3 3 0 002.42-4.42" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M6.223 6.223A9.956 9.956 0 0112 5c4.478 0 8.268 2.943 9.542 7
                      a9.958 9.958 0 01-4.132 5.303" />
                  </svg>
                )}
              </button>
</div>



            {error && (
              <p className="text-sm text-red-500">{error}</p>
            )}

            <div className="text-right">
              <a
                href="/Forget"
                className="text-sm text-green-600 hover:underline"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg
                         font-semibold hover:bg-green-700 transition"
            >
              LOGIN
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don’t have an account?{" "}
            <a href="#" className="text-green-600 font-medium hover:underline">
              Create an account
            </a>
          </p>

        </div>
      </div>
    </div>
  );
}
