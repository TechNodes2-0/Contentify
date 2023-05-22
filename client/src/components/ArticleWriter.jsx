import React from "react";
import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";

const TextGenerator = () => {
    const [articleTitle, setarticleTitle] = useState("");
    const [description, setDescription] = useState("");
    const [features, setFeatures] = useState("");
    const [generatedText, setGeneratedText] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showInputs, setShowInputs] = useState(true);
    const [numTitles, setNumTitles] = useState(3);
    const [titles, setTitles] = useState([]);
    const [selectedTitle, setSelectedTitle] = useState("");
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        // Reset generated text when inputs change
        setGeneratedText("");
        setShowInputs(true);
        setShowText(false);
    }, [articleTitle, description, features, numTitles]);
    async function Output() {
        const topic = 'OpenAi';
        const primary = 'AI chatbot';
        const postData = {
            topic: topic,
            primary_keyword: primary
        };
        const config = {
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                'X-API-KEY': '2785efb9-d8dd-4235-b803-b976052273f4'
            }
        };

        try {
            const response = await axios.post(
                'https://api.writesonic.com/v2/business/content/blog-ideas?engine=economy&language=en',
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
        const newTitles = [];
        const copies = 3;

        try {
            for (let i = 0; i < copies; i++) {
                const response = await Output();
                const title = response.data; 
                console.log(title[0]);// Assuming the response contains the generated title
                newTitles.push({ id: Date.now()+ Math.random(), title:title[0] });
            }

            setTitles(newTitles);
        } catch (error) {
            console.error(error);
            // Handle the error appropriately
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
        <div className="flex flex-col md:flex-row justify-center items-start md:items-center h-screen bg-blue-100">
            <div className="max-h-screen md:max-h-full w-full md:w-1/2 bg-white rounded-lg shadow-lg p-8 md:mr-4">
                <h2 className="text-2xl font-bold mb-4 text-blue-800">AI Article Writer</h2>
                {showInputs && (
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4 mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="article-title">
                                Article Title
                            </label>
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:bg-white focus:shadow-outline"
                                id="article-title"
                                type="text"
                                placeholder="Enter Article Title"
                                value={articleTitle}
                                onChange={(e) => setarticleTitle(e.target.value)}
                            />
                        </div>
                        <div className="w-full px-4 mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
                                Description
                            </label>
                            <textarea
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:bg-white focus:shadow-outline"
                                id="description"
                                placeholder="Enter Article description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="w-full px-4 mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="features">
                                Features
                            </label>
                            <textarea
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:bg-white focus:shadow-outline"
                                id="features"
                                placeholder="Enter Article features"
                                value={features}
                                onChange={(e) => setFeatures(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="w-full px-4 mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="num-titles">
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
                        {titles.length > 0 && (
                            <div className="w-full px-4 mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="select-title">
                                    Select Title
                                </label>
                                <div className="relative">
                                    <select
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:bg-white focus:shadow-outline"
                                        id="select-title"
                                        value={selectedTitle}
                                        onChange={(e) => setSelectedTitle(e.target.value)}
                                    >
                                        <option value="" disabled>
                                            Select a title
                                        </option>
                                        {titles.map((title) => (
                                            <option key={title.id} value={title.title}>
                                                {title.title}
                                            </option>
                                        ))}
                                    </select>


                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg
                                            className="fill-current h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            {/* Add SVG path data */}
                                        </svg>
                                    </div>

                                    {isLoading && (
                                        <div className="absolute inset-0 bg-gray-900 opacity-75 flex justify-center items-center">
                                            <FontAwesomeIcon icon={faSpinner} className="animate-spin text-white" />
                                        </div>
                                    )}
                                    {showText && (
                                        <div className="mt-4">
                                            <h3 className="text-xl font-bold mb-2 text-blue-800">{selectedTitle}</h3>
                                            <p>{generatedText}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
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
                    <h2 className="text-2xl font-bold mb-4 text-blue-800">{selectedTitle}</h2>
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
    );
};

export default TextGenerator;
