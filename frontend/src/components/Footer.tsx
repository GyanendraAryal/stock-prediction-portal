import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-slate-800">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-7xl
          flex-col
          items-center
          justify-between
          gap-2
          px-4
          py-5
          text-center
          sm:flex-row
          sm:px-6
          lg:px-8
        "
      >
        <p className="text-sm text-slate-300">
          © {new Date().getFullYear()} Stock Prediction Portal
        </p>

        <p className="text-sm text-slate-400">
          Powered by{" "}
          <span className="font-medium text-sky-400">Machine Learning</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
