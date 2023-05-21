import React from "react";
import { logo } from "./assets";
import Demo from "./Demo";
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col bg-gray-900">
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient ">Contentify</span>
      </h1>
      <h2 className="desc text-white">
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
      <Demo />
    </header>
  );
};

export default Hero;
