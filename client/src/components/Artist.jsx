import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ArtistCards = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://contentify-ui85.onrender.com/arts');
        const artistsArray = Object.values(response.data).flat();
        setArtists(artistsArray);
      } catch (error) {
        console.error('Error fetching artists:', error);
      }
    };

    fetchData();
  }, []);

  if (!Array.isArray(artists)) {
    return <p>No artists found.</p>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {artists.map((artist, index) => (
        <div className="max-w-xs rounded overflow-hidden shadow-lg" key={index}>
          <img className="w-full" src={artist.thumbnail} alt={artist.artist} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{artist.artist}</div>
            <p className="text-gray-700 text-base">Works: {artist.works}</p>
          </div>
          <div className="px-6 py-4">
            <a
              href={artist.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              View More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArtistCards;
