import React, { useState , useRef , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth-api";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const checkLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email && !password) {
      setError("Email and password are required");
      return;
    }

    if (!email) {
      setError("Email is required");
      return;
    }

    if (!password) {
      setError("Password is required");
      return;
    }

    try {
      const result = await loginUser({ email, password });
      login(result);
      navigate("/");
    } catch (err) {
      if(err.message.includes("Services Are Down")) {
        setError("Please Try Again Later")
      }else{
        setError("Invalid user or password");
      }
      
    }
  };

   useEffect(() => {
    emailRef.current?.focus();
  }, []);

  return (
    <div className="w-full px-4 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        
        {/* LEFT: LOGIN */}
        <div className="bg-[#f2f2f2] px-6 py-8 rounded-md">
          <div className="text-4xl text-center mb-6">
            Sign in with tomec
          </div>

          <form className="flex flex-col gap-4" onSubmit={checkLogin}>
            {/* EMAIL */}
            <input
              type="email"
              placeholder="EMAIL"
              className="w-full p-3 border rounded bg-white text-gray-700 border-gray-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              ref = {emailRef}
            />

            {/* PASSWORD */}
            <input
              type="password"
              placeholder="PASSWORD"
              className="w-full p-3 border border-gray-300 rounded bg-white text-gray-700"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <p className="text-sm cursor-pointer">
              Forgot Password
            </p>

            <div className="flex justify-center mt-2">
              <button
                type="submit"
                className="w-1/2 bg-white border border-gray-300 py-2 rounded-full text-gray-700"
              >
                Sign in
              </button>
            </div>

            {error && (
              <p className="text-red-500 text-md text-center mt-2">
                {error}
              </p>
            )}
          </form>
        </div>

        {/* RIGHT: REGISTER CTA */}
        <div className="bg-[#f2f2f2] px-6 py-8 rounded-md flex flex-col justify-center">
          <div className="text-4xl text-center mb-4">
            Join Tomec tomec
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-orange-400 text-center">
              Register and get 500rs off on first order
            </p>

            <p className="text-center">
              Transform your wardrobe bottoms with our shoes and Accessories
              and make Dhoom in the market
            </p>

            <div className="flex justify-center mt-4">
              <button
                onClick={() => navigate("/register")}
                className="bg-white border border-gray-300 px-10 py-2 rounded-full"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;