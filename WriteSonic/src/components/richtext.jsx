  import React, { useEffect, useState } from 'react';
  import axios from 'axios';
  import './RichTextComponent.css'; // Import CSS file
  
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
                'Authorization':`Bearer ${import.meta.env.VITE_GITHUB_API_KEY}`,
                'X-GitHub-Api-Version': '2022-11-28',
              },
            }
          );
          setFormattedParagraphs(response.data);
        } catch (error) {
          console.log(error);
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
  
  const App = () => {
     const text = `# The Top 10 ReactJS Tips for Beginners\n\nWhen you first glance at the word ReactJS, it might appear to be some kind of complex new web framework. In actual fact, the code that underlies most modern versions of React is actually quite simple. All you need to know about it is that it's an open-source JavaScript engine which can be used for creating websites and applications. It's also been around for a while, but its popularity has grown steadily over the years. Today, there are a number of developers developing their own take on this same idea with their own spin on how things should work in the browser. The result? The world's most popular single-page application framework. How much do you know about it? Let's find out!\n\n## 1. Start with the Basics\nReactJS is a JavaScript library, which means it's essentially just a collection of functions and methods that you can use when building your apps. But before you can start using it, you need to have a basic understanding of JavaScript. If you're new to programming, this might seem intimidating at first, but don't worry! There are plenty of resources available online that can help you get started. Once you've got a good grasp of JavaScript, you can start learning ReactJS.\n\nIt's important to start with the basics when learning ReactJS. Don't try to build a complex app right away. Instead, start with a simple “Hello World” example and work your way up from there. This will help you get a feel for how ReactJS works and how you can use it to build more complex apps.\n\n## 2. Learn the React Component Lifecycle\nOne of the key concepts in ReactJS is the component lifecycle. Components are the building blocks of your app, and understanding their lifecycle is essential to building robust and scalable apps. The component lifecycle refers to the various stages that a component goes through, from initialization to destruction.\n\nThere are three main phases of the component lifecycle: mounting, updating, and unmounting. During the mounting phase, the component is created and added to the DOM. During the updating phase, the component is updated with new data or props. And during the unmounting phase, the component is removed from the DOM.\n\n## 3. Use JSX\nJSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. This can make your code more readable and easier to understand. With JSX, you can write code like this:\n\n\`\`\`\nconst element = <h1>Hello, world!</h1>;\n\`\`\`\n\nThis code will create a new element that displays the text “Hello, world!” in an h1 tag. JSX is not required to use ReactJS, but it can make your code more concise and easier to read.\n\n## 4. Use Props and State\nProps and state are two key concepts in ReactJS. Props are short for “properties” and are used to pass data from one component to another. State, on the other hand, is used to manage the internal state of a component. This can include things like user input, form data, or other variables that change over time.\n\nIt's important to understand the difference between props and state, and how they can be used together to build dynamic and interactive apps. Props are passed down from parent components to child components, while state is managed within a component.\n\n## 5. Use React Router\nReact Router is a popular library for routing in ReactJS. It allows you to build single-page apps with multiple views, and provides a simple and intuitive API for managing your routes.\n\nWith React Router, you can define your routes using JSX, and then use components to render each view. This can make your code more modular and easier to maintain, as each view can be managed in its own component.\n\n## 6. Use Redux for State Management\nRedux is a popular library for managing state in ReactJS. It provides a centralized store for your app's state, and allows you to manage your state using actions and reducers. Redux can help you build more scalable and maintainable apps, as it provides a clear separation of concerns between your components and your state management logic.\n\n## 7. Use React Native for Mobile Development\nReact Native is a framework for building mobile apps using ReactJS. It allows you to write your code once and use it to build apps for both iOS and Android. React Native provides a set of native components that can be used to build your app's UI, and allows you to access device-specific features like the camera, accelerometer, and more.\n\n## 8. Use Hooks for Stateful Logic\nHooks are a new feature in ReactJS that allow you to use stateful logic in functional components. This can make your code more concise and easier to read, as you don't need to write a class component just to manage state. Hooks provide a simple and intuitive API for managing state, and can be used to build complex and dynamic apps.\n\n## 9. Use Server-Side Rendering for SEO\nServer-side rendering is a technique for rendering your app on the server before sending it to the client. This can improve your app's SEO, as search engines can read the HTML content of your app before it's loaded in the browser. ReactJS provides built-in support for server-side rendering, and there are several libraries available that can help you implement it in your app.\n\n## 10. Use React DevTools for Debugging\nReact DevTools is a browser extension that provides a set of tools for debugging and profiling your ReactJS apps. It allows you to inspect the component tree, view the props and state of each component, and monitor performance metrics like render times and updates per second. React DevTools can be a valuable tool for debugging and optimizing your app, and should be a part of every ReactJS developer's toolkit.\n\n# Conclusion\nReactJS is a powerful and flexible JavaScript library that can be used to build robust and scalable web applications. By following these tips, you can learn how to use ReactJS effectively and build apps that are both functional and beautiful. Whether you're a beginner or an experienced developer, there's always something new to learn with ReactJS. So what are you waiting for? Start building your next app today!`;
  
    return (
      <div>
        <RichTextComponent content={text} />
      </div>
    );
  };
  
  export default App;
  