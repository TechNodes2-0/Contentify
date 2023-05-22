import React from "react";
import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import TitleSelection from "./TitlesCard";
import axios from "axios";
import "../RichTextComponent.css"; // Import CSS file


const TextGenerator = () => {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showInputs, setShowInputs] = useState(true);
  const [numTitles, setNumTitles] = useState(3);
  const [titles, setTitles] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [showText, setShowText] = useState(false);
  const [clicked, Setclicked] = useState(false);


  useEffect(() => {
    // Reset generated text when inputs change
    setGeneratedText("");
    setShowInputs(true);
    setShowText(false);
  }, [projectName, description, features, numTitles]);
  async function Output() {
    const topic = description;
    const primary = features;
    const postData = {
      topic: topic,
      primary_keyword: primary,
    };
    const config = {
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "X-API-KEY": `${import.meta.env.VITE_AI_API_KEY}`,
      },
    };

    try {
      console.log(typeof numTitles.toString())
      const temp= numTitles.toString()
      const response = await axios.post(
        `https://api.writesonic.com/v2/business/content/blog-ideas?engine=premium&language=en&num_copies=${temp}`,
        postData,
        config
      );
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  const generateTitles = async () => {
    Setclicked(true);
    setIsLoading(true);

    const newTitles = [];
    const copies = parseInt(numTitles, 10);

    try {
      console.clear();
      const response = await Output();
      const title = response.data;
      console.log("this is title");
      console.log(title); // Assuming the response contains the generated title
      // console.log(s);
      for (let i = 0; i < copies; i++) {
        newTitles.push({ id: Date.now() + Math.random(), title: title[i] });
      }

      setTitles(newTitles);
    } catch (error) {
      console.error(error);
      // Handle the error appropriately
    }
    finally{
      setIsLoading(false);

    }
  };
  const generateText = () => {
    setIsLoading(true);

    // Simulate delay to show loading screen
    setTimeout(() => {
      // AI article generation logic here
      setGeneratedText(`This is a generated text for ${selectedTitle}.`);
      setIsLoading(false);
      setShowText(true);
    }, 2000);
  };

return (
    <>
    {isLoading ? (
      <div className="loadingwraper">
        <div className="loading-spinner">Loading...</div>
      </div>
    ) : (
      <>
        {clicked && titles.length > 0 ? (
          <TitleSelection  titles={titles} numTitles={numTitles} />
        ) : (
        <div className="flex flex-col md:flex-row justify-center items-start md:items-center h-screen bg-blue-100">
          <div className="max-h-screen md:max-h-full w-full md:w-1/2 bg-white rounded-lg shadow-lg p-8 md:mr-4">
            <h2 className="text-2xl font-bold mb-4 text-blue-800">
              AI Article Writer
            </h2>
            {showInputs && (
              <div className="flex flex-wrap -mx-4">
                <div className="w-full px-4 mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="project-name"
                  >
                    Project Name
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:bg-white focus:shadow-outline"
                    id="project-name"
                    type="text"
                    placeholder="Enter project name"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                  />
                </div>
                <div className="w-full px-4 mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <textarea
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:bg-white focus:shadow-outline"
                    id="description"
                    placeholder="Enter project description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                <div className="w-full px-4 mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="features"
                  >
                    Features
                  </label>
                  <textarea
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:bg-white focus:shadow-outline"
                    id="features"
                    placeholder="Enter project features"
                    value={features}
                    onChange={(e) => setFeatures(e.target.value)}
                  ></textarea>
                </div>
                <div className="w-full px-4 mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="num-titles"
                  >
                    Number of Titles
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:bg-white focus:shadow-outline"
                    id="num-titles"
                    type="number"
                    min="1"
                    max="10"
                    value={numTitles}
                    onChange={(e) => setNumTitles(parseInt(e.target.value))}
                  />
                </div>
                <div className="w-full px-4 mb-4">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={generateTitles}
                  >
                    Generate Titles
                  </button>
                </div>
              </div>
            )}
          </div>
          <Transition
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            show={!showInputs}
          >
            <div className="max-h-screen md:max-h-full w-full md:w-1/2 bg-white rounded-lg shadow-lg p-8 md:ml-4">
              <h2 className="text-2xl font-bold mb-4 text-blue-800">
                {selectedTitle}
              </h2>
              <p>{generatedText}</p>
              <button
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => {
                  setShowInputs(true);
                  setSelectedTitle("");
                  setGeneratedText("");
                }}
              >
                Generate another article
              </button>
            </div>
          </Transition>
        </div>
      )}
      </>
    )}
    </>
  );
};

export default TextGenerator;
