import React, { useState } from "react";
import { FaInstagram, FaCopy, FaEdit, FaSpinner } from "react-icons/fa";

function App() {
  const [caption, setCaption] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [numPosts, setNumPosts] = useState(1);
  const [generatedPosts, setGeneratedPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedPost, setEditedPost] = useState("");

  const handleGeneratePosts = () => {
    setIsLoading(true);

    // Show loading screen
    setGeneratedPosts([]);

    // TODO: Use an AI API or framework to generate the post content
    setTimeout(() => {
      const posts = Array.from(
        { length: numPosts },
        (_, i) => `${caption} ${hashtags} (${i + 1}/${numPosts})`
      );

      setGeneratedPosts(posts);
      setIsLoading(false);
    }, 2000);
  };

  const handleEditPost = (post) => {
    setIsEditing(true);
    setEditedPost(post);
  };

  const handleCopyPost = (post) => {
    navigator.clipboard.writeText(post);
  };

  const handleSaveEditedPost = () => {
    setIsEditing(false);

    const updatedPosts = [...generatedPosts];
    const index = updatedPosts.indexOf(editedPost);
    updatedPosts[index] = editedPost;
    setGeneratedPosts(updatedPosts);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-pink-500 to-red-500">
      {isLoading ? (
        <div className="flex items-center justify-center h-full">
          <FaSpinner className="animate-spin h-16 w-16 text-white" />
        </div>
      ) : (
        <div className="flex justify-between w-full p-8 bg-white shadow-lg rounded-lg">
          <div className="flex flex-col w-1/3 p-4 rounded-lg shadow-md bg-white">
            <div className="flex items-center mb-4">
              <FaInstagram className="text-pink-500 text-3xl mr-2" />
              <h1 className="text-xl font-bold text-pink-500">
                Instagram Post Generator
              </h1>
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-bold text-gray-700">
                Caption:
              </label>
              <textarea
                className="w-full h-24 border border-gray-300 rounded p-2 shadow-sm"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-bold text-gray-700">
                Hashtags:
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-2 shadow-sm"
                value={hashtags}
                onChange={(e) => setHashtags(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-bold text-gray-700">
                Number of Posts:
              </label>
              <input
                type="number"
                className="w-full border border-gray-300 rounded p-2 shadow-sm"
                min="1"
                max="10"
                value={numPosts}
                onChange={(e) => setNumPosts(Number(e.target.value))}
              />
            </div>
            <button
              className={`px-4 py-2 rounded-lg ${
                isLoading
                  ? "bg-gradient-to-r from-pink-500 to-red-500"
                  : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white"
              }`}
              disabled={isLoading}
              onClick={handleGeneratePosts}
            >
              {isLoading ? (
                <FaSpinner className="animate-spin mr-2" />
              ) : (
                "Generate Posts"
              )}
            </button>
          </div>
          <div className="w-2/3 ml-8">
            {generatedPosts.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Generated Posts:</h2>
                {generatedPosts.map((post, index) => (
                  <div
                    key={index}
                    className="bg-gray-200 p-4 mb-4 rounded-lg flex items-center justify-between"
                  >
                    {isEditing && editedPost === post ? (
                      <textarea
                        className="w-full border border-gray-300 rounded p-2 shadow-sm"
                        value={editedPost}
                        onChange={(e) => setEditedPost(e.target.value)}
                      />
                    ) : (
                      <p className="whitespace-pre-wrap">{post}</p>
                    )}
                    <div className="flex">
                      {!isEditing && (
                        <FaEdit
                          className="text-gray-500 cursor-pointer mr-2"
                          onClick={() => handleEditPost(post)}
                        />
                      )}
                      <FaCopy
                        className="text-gray-500 cursor-pointer"
                        onClick={() => handleCopyPost(post)}
                      />
                    </div>
                  </div>
                ))}
                {isEditing && (
                  <button
                    className="px-4 py-2 rounded-lg bg-pink-500 text-white"
                    onClick={handleSaveEditedPost}
                  >
                    Save
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
