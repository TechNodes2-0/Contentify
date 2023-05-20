import React, { useEffect, useState } from "react";
import axios from "axios";
import "../RichTextComponent.css"; // Import CSS file

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
              'Authorization': 'Bearer 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',
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

const FinalArticleSection = ({ Title, Intro, Outline }) => {
  const [generatedArticle, setGeneratedArticle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  async function generateArticle() {
    setIsLoading(true);
    const postData = {
      article_title: `${Title}`,
      article_intro: `${Intro}`,
      article_sections: [
        "Advantages of establishing human settlements on Mars",
        "Challenges of establishing human settlements on Mars",
        "Building self-sustaining societies on Mars",
        "Establishing a Mars economy",
        "How to support life on Mars through technology",
        "Creating a Mars mission plan",
        "Conclusion",
      ],
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
        "https://api.writesonic.com/v2/business/content/ai-article-writer-v3?engine=premium&language=en",
        postData,
        config
      );
      const generatedText = response.data.data[0].content;
      setGeneratedArticle(generatedText);
      console.log(generatedText)
    } catch (error) {
      console.error(error);
      throw error;
    }finally {
      setIsLoading(false);
    }
  }
  const downloadArticle = () => {
    const element = document.createElement('a');
    const file = new Blob([generatedArticle], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'generated_article.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
  useEffect(() => {
    generateArticle();
  }, []);

  return (
    <div>
      {isLoading && 
      <div className="loadingwraper">
      <div  className="loading-spinner">Loading...</div>
      </div>
      }
      {generatedArticle && (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <h2 className="text-2xl font-bold mb-4">Generated Article</h2>
          <div>
            <RichTextComponent content={generatedArticle} />
          </div>
        </div>
      )}
    </div>
  );
  
};

export default FinalArticleSection;
