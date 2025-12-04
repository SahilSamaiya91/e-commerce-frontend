import React from "react";

const Navbar = () => {
  const isLoggedIn = false; // Later replace with real auth state

  return (
    <nav className="w-full bg-blue-300 text-white py-4 px-6 flex justify-between items-center">
      {/* LEFT — BRAND */}
      <div className="text-2xl font-bold cursor-pointer">
        LUCIFER SHOES
      </div>

      {/* RIGHT — MENU */}
      <div className="flex items-center gap-8 relative">

        <p className="cursor-pointer">Footwear</p>
        <p className="cursor-pointer">Brands</p>
        <p className="cursor-pointer">Accessories</p>

        {/* ACCOUNT HOVER DROPDOWN */}
        <div className="relative group">
          <p className="cursor-pointer">Account</p>

          {/* Dropdown appears when parent is hovered */}
          <div className="
            absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg py-2 
            opacity-0 invisible group-hover:opacity-100 group-hover:visible 
            transition-all duration-200
          ">
            {!isLoggedIn ? (
              <>
                <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Welcome
                </p>
                <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Login
                </p>
              </>
            ) : (
              <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Logout
              </p>
            )}
          </div>
        </div>

        <p className="cursor-pointer">Cart</p>
        <p className="cursor-pointer">Favourites</p>

      </div>
    </nav>
  );
};

export default Navbar;