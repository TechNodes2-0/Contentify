import React from "react";
import { Provider } from "react-redux";
import Demo from "./Demo";
import Hero from "./Hero";
import { store } from "./services/store";
import './App.css'

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Hero />
        <Demo />
        {/* Paste the code for the Demo component here */}
      </Provider>
    </React.StrictMode>
  );
};

export default App;
