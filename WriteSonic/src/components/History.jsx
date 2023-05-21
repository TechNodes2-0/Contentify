import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

export default function History() {
  const { user, isAuthenticated } = useAuth0();
  const [content, setContent] = useState([]);

  useEffect(() => {
    // Fetch content when the component mounts
    fetchContent();
  }, []);

  const fetchContent = async () => {
    const userId = user.sub;
    console.log(userId);
    try {
      const response = await axios.get(`http://localhost:3000/content?userId=${userId}`);
      console.log(response.data);
      setContent(response.data);
    } catch (error) {
      console.log('Error fetching content:', error);
    }
  };

  const handleGetContent = () => {
    fetchContent();
  };

  return (
    <div className="bg-blue-100 p-4">
      {isAuthenticated && (
        <>
          <h2 className="text-2xl font-bold mb-4">Content for User: {user.name}</h2>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
            onClick={handleGetContent}
          >
            Get Content
          </button>
          {content.map((item) => (
            <div key={item.id} className="mb-8">
              {item.type === 'ads' && (
                <>
                  <h3 className="text-lg font-bold mb-2">Ads</h3>
                  <p className="text-gray-800 mb-1">Ads Title: {item.adsTitle}</p>
                  <p className="text-gray-800 mb-1">Ads Description: {item.adsDescription}</p>
                </>
              )}
              {item.type === 'linkedin' && (
                <>
                  <h3 className="text-lg font-bold mb-2">LinkedIn</h3>
                  <p className="text-gray-800 mb-1">Content: {item.content}</p>
                </>
              )}
              {item.type === 'article' && (
                <>
                  <h3 className="text-lg font-bold mb-2">Article</h3>
                  <p className="text-gray-800 mb-1">Title: {item.title}</p>
                  <p className="text-gray-800 mb-1">Content: {item.content}</p>
                </>
              )}
              {(item.type === 'twitter' || item.type === 'instagram') && (
                <>
                  <h3 className="text-lg font-bold mb-2">
                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                  </h3>
                  <p className="text-gray-800 mb-1">Content: {item.content}</p>
                  <img src={item.image} alt="Image" className="w-40 h-auto" />
                </>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
}
