"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Email format regex
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // ✅ Form valid condition
  const isFormValid =
    email.trim() !== "" && isEmailValid && password.length >= 8;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // ❌ Validation errors
    if (!email) {
      setError("Email is required");
      return;
    }

    if (!isEmailValid) {
      setError("Please enter a valid email address");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    // ✅ Start login
    setError("");
    setLoading(true);

    try {
      // ⏳ Fake API delay (replace with real backend API)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // ❌ Example invalid credentials
      if (email !== "test@gmail.com" || password !== "password123") {
        throw new Error("Invalid email or password");
      }

      alert("Login successful ✅");

    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden flex">

        {/* LEFT PANEL */}
        <div className="hidden md:flex w-1/2 items-center justify-center">
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

          <h2 className="text-2xl font-semibold text-center mb-8">
            Welcome Back! Please Enter Your Details.
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit}>

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border px-4 py-3
                         focus:outline-none focus:ring-2 focus:ring-black-500"
            />

            {/* PASSWORD */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border px-4 py-3
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

            {/* ERROR MESSAGE */}
            {error && (
              <p className="text-sm text-red-500">{error}</p>
            )}

            {/* LINKS */}
            <div className="flex justify-between text-sm">
              <a href="/Forget" className="text-green-600 hover:underline">
                Forgot password?
              </a>
              <a href="/signup" className="text-green-600 hover:underline">
                Create account
              </a>
            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              disabled={!isFormValid || loading}
              className={`w-full py-3 rounded-lg font-semibold
                transition-all duration-300
                ${
                  isFormValid && !loading
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-green-600 text-white opacity-40 cursor-not-allowed"
                }`}
            >
              {loading ? "Logging in..." : "LOGIN"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
