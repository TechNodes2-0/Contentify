import React from "react";

export default function Mail() {
  return (
    <div>
      <section className="bg-green-100 py-8 px-4">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Get more tips – and a link to your full report – straight to your inbox
        </h2>
        <form className="flex flex-col md:flex-row md:space-x-4 max-w-md mx-auto">
          <label htmlFor="first-name" className="sr-only">
            First Name:
          </label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            className="bg-white border border-green-500 rounded-md py-2 px-4 mb-2 md:mb-0 flex-grow"
            placeholder="First Name"
          />
          <label htmlFor="email" className="sr-only">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-white border border-green-500 rounded-md py-2 px-4 mb-2 md:mb-0 flex-grow"
            placeholder="Email"
          />
          <button
            type="submit"
            className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md"
          >
            Email Me
          </button>
        </form>
      </section>
    </div>
  );
}
