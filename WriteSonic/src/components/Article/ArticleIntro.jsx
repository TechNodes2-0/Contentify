import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleOutline from './ArticleOutline';
const ArticleSelection = (Title) => {
  const [articles, setArticles] = useState([]);
  const [TITLE,SETTITLE]=useState('');

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
        const response = await axios.post(
            'https://api.writesonic.com/v2/business/content/blog-intros?engine=economy&language=en&num_copies=3',
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
    const Newarticles =[];
    
    try {
        for (let i = 0; i < 3; i++) {
           
            const response = await Output();
            const title = response.data; 
            console.log(title[0]);// Assuming the response contains the generated title
            Newarticles.push({ id: Date.now()+ Math.random(), intro :title[0].text });
        }

        setArticles(Newarticles);
        SETTITLE(Title.Title.title.text);
        console.log(TITLE);
    } catch (error) {
        console.error(error);
        // Handle the error appropriately
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
        {Move ? <ArticleOutline  Intro={selectedArticle} Title={TITLE}/> :(
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Select an Article</h2>
        <div className="article-list">
          {articles.map((article) => (
            <div
              key={article.id}
              className={`article-card ${selectedArticle === article ? 'selected' : 'not-selected'} bg-${selectedArticle === article ? 'blue' : 'gray'}-200 border border-blue-300 rounded p-4 mb-4 cursor-pointer`}
              onClick={() => handleArticleClick(article)}
            >
              {article.intro}
              <br></br>
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


  );
};

export default ArticleSelection;
