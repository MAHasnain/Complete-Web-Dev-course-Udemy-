import { useState } from "react";
import { useDispatch } from "react-redux";
import authService from "../Appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { register, handleSubmit } from "react-hook-form";
import { login } from "../store/authSlice";
import Logo from "./logo";
import Input from "./Input";
import Button from "./Button";
const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const signup = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const user = await authService.getCurrentUser();
        if (user) dispatch(login(user));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div
          className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
        >
          <div className="mb-2 flex justify-center">
            <span className="inline-block w-full max-w-[100px]">
              <Logo width="100%" />
            </span>
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight">
            Sign up to create account
          </h2>
          <p className="mt-2 text-center text-base text-black/60">
            Already have an account?&nbsp;
            <Link
              to="/login"
              className="font-medium text-primary transition-all duration-200 hover:underline"
            >
              Sign in
            </Link>
          </p>
          {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
          <form onSubmit={handleSubmit(create)}>
            <div className="space-y-5">
              <Input
                label="Full Name"
                placeholder="Enter your full name"
                {...register("name", { required: true })}
              />
              <Input
                type="email"
                label="Email: "
                placeholder="Enter your email"
                {...register("email", {
                  required: true,
                })}
              />
              <Button type="submit" className="w-full">
                Create Account
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
