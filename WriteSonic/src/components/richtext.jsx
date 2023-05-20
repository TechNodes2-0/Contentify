import React from 'react';

const RichTextComponent = ({ content }) => {
  const paragraphs = content.split('\n\n');
  const formattedParagraphs = paragraphs.map((paragraph, index) => {
    if (paragraph.startsWith('# ')) {
      return <h1 key={index}>{paragraph.substr(2)}</h1>;
    } else if (paragraph.startsWith('## ')) {
      return <h2 key={index}>{paragraph.substr(3)}</h2>;
    } else {
      return <p key={index}>{paragraph}</p>;
    }
  });

  return <div>{formattedParagraphs}</div>;
};

export default RichTextComponent;
