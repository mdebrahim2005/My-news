"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleRegister = async (formData) => {
    const { name, photoURL, email, password } = formData;

    const { data, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photoURL,
      callbackURL: "/",
    });

    if (error) {
      console.error("Error during registration:", error);
      alert(`Registration failed: ${error.message || "Bad Request"}`);
      return;
    }

    if (data) {
      alert("Registration successful!");
      reset();
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F3F3] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-10 sm:p-14 rounded-lg shadow-sm">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800 pb-8 border-b border-gray-200">
          Register your account
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit(handleRegister)} className="mt-8 space-y-5">
          {/* Your Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-3 bg-[#F3F3F3] text-gray-700 placeholder-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
            />
            {errors.name && (
              <p className="text-xs mt-1 text-red-500">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Photo URL
            </label>
            <input
              type="text"
              placeholder="Enter photo url"
              {...register("photoURL", { required: "Photo URL is required" })}
              className="w-full px-4 py-3 bg-[#F3F3F3] text-gray-700 placeholder-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
            />
            {errors.photoURL && (
              <p className="text-xs mt-1 text-red-500">
                {errors.photoURL.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-3 bg-[#F3F3F3] text-gray-700 placeholder-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
            />
            {errors.email && (
              <p className="text-xs mt-1 text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <div className="relative flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                })}
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
              <p className="text-xs mt-1 text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Terms & Conditions Checkbox */}
          <div>
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                className="checkbox checkbox-xs rounded"
                {...register("terms", {
                  required: "You must accept terms & conditions",
                })}
              />
              <span className="text-xs text-gray-500">
                Accept{" "}
                <span className="font-semibold text-gray-700">
                  Term & Conditions
                </span>
              </span>
            </label>
            {errors.terms && (
              <p className="text-xs mt-1 text-red-500">
                {errors.terms.message}
              </p>
            )}
          </div>

          {/* Register Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 bg-[#403F3F] hover:bg-[#2b2a2a] disabled:opacity-60 text-white font-medium rounded transition duration-200 text-base"
            >
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </div>
        </form>

        {/* Footer Link */}
        <p className="mt-8 text-center text-sm font-semibold text-gray-600">
          Already Have An Account ?{" "}
          <Link href="/login" className="text-[#F75B5F] hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}