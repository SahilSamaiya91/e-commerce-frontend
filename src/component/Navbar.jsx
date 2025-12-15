import { useNavigate } from "react-router-dom";
import {useAuth} from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const {isAuthenticated , user , logout} = useAuth();
  return (
    <nav className="w-full bg-white border-b lg:h-[20vh]">
      {/* -------- TOP ROW -------- */}
      <div className="flex flex-col lg:flex-row lg:items-center px-5 lg:px-10 lg:h-3/4 gap-4 lg:gap-15">
        {/* Row 1 (Brand + Actions) */}
        <div className="flex items-center justify-between lg:justify-start">
          {/* Brand */}
          <div className="text-4xl lg:text-5xl font-bold">TOMEC</div>

          {/* Right Actions */}
          <div className="flex items-center gap-6 text-sm font-medium lg:absolute lg:right-20">
            <div className="flex gap-1 items-center relative group">
              <img src="/person.png" className="h-6 w-6" />
              <div className="font-semibold text-[1.0625rem] hidden sm:block ">
                {isAuthenticated ? (
                  <div> Hi {user?.firstname} </div>
                ) : (
                  <div>Sign In / Join</div>
                )}
              </div>

              <div className="absolute top-full right-0 hidden group-hover:block w-70 bg-white shadow z-50">
                {!isAuthenticated ? (
                  <div className="p-3 flex flex-col gap-2">
                    <p className="font-semibold text-lg">WELCOME</p>
                    <p className="font-light">
                      To access account and manage orders
                    </p>
                    <button
                      onClick={() => navigate("/login")}
                      className="bg-[#eceb0b] w-3/4 h-12 font-bold"
                    >
                      LOGIN/SIGNUP
                    </button>
                  </div>
                ) : (
                  <div className="p-3 flex flex-col gap-2">
                    <p className="font-light">
                      To login with another account
                    </p>
                    <button
                      onClick={() => {
                        logout()
                        navigate("/")
                      }}
                      className="bg-[#eceb0b] w-3/4 h-12 font-bold"
                    >
                      LOGOUT
                    </button>
                  </div>
                )}
                <hr className="border-t border-gray-300 m-4" />
                <div className="flex flex-col gap-4 p-3 text-lg">
                  <div>Track your Order</div>
                  <div>Return and Exchange</div>
                  <div>Design of Our's</div>
                  <div>Care</div>
                  <div>Faq's</div>
                </div>
              </div>
            </div>
            <div className="flex gap-1 items-center">
              <img src="/cart.png" className="h-6 w-6" />
              <button className="font-semibold text-[1.0625rem] hidden sm:block">
                Cart
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div
          className="
            group flex gap-5 items-center
            border-2 border-[#ecf4f5]
            rounded-3xl px-4 py-2
            bg-[#ecf4f5] text-[#012832]
            transition-colors duration-200
            hover:border-[#256d7f]
            w-full lg:w-1/2
          "
        >
          <div className="text-sm font-semibold">SEARCH</div>
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none w-full"
          />
        </div>
      </div>

      {/* -------- BOTTOM ROW -------- */}
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-start gap-6 lg:gap-10 text-base lg:text-xl font-semibold px-5 lg:px-10 pb-4 ">
        <button>Men</button>
        <button>Women</button>
        <button>Accessories</button>
        <button>Brands</button>
        <button>About Us</button>
      </div>
    </nav>
  );
};

export default Navbar;
