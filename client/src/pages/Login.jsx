import React, { useState } from "react";
import AuthLayout from "../layouts/AuthLayout";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Logging in...");

    try {
      //  Backend API call
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      if (data && data.user) {
        setMessage("✅ Login successful!");
        console.log("User:", data.user);

        // Store user in localStorage (temporary)
        localStorage.setItem("user", JSON.stringify(data.user));

        // Redirect to dashboard (adjust route if needed)
        window.location.href = "/dashboard";
      } else {
        setMessage("⚠️ Invalid response from server.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage(
        error.response?.data?.message || "❌ Invalid email or password."
      );
    }
  };

  return (
    <AuthLayout title="Welcome Back">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          Sign in to your account
        </h1>
        <p className="text-gray-600 mt-2">
          Continue your mentorship journey with confidence
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-5 bg-gray-50 p-6 rounded-2xl shadow-md border border-gray-200"
      >
        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-800 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition duration-200 text-gray-900 placeholder-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password Field */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-gray-800 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition duration-200 text-gray-900 placeholder-gray-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Message */}
        {message && (
          <p className="text-center text-sm text-gray-700 font-medium">
            {message}
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-2.5 rounded-lg shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all duration-300"
        >
          Sign In
        </button>

        {/* Footer Links */}
        <div className="text-center mt-4 text-sm text-gray-600">
          <p>
            Don’t have an account?{" "}
            <a
              href="/register"
              className="text-indigo-600 font-semibold hover:underline"
            >
              Register here
            </a>
          </p>
          <p className="mt-1">
            <a
              href="/forgot-password"
              className="text-indigo-500 hover:text-indigo-700 hover:underline"
            >
              Forgot your password?
            </a>
          </p>
        </div>
      </form>

      {/* Background Enhancement */}
      {/* <style jsx>{`
        :global(body) {
          @apply bg-gradient-to-br from-indigo-100 via-white to-gray-100;
        }
      `}</style> */}
    </AuthLayout>
  );
};

export default Login;
