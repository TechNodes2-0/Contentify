import React from "react";

export default function MainSec3() {
  return (
    <div className="bg-gray-900 font-inter text-white">
      <div className="container">
        <div className="text-center">
          <h2 className="font-bold font-playfair text-lg md:text-3xl mb-5">
            Sustainable Plantations at Your Door!
          </h2>
          <p className="text-white">
            With so many options to choose from, now you can plant your tree
            whenever and wherever you want!
          </p>
        </div>
        <div className="flex flex-row bg-gray-900t">
          <div className="flex flex-col items-center md:w-3/12 lg:w-3/12 sm:w-6/12 w-full text-center bg-gray-700">
            <a
              href="https://sankalptaru.org/location/"
              className="icon-box mt-7  rounded-20 shadow-st-box"
            >
              <i className="inline-block">
                <img
                  src="https://sankalptaru.org/wp-content/themes/sankalptaru/dist/images/Home Page/location-category.png"
                  alt=""
                  className="w-full h-auto"
                />
              </i>
              <h4 className="font-playfair-bold">Location</h4>
            </a>
          </div>
          <div className="flex flex-col items-center md:w-3/12 lg:w-3/12 sm:w-6/12 w-full text-center bg-gray-700">
            <a
              href="https://sankalptaru.org/zodiac/"
              className="icon-box mt-7  rounded-20 shadow-st-box"
            >
              <i className="inline-block">
                <img
                  src="https://sankalptaru.org/wp-content/themes/sankalptaru/dist/images/Home%20Page/zodiac-category.png"
                  alt=""
                  className="w-full h-auto"
                />
              </i>
              <h4 className="font-playfair-bold">Zodiac</h4>
            </a>
          </div>
          <div className="flex flex-col items-center md:w-3/12 lg:w-3/12 sm:w-6/12 w-full text-center bg-gray-700">
            <a
              href="https://sankalptaru.org/location/"
              className="icon-box mt-7  rounded-20 shadow-st-box"
            >
              <i className="inline-block">
                <img
                  src="https://sankalptaru.org/wp-content/themes/sankalptaru/dist/images/Home%20Page/native-species-category.png"
                  alt=""
                  className="w-full h-auto"
                />
              </i>
              <h4 className="font-playfair-bold">Native Species</h4>
            </a>
          </div>
          <div className="flex flex-col items-center md:w-3/12 lg:w-3/12 sm:w-6/12 w-full text-center bg-gray-700">
            <a
              href="https://sankalptaru.org/location/"
              className="icon-box mt-7  rounded-20 shadow-st-box"
            >
              <i className="inline-block">
                <img
                  src="https://sankalptaru.org/wp-content/themes/sankalptaru/dist/images/Home%20Page/festival-category.png"
                  alt=""
                  className="w-full h-auto"
                />
              </i>
              <h4 className="font-playfair-bold">Festival</h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
