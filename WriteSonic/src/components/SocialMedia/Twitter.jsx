import { useState } from "react";
import axios from "axios";
import { TwitterShareButton } from "react-share";
import { useAuth0 } from "@auth0/auth0-react";
function TwitterPostGenerator() {
  const { user, isAuthenticated } = useAuth0();
  const [topic, setTopic] = useState("");
  const [image, setImage] = useState("");
  const [generatedPost, setGeneratedPost] = useState("");

  async function generatePost() {
    // Make an API request or perform any logic to generate the Twitter post
    // ..
    const postData = {
        topic: topic
      };
      const config = {
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          "X-API-KEY": "e50a69d5-e75a-434d-8b29-a14d66bd9a52"
        }
      };
  
      try {
        const response = await axios.post(
          "https://api.writesonic.com/v2/business/content/tweets?engine=economy&language=en&num_copies=4",
          postData,
          config
        );
        return response.data[0].text;
      } catch (error) {
        console.error(error);
        throw error;
      }

    return "Generated Twitter post";
  }

  const handleGeneratePost = async () => {
    try {
      const post = await generatePost();
        
      setGeneratedPost(post);
    } catch (error) {
      console.error(error);
    }
  };

  const handleTwitterShare = () => {
    const url = "https://your-website-url.com";
    const text = generatedPost;
    // Modify the options as needed
    const options = {
      via: "your_twitter_handle",
      hashtags: ["your", "hashtags"],
    };

    // Create the Twitter sharing URL
    const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      text
    )}&url=${encodeURIComponent(url)}&${new URLSearchParams(options).toString()}`;

    window.open(twitterShareUrl, "_blank");
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
        type:"twitter"
      });

      console.log('TwitterPost saved:', response.data);
      // Reset the form
      // setTitle('');
      // setContent('');
    } catch (error) {
      console.error('Error saving twitterPost:', error);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col w-full max-w-3xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">Twitter Post Generator</h1>
        <div className="flex flex-col mb-6">
          <label className="block mb-2 font-semibold text-gray-700">Topic:</label>
          <input
            type="text"
            className="px-4 py-2 border border-gray-300 rounded shadow-sm text-gray-700 focus:outline-none focus:border-blue-500"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-6">
          <label className="block mb-2 font-semibold text-gray-700">Image:</label>
          <input
            type="file"
            className="w-full"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <button
          className="py-2 mb-6 text-white bg-blue-500 rounded-md font-semibold hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={handleGeneratePost}
        >
          Generate Post
        </button>
      </div>
      {generatedPost && (
        <div className="ml-8 p-4 bg-gray-200 rounded-lg flex flex-col">
          <h2 className="mb-2 text-lg font-semibold">Generated Post:</h2>
          <div className="bg-white rounded-lg shadow flex-1">
            <div className="p-4 text-gray-700">{generatedPost}</div>
            {image && (
              <img
                src={URL.createObjectURL(image)}
                alt="Post"
                className="object-cover w-64 h-full"
              />
            )}
          </div>
          <div className="mt-4">

            <button
              className="ml-2 py-1 px-3 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
              onClick={handleTwitterShare}
            >
              Alternative Share
            </button>
            <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={save}
      >
        Save Post
      </button>
          </div>

        </div>
        
      )
      
      }
    </div>
  );
}

export default TwitterPostGenerator;
