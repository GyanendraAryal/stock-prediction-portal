import React from "react";

function Home() {
  return (
    <main className="w-full px-4 sm:px-6 lg:px-8">
      <div
        className="
          mx-auto my-5
          flex w-full max-w-4xl
          flex-col items-center justify-center
          gap-5 sm:gap-6
          rounded-xl
          bg-slate-700
          px-5 py-10
          text-center
          shadow-lg
          sm:px-10 sm:py-14
          lg:px-16 lg:py-16
        "
      >
        <h2
          className="
            text-2xl font-bold text-white
            sm:text-3xl
            md:text-4xl
          "
        >
          Stock Prediction Portal
        </h2>

        <p
          className="
            max-w-2xl
            text-sm leading-6 text-slate-200
            sm:text-base sm:leading-7
          "
        >
          This stock prediction application utilizes machine learning
          techniques, specifically employing Keras and LSTM models,
          integrated with the Django Framework. It forecasts future stock
          prices by analyzing 100-day moving averages, essential indicators
          widely used by stock analysts to inform trading and investment
          decisions.
        </p>

        <button
          type="button"
          className="
            mt-2
            cursor-pointer
            rounded-lg
            border border-yellow-500
            px-6 py-2
            text-base font-medium text-yellow-300
            transition
            duration-200
            hover:bg-yellow-500
            hover:text-slate-900
            focus:outline-none
            focus:ring-2
            focus:ring-yellow-400
            focus:ring-offset-2
            focus:ring-offset-slate-700
            sm:px-8 sm:py-2.5
            sm:text-lg
          "
        >
          Login
        </button>
      </div>
    </main>
  );
}

export default Home;
