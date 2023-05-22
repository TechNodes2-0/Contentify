import { useState } from "react";

function Payment({
  trees,
  carbonFootprint

}) {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div className="bg-cover bg-center" style={{backgroundImage: "url(https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828_960_720.jpg)"}}>
      <div className="bg-gray-900 bg-opacity-60 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-white font-semibold tracking-wide uppercase">
              Your Carbon Footprint
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Your Carbon  Footprint is  {parseFloat(carbonFootprint)} 
              <span className="text-indigo-600" id="carbon-footprint"></span>{" "}
                Tons
            </p>
            <p className="relative mt-4 max-w-2xl text-xl text-white lg:mx-auto">
              <span
                className="block bg-no-repeat bg-left-bottom bg-contain h-16 w-16 absolute -left-20 top-2"
                style={{backgroundImage: "url(https://cdn.pixabay.com/photo/2016/04/01/10/00/tree-1296866_960_720.png)"}}
              ></span>
              It takes{" "}
              <span className="text-indigo-600" id="carbon-trees"></span>{" "}
              trees to offset your annual footprint. On average, every tree
              absorbs 0.07 tons of CO2 annually.
            </p>
          </div>
        </div>
      </div>
      <div className="px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="purchase-offsets">
            <p className="title text-white font-semibold text-xl mb-4">
              Offset Now
            </p>
            <p className="neutralize text-white text-lg mb-8">
              A tax-deductible donation of $253 will offset your annual carbon
              footprint.
            </p>
            <div className="slider flex justify-between items-center">
              <button
                className="rounded-full bg-white text-black px-8 py-2 mr-4"
                id="one-time"
              >
                One-Time
              </button>
              <button
                className="rounded-full bg-white text-black px-8 py-2"
                id="yearly"
              >
                Yearly
              </button>
              <output
                className="text-white font-bold text-3xl ml-8 mr-4"
                id="slider-value"
              >
                {sliderValue}
              </output>
              <input
                type="range"
                className="h-2 w-full"
                min="0"
                max="100"
                id="slider"
                value={sliderValue}
                onChange={handleSliderChange}
              />
            </div>
            <a href='/Card' className="bg-indigo-600 text-white rounded-full px-16 py-4 mt-8" id="submit">
              Offset Footprint
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
