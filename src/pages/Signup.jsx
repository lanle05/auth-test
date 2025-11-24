import { Link } from "react-router-dom";
import Input from "../components/Input";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Create Account
        </h2>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Get started with your business account
        </p>

        <form>
          <Input
            label="Business Name"
            type="text"
            id="businessName"
            placeholder="My Awesome Company"
          />
          <Input
            label="Phone Number"
            type="tel"
            id="phone"
            placeholder="+234 800 000 0000"
          />
          <Input
            label="Email Address"
            type="email"
            id="email"
            placeholder="work@business.com"
          />
          <Input
            label="Password"
            type="password"
            id="password"
            placeholder="Create a strong password"
          />

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition mt-4 font-semibold">
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 hover:underline font-medium"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
