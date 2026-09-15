import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link } from "react-router";
import axios from "axios";

function Login() {
  type LoginFormData = {
    username: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    console.log(data);
    try {
        const response = await axios.post("http://localhost:8000/api/v1/token/", data);
        console.log("Response",response.data);

    } catch (error) {
        console.log(error);

    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h2 className="mb-2 text-center text-3xl font-bold text-gray-800">
          Welcome Back
        </h2>

        <p className="mb-6 text-center text-sm text-gray-500">
          Login to your account
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Username
            </label>

            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              className={`w-full rounded-lg border px-4 py-2.5 outline-none transition focus:ring-2 ${
                errors.username
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
              }`}
              {...register("username", {
                required: "Username is required",
              })}
            />

            {errors.username && (
              <p className="mt-1 text-sm text-red-500">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className={`w-full rounded-lg border px-4 py-2.5 outline-none transition focus:ring-2 ${
                errors.password
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
              }`}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />

            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Remember Me / Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300"
              />
              Remember me
            </label>

            <button
              type="button"
              className="font-medium text-blue-600 hover:text-blue-700"
            >
              Forgot password?
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-2.5 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Login
          </button>
        </form>

        {/* Register */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <button
            type="button"
            className="font-semibold text-blue-600 hover:text-blue-700"
          >
            <Link to="/register">Register</Link>
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
