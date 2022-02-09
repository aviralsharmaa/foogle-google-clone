import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const App = ({DarkMode ,setDarkMode,InputValue,setInputValue}) => {
    
  return (
    <div className={DarkMode ? 'dark':''}>
      <Header DarkMode={DarkMode} setDarkMode={setDarkMode} InputValue={InputValue} setInputValue={setInputValue} />
      <Footer DarkMode={DarkMode} />
    </div>
  );
};

export default App;