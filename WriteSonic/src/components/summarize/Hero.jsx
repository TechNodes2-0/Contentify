import React from "react";
import { logo } from "./assets";
import Demo from "./Demo";
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient ">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
      <Demo />
    </header>
  );
};

export default Hero;
