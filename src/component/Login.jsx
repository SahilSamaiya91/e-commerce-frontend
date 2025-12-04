import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

// background-color: #f2f2f2;
//     border-radius: 10px;
//     padding: 23px 30px 30px;

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10  m-10 items-start">
        <div className="bg-[#f2f2f2] p-5 rounded-md justify-center items-center">
          <div className="text-4xl text-center"> Sign in with tomec</div>

          <div className="flex flex-col gap-2">
            <form className="flex flex-col gap-4">
              {/* EMAIL FIELD + ERROR */}
              <div>
                <input
                  type="email"
                  placeholder="EMAIL"
                  className="w-full p-3 border  rounded bg-white text-gray-700 border-gray-300   "
                />
              </div>

              {/* PASSWORD */}
              <input
                type="password"
                placeholder="PASSWORD"
                className="w-full p-3 border border-gray-300 rounded bg-white text-gray-700"
              />
            </form>
            <p>Forgot Password</p>
            <button className="w-1/2   bg-white border border-gray-300 p-1 rounded-full  text-gray-700">
              {" "}
              Sign in{" "}
            </button>
            <p>OR</p>

            <button className=" w-1/2   bg-white border border-gray-300 p-1 rounded-full  text-gray-700">
              Continue with GOOGLE
            </button>
          </div>
        </div>
        <div className="bg-[#f2f2f2] p-5 rounded-md">
          <div className="text-4xl text-center ">Join Tomec tomec</div>
          <div className="flex flex-col gap-2">
            <p className="text-orange-400 text-center">
              Register and get 500rs off on first order
            </p>
            <p className="text-center">
              Transform your wardrobe bottoms with our shoes and Accessoriesr
              and make Dhoom in the marker
            </p>
            <button onClick={() => navigate("/register")}>Sign up</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
