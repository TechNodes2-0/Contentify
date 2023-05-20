import React, { useState } from 'react';
import axios from 'axios';

const ArticleGallery = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [articles, setArticles] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://en.wikipedia.org/w/rest.php/v1/search/page?q=${searchQuery}`
      );
      setArticles(response.data.pages);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search articles..."
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article) => (
          <div key={article.id} className="border border-gray-300 p-4 rounded-md">
            <h2 className="text-lg font-bold mb-2">{article.title}</h2>
            <p>{article.description}</p>
            {article.thumbnail && (
              <img src={article.thumbnail.url} alt={article.title} className="mt-2" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleGallery;
