import React, { useState } from "react";
import CarbonFootprintCalculator from "./CarbonFootprintCalculator";
import { Navigate, useNavigate } from "react-router-dom";
import Result from "./Pages/Result";

export default function EventForm() {
  const [NumResidents, setNumResidents] = useState("");
  const [LivingType, setLivingType] = useState("");
  const [HouseSIze, setHouseSIze] = useState("");
  const [cleanEnergy, setcleanEnergy] = useState("");
  const [Recycle, setRecycle] = useState("");
  const [DietType, setDietType] = useState("");
  const [LongFlights, setLongFlights] = useState("");
  const [mediumFlights, setmediumFlights] = useState("");
  const [shortFlights, setshortFlights] = useState("");
  const [hotel, sethotel] = useState("");
  // const [carDistance, setCarDistance] = useState('');
  // const [numHotelRooms, setNumHotelRooms] = useState('');
  // const [numMealsPerDay, setNumMealsPerDay] = useState('');
  // const [mealType, setMealType] = useState('');

  //VInayak VIspute is Genius and Real OG
  const [AverageTravel, setAverageTravel] = useState("");
  const [AverageTravelForMetro, setAverageTravelForMetro] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [AnnualMileage, setAnnualMileage] = useState("");
  const [fueleconomy, setfueleconomy] = useState("");
  const [issubmit, setissubmit] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(`NumResidents: ${NumResidents}`);
    console.log(`LivingType: ${LivingType}`);
    console.log(`HouseSize: ${HouseSIze}`);
    console.log(`cleanEnergy: ${cleanEnergy}`);
    console.log(`Recycle: ${Recycle}`);
    console.log(`DietType: ${DietType}`);
    console.log(`LongFlights: ${LongFlights}`);
    console.log(`shortFlights: ${shortFlights}`);
    console.log(`mediumFlights: ${mediumFlights}`);
    console.log(`hotel: ${hotel}`);
    console.log(`selectedOptions: ${selectedOptions}`);

    setissubmit(true);
  };
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    {
      value: "I have programmable thermostat",
      label: "I have programmable thermostat",
    },
    {
      value: "I use energy star appliances",
      label: "I use energy star appliances",
    },
    {
      value: "I use energy efficient lightbulbs",
      label: "I use energy efficient lightbulbs",
    },
    { value: "I line dry my laundry", label: "I line dry my laundry" },
  ];
  const option1 = "Yes";
  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };
  const handleOptionChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const handleOptionChange1 = (event1) => {
    setIsChecked1(event1.target.checked);
  };
  const handleOptionChange2 = (event2) => {
    setIsChecked2(event2.target.checked);
  };
  const handleOptionChange3 = (event3) => {
    setIsChecked3(event3.target.checked);
  };
  return (
    <div className="w-full tap-highlight-transparent text-base antialiased text-opacity-87">
      {issubmit ? (
        <div>
          <Result
            NumResidents={NumResidents}
            LivingType={LivingType}
            HouseSize={HouseSIze}
            cleanEnergy={cleanEnergy}
            Recycle={Recycle}
            DietType={DietType}
            LongFlights={LongFlights}
            shortFlights={shortFlights}
            mediumFlights={mediumFlights}
            hotel={hotel}
            selectedOptions={selectedOptions}
            AverageTravel={AverageTravel}
            AverageTravelForMetro={AverageTravelForMetro}
            AnnualMileage={AnnualMileage}
            fueleconomy={fueleconomy}
            isChecked={isChecked}
            isChecked1={isChecked1}
            isChecked2={isChecked2}
            isChecked3={isChecked3}
          />
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-9 p-2 ">
          <section>
            <h1 className="w-full font-extrabold my-6 border border-gray-200 dark:border-gray-700 rounded-lg text-4xl text-black  py-2 ">
              Household Section
            </h1>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="text-left block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-4"
                htmlFor="NumResidents"
              >
                Number of residents including myself:
              </label>

              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="NumResidents"
                value={NumResidents}
                onChange={(event) => setNumResidents(event.target.value)}
              >
                <option value="">Select your option</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6+">5</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="text-left block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-4"
                htmlFor="LivingType"
              >
                I live in a(n)
              </label>
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="LivingType"
                value={LivingType}
                onChange={(event) => setLivingType(event.target.value)}
              >
                <option value="">Select your option</option>
                <option value="Detached Single family home">
                  Detached Single family home
                </option>
                <option value="attached Single family home">
                  attached Single family home
                </option>
                <option value="Apartment">Apartment</option>
                {/* <option value="Detached Single family home">Detached Single family home</option> */}
              </select>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                htmlFor="HouseSIze"
                className="text-left block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-4"
              >
                Size of house
              </label>
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="HouseSIze"
                value={HouseSIze}
                onChange={(event) => setHouseSIze(event.target.value)}
              >
                <option value="">Select your option</option>
                <option value="Under 500 sq ft">Under 500 sq ft</option>
                <option value="500-1000 sq ft">500-1000 sq ft</option>
                <option value="1000-1500 sq ft">1000-1500 sq ft</option>
                <option value="1500-2000 sq ft">1500-2000 sq ft</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="text-left block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-4"
                htmlFor="cleanEnergy"
              >
                Do you purchase clean energy such as wind or solar?
              </label>
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="cleanEnergy"
                value={cleanEnergy}
                onChange={(event) => setcleanEnergy(event.target.value)}
              >
                <option value="">Select your option</option>
                <option value="Yes,some">Yes,some</option>
                <option value="Yes,most">Yes,most</option>
                <option value="Yes,all">Yes,all</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="text-left block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-4"
                htmlFor="Recycle"
              >
                Do you recycle items such as metal, plastic, glass, or paper?
              </label>
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="Recycle"
                value={Recycle}
                onChange={(event) => setRecycle(event.target.value)}
              >
                <option value="">Select your option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="text-left block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-4"
                htmlFor="DietType"
              >
                My diet is mostly:
              </label>
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="DietType"
                value={DietType}
                onChange={(event) => setDietType(event.target.value)}
              >
                <option value="">Select your option</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Non-Vegetarian">Non-Vegetarian</option>
                <option value="No beef">No beef</option>
                <option value="Vegan">Vegan</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="text-left block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-4"
                htmlFor="carDistance"
              >
                Do you make a conscious effort to save energy? Check all that
                apply.
              </label>
              {options.map((option) => (
                <div key={option.value}>
                  <label className=" text-left md:w-2/3 block text-gray-500 font-bold">
                    <input
                      type="checkbox"
                      className="mr-2 leading-tight"
                      value={option.value}
                      checked={selectedOptions.includes(option.value)}
                      onChange={handleCheckboxChange}
                    />
                    <span class="text-sm">{option.label}</span>
                  </label>
                </div>
              ))}
            </div>
          </section>
          <section>
            <section>
              <h1 className="w-full font-extrabold my-6 border border-gray-200 dark:border-gray-700 rounded-lg text-4xl text-black  py-2 ">
                Transport Section
              </h1>

              <div>
                <label className="text-left block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-4">
                  Select all of the ways you travel :{" "}
                </label>

                <label className="text-left md:w-2/3 block text-gray-500 font-bold">
                  <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleOptionChange}
                  />
                  <span class="text-sm">Intercity/Commuter Rail</span>
                </label>

                <label className="text-left md:w-2/3 block text-gray-500 font-bold">
                  <input
                    type="checkbox"
                    className="mr-2 leading-tight"
                    checked={isChecked1}
                    onChange={handleOptionChange1}
                  />
                  <span class="text-sm">Bus/Subway/Metro</span>
                </label>

                <label className=" text-left md:w-2/3 block text-gray-500 font-bold">
                  <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    checked={isChecked2}
                    onChange={handleOptionChange2}
                  />
                  <span class="text-sm">Car</span>
                </label>
                <label className=" text-left md:w-2/3 block text-gray-500 font-bold">
                  <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    checked={isChecked3}
                    onChange={handleOptionChange3}
                  />
                  <span>Bike/Walk</span>
                </label>

                {isChecked && (
                  <div className="w-full md:w-1/2 px-3 pl-0 mb-6 md:mb-0">
                    <label
                      className="text-left block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-4"
                      htmlFor="AverageTravel"
                    >
                      Average total weekly travel via intercity or commuter
                      rail...
                    </label>
                    <select
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="AverageTravel"
                      value={AverageTravel}
                      onChange={(event) => setAverageTravel(event.target.value)}
                    >
                      <option value="">Select your option</option>
                      <option value="0 Miles (Usa Average)">
                        0 Miles (Usa Average)
                      </option>
                      <option value="Under 5 Miles">Under 5 Miles</option>
                      <option value="Under 5 to 9.9 Miles">
                        Under 5 to 9.9 Miles
                      </option>
                      <option value="10 to 14.9 Miles">10 to 14.9 Miles</option>
                      <option value="15 to 19.9 Miles">15 to 19.9 Miles</option>
                      <option value="20 to 29.9 Miles">20 to 29.9 Miles</option>
                      <option value="30+ Miles">30+ Miles</option>
                    </select>
                  </div>
                )}
                {isChecked1 && (
                  <div className="w-full md:w-1/2 px-3 pl-0 mb-6 md:mb-0">
                    <label
                      className="text-left block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-4"
                      htmlFor="AverageTravelForMetro"
                    >
                      Average total weekly travel via bus, subway, or metro...
                    </label>
                    <select
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="AverageTravelForMetro"
                      value={AverageTravelForMetro}
                      onChange={(event) =>
                        setAverageTravelForMetro(event.target.value)
                      }
                    >
                      <option value="">Select your option</option>
                      <option value="0 Miles (Usa Average)">
                        0 Miles (Usa Average)
                      </option>
                      <option value="Under 5 Miles">Under 5 Miles</option>
                      <option value="Under 5 to 9.9 Miles">
                        Under 5 to 9.9 Miles
                      </option>
                      <option value="10 to 14.9 Miles">10 to 14.9 Miles</option>
                      <option value="15 to 19.9 Miles">15 to 19.9 Miles</option>
                      <option value="20 to 29.9 Miles">20 to 29.9 Miles</option>
                      <option value="30+ Miles">30+ Miles</option>
                    </select>
                  </div>
                )}
                {isChecked2 && (
                  <div className="w-full md:w-1/2 px-3 pl-0 mb-6 md:mb-0">
                    <label className="text-left block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-4">
                      My car is an electric vehicle
                    </label>
                    <label className="text-left md:w-2/3 block text-gray-500 font-bold">
                      <input
                        type="checkbox"
                        className="mr-2 leading-tight"
                        value="Yes"
                        checked={selectedOptions.includes(option1)}
                        onChange={handleCheckboxChange}
                      />
                      <span class="text-sm">Yes, Car is Electric Vehicle</span>
                    </label>
                    <label
                      className="text-left block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-4"
                      htmlFor="AnnualMileage"
                    >
                      My annual mileage is...
                    </label>
                    <select
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="AnnualMileage"
                      value={AnnualMileage}
                      onChange={(event) => setAnnualMileage(event.target.value)}
                    >
                      <option value="">Select your option</option>
                      <option value="Under 1,000 Miles">
                        Under 1,000 Miles
                      </option>
                      <option value=" 1,000 to 2,499 Miles">
                        1,000 to 2,499 Miles
                      </option>
                      <option value="2,500 to 4,999 Miles">
                        2,500 to 4,999 Miles
                      </option>
                      <option value="5,000 to 9,999 Miles">
                        5,000 to 9,999 Miles
                      </option>
                      <option value="10,000 to 14,999 Miles(USA Average)">
                        10,000 to 14,999 Miles(USA Average)
                      </option>
                      <option value="15,000 to 19,999 Miles">
                        15,000 to 19,999 Miles
                      </option>
                      <option value="20,000 to 29,999 Miles">
                        20,000 to 29,999 Miles
                      </option>
                      <option value="30,000 + Miles">30,000 + Miles</option>
                    </select>

                    <label className="text-left block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-4">
                      My vehicle’s combined fuel economy is...
                    </label>
                    <select
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="fueleconomy"
                      value={fueleconomy}
                      onChange={(event) => setfueleconomy(event.target.value)}
                    >
                      <option value="Select your option">
                        Select your option
                      </option>
                      <option value="0 to 14 MPG">0 to 14 MPG</option>
                      <option value="15-19 MPG">15-19 MPG</option>
                      <option value="20-24 MPG (US Average)">
                        20-24 MPG (US Average)
                      </option>
                      <option value="25-29 MPG">25-29 MPG </option>
                      <option value="30-34 MPG">30-34 MPG </option>
                      <option value="35-39 MPG">35-39 MPG </option>
                      <option value="40-49 MPG">40-49 MPG </option>
                      <option value="50-59 MPG">50-59 MPG </option>
                      <option value="60-79 MPG">60-79 MPG </option>
                      <option value="80-99 MPG">80-99 MPG </option>
                    </select>
                  </div>
                )}
              </div>
            </section>
            <h1 className="w-full font-extrabold my-6 border border-gray-200 dark:border-gray-700 rounded-lg text-4xl text-black  py-2 ">
              Travel Section
            </h1>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="text-left block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-4"
                htmlFor="LongFlights"
              >
                Number of long round-trip flights (2500+ miles) I make in a year
              </label>
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="LongFlights"
                value={LongFlights}
                onChange={(event) => setLongFlights(event.target.value)}
              >
                <option value="">Select your option</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5-9">5 to 9</option>
                <option value="9-14">9-14</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="text-left block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-4"
                htmlFor="mediumFlights"
              >
                Number of medium round-trip flights (300-2500 miles one way) I
                make in a year
              </label>
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="mediumFlights"
                value={mediumFlights}
                onChange={(event) => setmediumFlights(event.target.value)}
              >
                <option value="">Select your option</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5-9">5 to 9</option>
                <option value="9-14">9-14</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="text-left block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-4"
                htmlFor="shortFlights"
              >
                Number of short round-trip flights less than 300 miles one way I
                make in a year
              </label>
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="shortFlights"
                value={shortFlights}
                onChange={(event) => setshortFlights(event.target.value)}
              >
                <option value="">Select your option</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5-9">5 to 9</option>
                <option value="9-14">9-14</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="text-left block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-4"
                htmlFor="hotel"
              >
                Average number of nights spent in a hotel per year
              </label>
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="hotel"
                value={hotel}
                onChange={(event) => sethotel(event.target.value)}
              >
                <option value="">Select your option</option>
                <option value="0">0</option>
                <option value="1 to 2 nights">1 to 2 nights</option>
                <option value="3-4 nights">3 to 4 nights</option>
                <option value="5-6 nights">5 to 6 nights</option>
                <option value="1-2 weeks">1-2 weeks</option>
                <option value="3-4 weeks">3-4 weeks</option>
                <option value="1-2 months">1-2 months</option>
              </select>
            </div>
          </section>

          <div>
            <button
              type="submit"
              class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              width="100px"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

// const [AverageTravel, setAverageTravel] = useState("");
// const [AverageTravelForMetro, setAverageTravelForMetro] = useState("");
// const [isChecked, setIsChecked] = useState(false);
// const [isChecked1, setIsChecked1] = useState(false);
// const [isChecked2, setIsChecked2] = useState(false);
// const [isChecked3, setIsChecked3] = useState(false);
// const [AnnualMileage, setAnnualMileage] = useState("");
// const [fueleconomy, setfueleconomy] = useState("");
