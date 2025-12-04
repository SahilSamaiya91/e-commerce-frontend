import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { registerUser } from "../api/auth-api";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const user = { firstName, lastName, email, password };

  const handleRegister = async (e) => {
    e.preventDefault();
    const result = await registerUser(user);
    console.log(result);
  };

  return (
    <div className="flex justify-center py-10">
      <div className="w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* LEFT SIDE — SIGN IN BOX */}
        <div className="bg-[#f2f2f2] p-10 rounded-md flex flex-col justify-center items-center text-center">
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

        {/* RIGHT SIDE — SIGN UP FORM */}
        <div className="w-full bg-[#f2f2f2] p-8 rounded-md">
          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-4xl font-light">Sign up with Tomec</h1>
            <p className="text-orange-600">
              Register and get 50 Free 4x6 prints!
            </p>
            <p className="text-sm  text-gray-500">
              Sign up with Google or Email
            </p>
            <button className=" w-1/2   bg-white border border-gray-300 p-1 rounded-full  text-gray-700">
              Continue with GOOGLE
            </button>

            <div className=" text-gray-400 my-2">OR</div>

            {/* FORM */}
            <div className="w-full ">
              <form className="flex flex-col gap-4">
                {/* EMAIL FIELD + ERROR */}
                <div>
                  <input
                    type="email"
                    placeholder="EMAIL"
                    className="w-full p-3 border  rounded bg-white text-gray-700 border-gray-300"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

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
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? "🙈" : "👁️"} {/* simple emoji icon */}
                  </button>
                </div>

                {/* FIRST + LAST NAME */}
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="FIRST NAME"
                    className="p-3 border border-gray-300 rounded bg-white text-gray-700 "
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />

                  <input
                    type="text"
                    placeholder="LAST NAME"
                    className="p-3 border border-gray-300 rounded bg-white text-gray-700"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>

                {/* SUBMIT */}
                <div className="flex justify-center mt-4">
                  <button
                    type="button"
                    className="bg-[#306e83] hover:bg-[#265a6b] text-white font-bold py-3 px-16 rounded-full uppercase tracking-wide transition"
                    onClick={handleRegister}
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
