import React from "react";

export default function MainSec5() {
  return (
    <section className="font-inter bg-gray-900">
      <div className="container">
        <div className="text-center">
          <h2 className="font-playfair font-bold text-lg md:text-3xl lg:text-5xl mb-5 text-white">
            How We Utilize Your Funds?
          </h2>
        </div>
        <div className="flex flex-row justify-center">
          <div className="flex flex-col items-center w-52 md:w-56 lg:w-56 sm:w-36  ">
            <div className="bg-fund-utilization mt-7 rounded-2xl h-56 md:h-64">
              <img
                src="https://sankalptaru.org/wp-content/themes/sankalptaru/dist/images/Home Page/Beneficiary-utilize-funds.png"
                className="w-1/2 h-auto align-middle"
                alt=""
              />
              <p className="font-inter text-white text-base">
                Identification of beneficiary farmers
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center w-52 md:w-56 lg:w-56 sm:w-36  ">
            <div className="bg-fund-utilization mt-7 rounded-2xl h-56 md:h-64">
              <img
                src="https://sankalptaru.org/wp-content/themes/sankalptaru/dist/images/Home Page/Sapling-utilize-funds.png"
                className="w-1/2 h-auto align-middle"
                alt=""
              />
              <p className="font-inter text-white text-base">
                Procurement of saplings
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center w-52 md:w-56 lg:w-56 sm:w-36  ">
            <div className="bg-fund-utilization mt-7 rounded-2xl h-56 md:h-64">
              <img
                src="https://sankalptaru.org/wp-content/themes/sankalptaru/dist/images/Home Page/Post-plantation-utilize-funds.png"
                className="w-1/2 h-auto align-middle"
                alt=""
              />
              <p className="font-inter text-white text-base">
                Post plantation interventions and monitoring
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center w-52 md:w-56 lg:w-56 sm:w-36  ">
            <div className="bg-fund-utilization mt-7 rounded-2xl h-56 md:h-64">
              <img
                src="https://sankalptaru.org/wp-content/themes/sankalptaru/dist/images/Home Page/R&amp;D-utilize-funds.png"
                className="w-1/2 h-auto align-middle"
                alt=""
              />
              <p className="font-inter text-white text-base">
                R&amp;D activities
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center w-52 md:w-56 lg:w-56 sm:w-36  ">
            <div className="bg-fund-utilization mt-7 rounded-2xl h-56 md:h-64">
              <img
                src="https://sankalptaru.org/wp-content/themes/sankalptaru/dist/images/Home Page/Program-management-utilize-funds.png;"
                className="w-1/2 h-auto align-middle"
                alt=""
              />
              <p className="font-inter text-white text-base">
                Program management and administrative overheads
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
