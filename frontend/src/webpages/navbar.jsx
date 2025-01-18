import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PiCoins } from "react-icons/pi";

function Navbar(props) {
  const [renderTrigger, setRenderTrigger] = useState(false); 

  const logOut = () => {
    localStorage.removeItem("token");
    setRenderTrigger(!renderTrigger);
  };

  const isLoggedIn = localStorage.getItem("token"); 

  return (
    <nav className="bg-black text-white shadow-lg z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center space-x-2 text-xl font-bold text-white hover:text-gray-300 transition duration-150"
          >
            <PiCoins className="h-8 w-8" />
            <span>Penny-Pilot</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <button
                onClick={logOut}
                className="text-base px-6 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition duration-150"
              >
                <Link
                  to="/"
                >
                  Sign Out
                </Link>
              </button>
            ) : (
              <Link
                to="/login"
                className="text-base px-6 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition duration-150"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
