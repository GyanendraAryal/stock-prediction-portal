import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";

function Header() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLoggedIn(false);
    navigate("/login");
  };
  return (
    <header className="w-full bg-slate-800 shadow-md">
      <div
        className="
          mx-auto
          flex
          min-h-16
          w-full
          max-w-7xl
          items-center
          justify-between
          gap-4
          px-4
          py-3
          sm:px-6
          lg:px-8
        "
      >
        {/* Logo / Brand */}
        <Link
          to="/"
          className="
            text-lg
            font-bold
            text-white
            transition-colors
            hover:text-sky-400
            sm:text-xl
            md:text-2xl
          "
        >
          Stock Prediction Portal
        </Link>

        {/* Navigation Buttons */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          {isLoggedIn ? (
            <>
              <button
                className="
              flex h-9 min-w-18 items-center justify-center rounded-lg  bg-sky-500  px-3 text-sm font-medium  text-slate-900 transition-all duration-200 hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300 sm:h-10 sm:min-w-20 sm:px-4 sm:text-base cursor-pointer"
              >
                <Link to="/dashboard">Dashboard</Link>
              </button>
              <button
                onClick={handleLogout}
                className="
              flex h-9 min-w-18 items-center justify-center rounded-lg  bg-sky-500  px-3 text-sm font-medium  text-slate-900 transition-all duration-200 hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300 sm:h-10 sm:min-w-20 sm:px-4 sm:text-base cursor-pointer"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="
              flex cursor-pointer h-9 min-w-18 items-center justify-center rounded-lg  bg-sky-500  px-3 text-sm font-medium  text-slate-900 transition-all duration-200 hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300 sm:h-10 sm:min-w-20 sm:px-4 sm:text-base
            "
              >
                Login
              </Link>

              <Link
                to="/register"
                className=" flex cursor-pointer h-9 min-w-18 items-center justify-center rounded-lg border  border-sky-500 px-3 text-sm font-medium  text-sky-400 transition-all duration-200  hover:bg-sky-500  hover:text-slate-900 focus:outline-none focus:ring-2  focus:ring-sky-300 sm:h-10 sm:min-w-20 sm:px-4 sm:text-base"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
