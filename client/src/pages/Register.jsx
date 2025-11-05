import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ added
import AuthLayout from "../layouts/AuthLayout";
import axios from "axios";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // ✅ added

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Registering...");

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/register",
        form
      );

      if (data && data.user) {
        setMessage("✅ Registration successful!");
        console.log("User registered:", data.user);

        localStorage.setItem("user", JSON.stringify(data.user));

        // ✅ Redirect using React Router instead of window.location
        setTimeout(() => navigate("/"), 1000);
      } else {
        setMessage("⚠️ Unexpected response from server.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      setMessage(
        error.response?.data?.message || "❌ Registration failed. Try again."
      );
    }
  };

  return (
    <AuthLayout title="Create Account">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          Create your account
        </h1>
        <p className="text-gray-600 mt-2">
          Join Mentor Dashboard and start your journey 🚀
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-5 bg-gray-50 p-6 rounded-2xl shadow-md border border-gray-200"
      >
        {/* Full Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-800 mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition duration-200 text-gray-900 placeholder-gray-400"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>

        {/* Email */}
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
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        {/* Password */}
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
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>

        {/* Message Display */}
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
          Register
        </button>

        {/* Footer Links */}
        <div className="text-center mt-4 text-sm text-gray-600">
          <p>
            Already have an account?{" "}
            <a
              href="/login"
              className="text-indigo-600 font-semibold hover:underline"
            >
              Login here
            </a>
          </p>
        </div>
      </form>

      {/* Background Styling */}
      <style jsx>{`
        :global(body) {
          @apply bg-gradient-to-br from-indigo-100 via-white to-gray-100 text-gray-900 antialiased;
        }
      `}</style>
    </AuthLayout>
  );
};

export default Register;
