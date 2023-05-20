import React, { useState, useEffect } from "react";
import axios from "axios";
import Speech from "react-speech";

const DictionaryComponent = () => {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState([]);
  const [pronunciation, setPronunciation] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        "https://dictionary-data-api.p.rapidapi.com/definition/" + word,
        {
          headers: {
            "X-RapidAPI-Key":
              "e003362e7bmsh3bbb66c7edff81ap122171jsn748af86ffe2e",
            "X-RapidAPI-Host": "dictionary-data-api.p.rapidapi.com",
          },
        }
      );

      const { meaning, pronunciation } = response.data;

      setMeaning(meaning);
      setPronunciation(pronunciation);
    } catch (error) {
      console.error(error);
      setMeaning([]);
      setPronunciation("");
    }
  };

  useEffect(() => {
    setPronunciation(""); // Clear the pronunciation when a new search is performed
  }, [word]);

  return (
    <div className="bg-gray-900  p-6 shadow-md h-screen">
      <h1 className="text-3xl mb-4 text-white text-center">
        Interactive Dictionary
      </h1>
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Enter a word"
          className="w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:border-blue-500 text-black"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button
          className="ml-4 bg-blue-500 text-white rounded-md px-4 py-2"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      {meaning.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-medium mb-2 text-white">Meaning:</h2>
          <ul className="list-disc pl-6 text-white">
            {meaning.map((meaningItem, index) => (
              <li key={index}>{meaningItem.values.join("; ")}</li>
            ))}
          </ul>
        </div>
      )}
      {pronunciation && (
        <div className="mt-4">
          <h2 className="text-xl font-medium text-white">Pronunciation:</h2>
          <audio controls>
            <source src={pronunciation} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
};

export default DictionaryComponent;
