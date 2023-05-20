import React, { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [repositories, setRepositories] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=${searchTerm} ${selectedTags
          .map((tag) => `topic:${tag}`)
          .join(" ")}`
      );
      const data = await response.json();
      const results = data.items;
      setRepositories(results);
    } catch (error) {
      console.error("Error searching repositories:", error);
    }
  };

  const handleTagSelect = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags((prevTags) => prevTags.filter((t) => t !== tag));
    } else {
      setSelectedTags((prevTags) => [...prevTags, tag]);
    }
  };

  return (
    <div className="container mx-auto p-4 text-white bg-gray-900">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Search Health-related Repositories
      </h2>
      <div>
        <h3 className="text-lg font-bold mb-2">Tags:</h3>
        <div className="flex flex-wrap">
          {["corona", "typhoid", "asthma"].map((tag) => (
            <button
              key={tag}
              className={`bg-gray-200 text-gray-800 rounded-full px-3 py-1 mr-2 mb-2 ${
                selectedTags.includes(tag) ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => handleTagSelect(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter search term"
          className="w-full border border-gray-300 rounded px-3 py-2 mr-4 text-black"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-2">Repositories:</h3>
        {repositories.map((repo) => (
          <div
            key={repo.id}
            className="border border-gray-300 rounded p-4 mb-4"
          >
            <h4 className="text-xl font-bold mb-2">{repo.name}</h4>
            <p>{repo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
