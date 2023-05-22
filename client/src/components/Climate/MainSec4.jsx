import React from "react";

export default function MainSec4() {
  return (
    <section className="font-inter text-white bg-gray-900">
      <div className="container">
        <div className="text-center">
          <h2 className="font-playfair-bold text-lg xl:text-3xl text-25 mb-5">
            Climate Crisis is Real
          </h2>
          <p>Did you know, climate change could be irreversible by 2030?</p>
        </div>
        <div className="flex justify-between mt-8">
          <div className="flex flex-col items-center">
            <div className="icon-box mt-7">
              <img
                src="https://sankalptaru.org/wp-content/themes/sankalptaru/dist/images/Home Page/Forest-climate-icon.png"
                className="w-24 h-auto"
                alt=""
              />
              <iframe
                title="Hectares of forests cut down or burned"
                src="https://www.theworldcounts.com/embeds/counters/93?background_color=gray900&amp;color=white&amp;font_family=%22Inter%22%2C+Helvetica+Neue%2C+Arial%2C+sans-serif&amp;font_size=19"
                height="98%"
                width="100%"
                className="bg-gray-900"
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="icon-box mt-7">
              <img
                src="https://sankalptaru.org/wp-content/themes/sankalptaru/dist/images/Home Page/co2-emmission-climate-icon.png"
                className="w-24 h-auto"
                alt=""
              />
              <iframe
                title="Tons of CO2 emitted into the atmosphere"
                src="https://www.theworldcounts.com/embeds/counters/23?background_color=gray900&amp;color=white&amp;font_family=%22Inter%22%2C+Helvetica+Neue%2C+Arial%2C+sans-serif&amp;font_size=19"
                height="100%"
                width="100%"
                className="bg-gray-900"
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="icon-box mt-7">
              <img
                src="https://sankalptaru.org/wp-content/themes/sankalptaru/dist/images/Home Page/Health-crisis-icon.png"
                className="w-24 h-auto"
                alt=""
              />
              <iframe
                title="Years of healthy life lost from air pollution"
                src="https://www.theworldcounts.com/embeds/counters/24?background_color=gray900&amp;color=white&amp;font_family=%22Inter%22%2C+Helvetica+Neue%2C+Arial%2C+sans-serif&amp;font_size=19"
                height="100%"
                width="100%"
                className="bg-gray-900"
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="icon-box mt-7">
              <img
                src="https://sankalptaru.org/wp-content/themes/sankalptaru/dist/images/Home Page/Fresh-water-crisis-icon.png"
                className="w-24 h-auto"
                alt=""
              />
              <iframe
                title="Earth running out of freshwater"
                src="https://www.theworldcounts.com/embeds/counters/113?background_color=gray900&amp;color=white&amp;font_family=%22Inter%22%2C+Helvetica+Neue%2C+Arial%2C+sans-serif&amp;font_size=19"
                height="100%"
                width="100%"
                className="bg-gray-900"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
