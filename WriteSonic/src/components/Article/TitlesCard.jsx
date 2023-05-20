import React from 'react';
import ArticleIntro from './ArticleIntro'
const TitleCard = ({ Title, isSelected, onClick }) => {
    return (
      <div
        className={`title-card ${isSelected ? 'selected' : 'not-selected'} ${isSelected ? 'bg-blue-200' : 'bg-gray-200'} border border-blue-300 rounded p-4 mb-4 cursor-pointer`}
        onClick={onClick}
      >
        {Title.title.text}
      </div>
    );
  };
  

const TitleSelection = ({ titles}) => {
  const [selectedTitle, setSelectedTitle] = React.useState('');
  const [Move,SetMove] = React.useState(false);

  const handleTitleClick = (title) => {
    setSelectedTitle(title);
  
    console.log(title.title.text);
  };

  const handleNextStep = () => {
    if (selectedTitle) {
        console.log( "here is  " + selectedTitle.title.text);
        SetMove(true);
    
    } else {
      alert('Please select a title');
    }
  };

  return (
    <>
       {Move ? <ArticleIntro Title={selectedTitle}/> :( <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
   <h2 className="text-2xl font-bold mb-4">Select a Title</h2>
   <div className="title-list">
     {titles.map((title) => (
       <TitleCard
         key={title.id}
         Title={title}
         isSelected={selectedTitle === title}
         onClick={() => handleTitleClick(title)}
       />
     ))}
   </div>
   <button
     onClick={handleNextStep}
     className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:shadow-outline"
   >
     Next
   </button>
 </div>)}
 </>

   
  );
};

export default TitleSelection;
