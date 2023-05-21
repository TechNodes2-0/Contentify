import React,{useState,useEffect} from 'react'

import axios from 'axios';

export default function PaintingGallery() {
    const [artworks, setArtworks] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
  
    useEffect(() => {
      fetchArtworks();
    }, []);
  
    const fetchArtworks = async () => {
      try {
        const response = await axios.get(
          `https://api.harvardartmuseums.org/image?apikey=4999591a-0cb8-4936-b00b-013e0c791e38&size=9&page=1&q=width:>400`
        );
        console.log(response.data);
        setArtworks(response.data.records);
      } catch (error) {
        console.log('Error fetching artworks:', error);
      }
    };
  
    const handleSearch = (event) => {
      setSearchQuery(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      fetchArtworks();
    };
  
    return (
      <div className="container mx-auto py-6">
        <h2 className="text-2xl font-bold mb-4">Recommended Artworks</h2>
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search Artworks"
            className="border border-gray-300 rounded px-4 py-2 mr-2 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Search
          </button>
        </form>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {artworks.map((artwork) => (
            <div key={artwork.id} className="bg-white rounded shadow-md p-4">
              <img
                src={artwork.baseimageurl}
                alt="Artwork"
                className="w-full h-48 object-cover mb-2"
              />
              <h3 className="text-lg font-bold mb-1">{artwork.caption}</h3>
              <p className="text-sm text-gray-500 mb-2">Technique: {artwork.technique}</p>
              <p className="text-sm text-gray-500">Colors:</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  