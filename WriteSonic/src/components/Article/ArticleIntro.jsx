import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleOutline from './ArticleOutline';

const ArticleSelection = (Title) => {
  const [articles, setArticles] = useState([]);
  const [TITLE,SETTITLE]=useState('');
  const [isLoading, setIsLoading] = useState(false);
  console.clear();
  console.log("1st");
  console.log(Title.numTitles)
  let num=Title.numTitles;
  console.log("2nd");
  console.log(num);
  // console.log(Dfd);




console.log(Title.Title.title.text);
  async function Output() {
   const blog_title=Title.Title.title.text;
    const postData = {
        blog_title:blog_title
    };
    const config = {
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            'X-API-KEY': 'e50a69d5-e75a-434d-8b29-a14d66bd9a52'
        }
    };

    try {
      const temp= Title.numTitles.toString()

        const response = await axios.post(
            `https://api.writesonic.com/v2/business/content/blog-intros?engine=premium&language=en&num_copies=${temp}`,
            postData,
            config
        );
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
async function GiveIntros()
{
  setIsLoading(true);
  const copies = parseInt(Title.numTitles, 10);

    const Newarticles =[];
    
    try {
      console.clear();
      const response = await Output();
      const title = response.data; 
      console.log("this is title");
      console.log(title); // Assuming the response contains the generated title
        for (let i = 0; i < copies; i++) {
            Newarticles.push({ id: Date.now()+ Math.random(), intro :title[0].text });
        }

        setArticles(Newarticles);
        SETTITLE(Title.Title.title.text);
        console.log(TITLE);
    } catch (error) {
        console.error(error);
        // Handle the error appropriately
    }finally{
      setIsLoading(false);

    }
}
  useEffect(() => {
    // Make API call to fetch article intros
    // Example API call:
   GiveIntros();
  }, []);

  const [selectedArticle, setSelectedArticle] = useState('');

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    console.log(article.intro);
  };
  const [Move,SetMove] = React.useState(false);
  const handleNextStep = () => {
    if (selectedArticle) {

      console.log("Selected article intro: ", selectedArticle.intro);
      SetMove(true);
    } else {
      alert('Please select an article');
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="loadingwraper">
          <div className="loading-spinner">Loading...</div>
        </div>
      ) : (
        <>
          {Move ? (
            <ArticleOutline Intro={selectedArticle} Title={TITLE} numTitles={num} />
          ) : (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
              <h2 className="text-2xl font-bold mb-4">Select an Article</h2>
              <div className="article-list">
                {articles.map((article) => (
                  <div
                    key={article.id}
                    className={`article-card ${
                      selectedArticle === article ? 'selected' : 'not-selected'
                    } bg-${
                      selectedArticle === article ? 'blue' : 'gray'
                    }-200 border border-blue-300 rounded p-4 mb-4 cursor-pointer`}
                    onClick={() => handleArticleClick(article)}
                  >
                    {article.intro}
                    <br />
                  </div>
                ))}
              </div>
              <button
                onClick={handleNextStep}
                className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:shadow-outline"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
  

};

export default ArticleSelection;
