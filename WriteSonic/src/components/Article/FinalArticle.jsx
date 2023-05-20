import React, { useEffect, useState } from 'react';
import axios from 'axios';


const styles = {
  h1: {
    margin: '20px 0',
    fontSize: '24px',
    color: '#FF5722', // Bright orange color
    fontWeight: 'bold',
  },
  h2: {
    margin: '10px 0',
    fontSize: '20px',
    color: '#2196F3', // Bright blue color
    fontWeight: 'bold',
  },
  p: {
    margin: '10px 0',
    fontSize: '16px',
    color: '#4CAF50', // Bright green color
    fontWeight: 'normal',
  },
};
const RichTextComponent = ({ content }) => {
  const paragraphs = content.split(/\n\n|\n/);
  const formattedParagraphs = paragraphs.map((paragraph, index) => {
    if (paragraph.startsWith('# ')) {
      return <h1 style={styles.h1} key={index}>{paragraph.substr(2)}</h1>;
    } else if (paragraph.startsWith('## ')) {
      return <h2 style={styles.h2} key={index}>{paragraph.substr(3)}</h2>;
    } else if (paragraph === '') {
      return <br key={index} />;
    } 
    else if (paragraph.startsWith('```')) {
      const codeContent = paragraph.slice(3, -3);
      return (
        <pre style={styles.code} key={index}>
          <code>{codeContent}</code>
        </pre>
      );
    }else {
      return <p style={styles.p} key={index}>{paragraph}</p>;
    }
  });

  return <div>{formattedParagraphs}</div>;
};
const FinalArticleSection = ({ Title, Intro, Outline }) => {
  const [generatedArticle, setGeneratedArticle] = useState('');
 console.log(Title);
 console.log(Intro);
 console.log(Outline);
  async function generateArticle() {
    const postData = {
        article_title: `${Title}`,
        article_intro: `${Intro}`,
        article_sections: [
            'Advantages of establishing human settlements on Mars',
            'Challenges of establishing human settlements on Mars',
            'Building self-sustaining societies on Mars',
            'Establishing a Mars economy',
            'How to support life on Mars through technology',
            'Creating a Mars mission plan',
            'Conclusion'
          ]
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
        'https://api.writesonic.com/v2/business/content/ai-article-writer-v3?engine=premium&language=en',
        postData,
        config
      );
console.log(response.data.data[0].content);
      const generatedText = response.data.data[0].content;
      setGeneratedArticle(generatedText);
    } catch (error) {
      console.error(error);
      throw error;
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Generated Article</h2>
      {/* <div className="generated-article">{generatedArticle}</div> */}
      <div>
      <RichTextComponent content={generatedArticle} /></div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={downloadArticle}
      >
        Download Article
      </button>
    </div>
  );
};

export default FinalArticleSection;
