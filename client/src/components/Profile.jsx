import React from "react";
import { useState,useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./RichTextComponent.css"; 
import axios from "axios";
const RichTextComponent = ({ content }) => {
  const [formattedParagraphs, setFormattedParagraphs] = useState('');

  useEffect(() => {
    const fetchFormattedText = async () => {
      try {
        const response = await axios.post(
          'https://api.github.com/markdown',
          {
            text: content,
          },
          {
            headers: {
              'Accept': 'application/vnd.github+json',
              'Authorization': `Bearer ${import.meta.env.VITE_GITHUB_API_KEY}`,
              'X-GitHub-Api-Version': '2022-11-28',
            },
          }
        );
        setFormattedParagraphs(response.data);
      } catch (error) {
        console.log("this",error);
      }
      
    };

    fetchFormattedText();
  }, [content]);

  const handleCopy = () => {
    const el = document.createElement('textarea');
    el.value = formattedParagraphs;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  return (
    <div className="article-container">
      <div dangerouslySetInnerHTML={{ __html: formattedParagraphs }}></div>
      <button className="copy-button" onClick={handleCopy}>Copy</button>
    </div>
  );
};

const ProfilePage = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
  const [Myuser, setMyser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    profilePicture: "https://avatars.githubusercontent.com/u/98970491?v=4",
    healthInterests: ["Medical Research", "Fitness"],
    educationInterests: ["Online Learning", "Curriculum Development"],
    climateInterests: ["Sustainability", "Climate Change Mitigation"],
  });


  const [content, setContent] = useState([]);

  useEffect(() => {
    // Fetch content when the component mounts
    // fetchContent();
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
    <>
        { isAuthenticated && (
    <div className="min-h-screen bg-blue-100">
      <div className="max-w-screen-xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
  <a href='/Profile' target="_blank" rel="noopener noreferrer">
    <img
      src={user.picture}
      alt="Profile"
      className="rounded-full h-24 w-24 object-cover mx-auto mt-8"
    />
  </a>
</div>

        <div className="mt-4 text-center">
          <h1 className="text-3xl font-bold text-blue-900">{user.name}</h1>
          <p className="text-lg text-blue-700">{user.email}</p>
        </div>
        <div className="mt-8 px-4">
          <h2 className="text-blue-900 text-xl font-medium mb-4">
            Interests and Preferences
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col space-y-2">
              <h3 className="text-blue-900 text-lg font-medium mb-2">
                Health Interests
              </h3>
              {Myuser.healthInterests.map((interest) => (
                <span
                  key={interest}
                  className="text-blue-700 text-base font-medium"
                >
                  {interest}
                </span>
              ))}
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="text-blue-900 text-lg font-medium mb-2">
                Education Interests
              </h3>
              {Myuser.educationInterests.map((interest) => (
                <span
                  key={interest}
                  className="text-blue-700 text-base font-medium"
                >
                  {interest}
                </span>
              ))}
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="text-blue-900 text-lg font-medium mb-2">
                Climate Interests
              </h3>
              {Myuser.climateInterests.map((interest) => (
                <span
                  key={interest}
                  className="text-blue-700 text-base font-medium"
                >
                  {interest}
                </span>
              ))}
            </div>
            <div className="bg-blue-100 p-4">
      {isAuthenticated && (
        <>
          <h4 className="text-2xl font-bold mb-4">Your Previous Posts,Articles,Ads</h4>
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
                  <h1 className="text-lg font-bold mb-2">Title: {item.title}</h1>
               
                  <RichTextComponent content={item.content} />
           
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
          </div>
        </div>
      </div>
    </div> )}
    </>

  
  );
};

export default ProfilePage;