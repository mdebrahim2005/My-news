"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleSubmitlogin = async (formData) => {
    const { data, error } = await authClient.signIn.email({
      email: formData.email,
      password: formData.password,
      rememberMe: true,
      callbackURL: "/",
    });

    if (error) {
      console.error("Login error:", error);
      alert(`Login failed: ${error.message || "Invalid credentials"}`);
      return;
    }

    if (data) {
      alert("Login successful!");
      reset();
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F3F3] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-10 sm:p-14 rounded-lg shadow-sm">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800 pb-8 border-b border-gray-200">
          Login your account
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit(handleSubmitlogin)} className="mt-8 space-y-6">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email address
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-3 bg-[#F3F3F3] text-gray-700 placeholder-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <div className="relative flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                {...register("password", { required: "Password is required" })}
                className="w-full pl-4 pr-12 py-3 bg-[#F3F3F3] text-gray-700 placeholder-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-4 text-gray-500 hover:text-gray-700 focus:outline-none cursor-pointer"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <FaEyeSlash className="w-5 h-5" />
                ) : (
                  <FaEye className="w-5 h-5" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 bg-[#403F3F] hover:bg-[#2b2a2a] disabled:opacity-60 text-white font-medium rounded transition duration-200 text-base"
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>

        {/* Footer Link */}
        <p className="mt-8 text-center text-sm font-semibold text-gray-600">
          Don&apos;t Have An Account ?{" "}
          <Link href="/register" className="text-[#F75B5F] hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}