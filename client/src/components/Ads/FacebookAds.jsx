import { useState } from "react";
import { FaFacebook, FaCopy, FaEdit } from "react-icons/fa";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
function LinkedInPost() {
  const { user, isAuthenticated} = useAuth0();
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("")
  const [occasion, setOccasion] = useState("")
  const [numResponses, setNumResponses] = useState(3);
  const [generatedPosts, setGeneratedPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedPost, setEditedPost] = useState("");
  const [editedPostIndex, setEditedPostIndex] = useState(null);

  async function Output() {
    const postData = {
      product_name: projectName,
      product_description: description,
      occasion:occasion
    };

   
    const config = {
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'X-API-KEY': `${import.meta.env.VITE_AI_API_KEY}`
      }
    };

    try {
      const response = await axios.post(
        'https://api.writesonic.com/v2/business/content/facebook-ads?engine=economy&language=en&num_copies=3',
        postData,
        config
      );
      console.log(response.data);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  const handleGeneratePosts = async () => {
    setIsLoading(true);
    const post = await Output();
    console.log(post.data);
    setTimeout(() => {
      const posts = Array.from(
        { length: numResponses },
        (_, i) =>(
          <div key={i}>
          <p>{post.data[i].ad_description}</p>
        </div>
        ) 
        // `${post.data[i].ad_title} \n\n\n ${post.data[i].ad_description}`
      );

      setGeneratedPosts(posts);
      console.log(posts);
      setIsLoading(false);
    }, 2000);
  };

  const handleEditPost = (post, index) => {
    setIsEditing(true);
    setEditedPost(post);
    setEditedPostIndex(index);
  };

  const handleCopyPost = (post) => {
    navigator.clipboard.writeText(post);
  };

  const handleSaveEditedPost = () => {
    setIsEditing(false);

    const updatedPosts = [...generatedPosts];
    updatedPosts[editedPostIndex] = editedPost;
    setGeneratedPosts(updatedPosts);
  };

  async function save()
    {
      
      console.log(generatedPosts);
      console.log(user.sub);
      try {
        // Send a POST request to the server to save the article
        const response = await axios.post('https://contentify-ui85.onrender.com/Content', {
          userId: user.sub,
         
          adsTitle: generatedPosts[0].ad_title,
          adsDescription: generatedPosts[0].ad_description,
          type:"ads"
        });
  
        console.log('ads saved:', response.data);
        // Reset the form
        // setTitle('');
        // setContent('');
      } catch (error) {
        console.error('Error saving InstagramPost:', error);
      }
    }
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="flex justify-between w-full p-8 bg-white shadow-lg rounded-lg">
        <div className="flex flex-col w-1/3 p-4 rounded-lg shadow-md bg-blue-500 text-white">
          <div className="flex items-center mb-4">
            <FaFacebook className="text-white text-3xl mr-2" />
            <h1 className="text-xl font-bold">Facebook Ads Generator</h1>
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-bold text-blue-100">
              Product/Service Name:
            </label>
            <input
              type="text"
              className="w-full border border-blue-300 rounded p-2 shadow-sm text-black"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-bold text-blue-100">
              Product/Service Description:
            </label>
            <input
              type="text"
              className="w-full border border-blue-300 rounded p-2 shadow-sm text-black"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-bold text-blue-100">
             What is Occassion ?:
            </label>
            <input
              type="text"
              className="w-full border border-blue-300 rounded p-2 shadow-sm text-black"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            />
          </div>
          
          <button
            className="bg-blue-700 text-white rounded-md px-4 py-2 font-bold hover:bg-blue-800 transition duration-200"
            onClick={handleGeneratePosts}
            disabled={isLoading}
          >
            {isLoading ? "Generating..." : "Generate Posts"}
          </button>
        </div>
        <div className="w-2/3 p-4">
          <h1 className="text-xl font-bold mb-4">
            Generated Posts ({generatedPosts.length})
          </h1>
          {generatedPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 mb-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Post {index + 1}</h2>
                <div className="flex items-center">
                  <button className="mr-2" onClick={() => handleEditPost(post, index)}>
                    <FaEdit className="text-blue-500 hover:text-blue-700 transition duration-200" />
                  </button>
                  <button onClick={() => handleCopyPost(post)}>
                    <FaCopy className="text-blue-500 hover:text-blue-700 transition duration-200" />
                  </button>
                  <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={save}
      >
        Save Post
      </button>
                </div>
              </div>
              {isEditing && editedPostIndex === index ? (
                <>
                  <textarea
                    className="w-full border border-blue-300 rounded p-2 shadow-sm mb-4"
                    value={editedPost}
                    onChange={(e) => setEditedPost(e.target.value)}
                  />
                  <button
                    className="bg-blue-700 text-white rounded-md px-4 py-2 font-bold hover:bg-blue-800 transition duration-200"
                    onClick={handleSaveEditedPost}
                  >
                    Save Changes
                  </button>
                </>
              ) : (
                <p>{post}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
}

export default LinkedInPost;