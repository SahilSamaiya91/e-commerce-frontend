import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/auth-api";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (!firstname || !lastname || !email || !password) {
      setError("Please fill all the fields");
      return;
    }

    if (password.length < 7) {
      setError("Password must be at least 7 characters");
      return;
    }

    try {
      const result = await registerUser({
        firstname,
        lastname,
        email,
        password,
      });

      login(result);
      navigate("/");
    } catch (err) {
      if (err.message.includes("Email already exists")) {
        setError("Email already exists. Please sign in.");
      } else {
        setError("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <div className="w-full px-4 py-12">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* LEFT — SIGN IN BOX */}
        <div className="bg-[#f2f2f2] px-8 py-10 rounded-md flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl mb-6">Already have an account?</h1>

          <div className="flex flex-col gap-4 items-center">
            <p className="text-lg">Buy something beautiful</p>

            <button
              onClick={() => navigate("/login")}
              className="bg-[#306e83] hover:bg-[#265a6b] text-white font-bold py-3 px-16 rounded-full uppercase tracking-wide transition"
            >
              Sign in
            </button>
          </div>
        </div>

        {/* RIGHT — SIGN UP FORM */}
        <div className="bg-[#f2f2f2] px-8 py-10 rounded-md">
          <div className="flex flex-col gap-6 items-center">
            <div className="text-center">
              <h1 className="text-4xl font-light">Sign up with Tomec</h1>
              <p className="text-orange-600 mt-2">
                Register and get 50 Free 4x6 prints!
              </p>
            </div>

            <div className="text-gray-400">OR</div>

            <form className="w-full flex flex-col gap-4">
              {/* EMAIL */}
              <input
                type="email"
                placeholder="EMAIL"
                className="w-full p-3 border rounded bg-white text-gray-700 border-gray-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* PASSWORD */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="PASSWORD"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded pr-10 bg-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>

              {/* FIRST + LAST NAME */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="FIRST NAME"
                  className="p-3 border border-gray-300 rounded bg-white text-gray-700"
                  value={firstname}
                  onChange={(e) => setfirstname(e.target.value)}
                />

                <input
                  type="text"
                  placeholder="LAST NAME"
                  className="p-3 border border-gray-300 rounded bg-white text-gray-700"
                  value={lastname}
                  onChange={(e) => setlastname(e.target.value)}
                />
              </div>

              {/* SUBMIT */}
              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  onClick={handleRegister}
                  className="bg-[#306e83] hover:bg-[#265a6b] text-white font-bold py-3 px-16 rounded-full uppercase tracking-wide transition"
                >
                  Sign Up
                </button>
              </div>

              {error && (
                <p className="text-red-500 text-md text-center mt-2">{error}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
