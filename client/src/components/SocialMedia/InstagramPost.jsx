import { useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
function InstagramPostGenerator() {
  const { user, isAuthenticated } = useAuth0();
  const [description, setDescription] = useState("");
  const [tone, setTone] = useState("");
  const [image, setImage] = useState("");
  const [generatedPost, setGeneratedPost] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function generateCaptions() {
    const postData = {
      description: description,
      tone_of_voice: tone,
    };
    const config = {
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "X-API-KEY":  `${import.meta.env.VITE_AI_API_KEY}`
      },
    };

    try {
      const response = await axios.post(
        "https://api.writesonic.com/v2/business/content/instagram-captions?engine=economy&language=en&num_copies=3",
        postData,
        config
      );
      return response.data[0].text;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async function generateHashtags() {
    const postData = {
      description: description,
    };
    const config = {
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "X-API-KEY": "e50a69d5-e75a-434d-8b29-a14d66bd9a52",
      },
    };

    try {
      const response = await axios.post(
        "https://api.writesonic.com/v2/business/content/instagram-hashtags?engine=premium&language=en&num_copies=1",
        postData,
        config
      );
      return response.data[0].text;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  const handleGeneratePost = async () => {
    setIsLoading(true);
    try {
      const [caption, hashtags] = await Promise.all([
        generateCaptions(),
        generateHashtags(),
      ]);

      const post = `📸 Post by User\nDescription: ${description}\n\nTone of Voice: ${tone}\n\nHashtags: ${hashtags}\n\nCaption: ${caption}`;
      setGeneratedPost(post);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
     
    }
  };

 
    async function save()
    {
      
      console.log(generatedPost);
      console.log(user.sub);
      try {
        // Send a POST request to the server to save the article
        const response = await axios.post('http://localhost:3000/Content', {
          userId: user.sub,
         
          content: generatedPost,
          image:`${URL.createObjectURL(image)}`,
          type:"instagram"
        });
  
        console.log('InstagramPost saved:', response.data);
        // Reset the form
        // setTitle('');
        // setContent('');
      } catch (error) {
        console.error('Error saving InstagramPost:', error);
      }
    }
    
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 to-red-500">
      <div className="flex flex-col w-full max-w-3xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center text-pink-600">
          <i className="fab fa-instagram text-2xl mr-2"></i>
          Instagram Post Generator
        </h1>

        <div className="flex flex-col mb-6">
          <label className="block mb-2 font-semibold text-pink-700">
            Description:
          </label>
          <input
            type="text"
            className="px-4 py-2 border border-pink-300 rounded shadow-sm text-pink-700 focus:outline-none focus:border-pink-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-6">
          <label className="block mb-2 font-semibold text-pink-700">
            Tone of Voice:
          </label>
          <select
            className="px-4 py-2 border border-pink-300 rounded shadow-sm text-pink-700 focus:outline-none focus:border-pink-500"
            value={tone}
            onChange={(e) => setTone(e.target.value)}
          >
            <option value="">Select Tone</option>
            <option value="creative">Creative</option>
            <option value="professional">Professional</option>
            <option value="persuasive">Persuasive</option>
          </select>
        </div>
        <div className="flex flex-col mb-6">
          <label className="block mb-2 font-semibold text-pink-700">
            Image:
          </label>
          <input
            type="file"
            className="w-full"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <button
          className={`px-4 py-2 rounded-lg ${
            isLoading
              ? "bg-pink-600 text-white cursor-not-allowed"
              : "bg-pink-500 text-white"
          }`}
          disabled={isLoading}
          onClick={handleGeneratePost}
        >
          {isLoading ? "Generating..." : "Generate Post"}
        </button>
      </div>
      {generatedPost && (
        <div className="ml-8 p-4 bg-gray-200 rounded-lg flex flex-col items-center">
          <h2 className="mb-2 text-lg font-semibold">Generated Post:</h2>
          <div className="bg-white rounded-lg shadow flex-1">
            <div className="p-4 text-pink-700">
              <p className="text-base leading-normal mb-4">{generatedPost}</p>
            </div>
            {image && (
              <div className="flex items-center justify-center">
                <div className="w-64 h-48 rounded-md overflow-hidden shadow">
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Post"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            )}
              <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={save}
      >
        Save Post
      </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default InstagramPostGenerator;
