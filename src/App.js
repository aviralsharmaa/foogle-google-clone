import React,{useState} from "react";
import Home from "./components/Home";

const App = () => {
    const [DarkMode, setDarkMode] = useState(false);
    const [InputValue, setInputValue] = useState("");
  return (
    <div className={DarkMode ? 'dark':''}>
      <Home DarkMode={DarkMode} setDarkMode={setDarkMode} InputValue={InputValue} setInputValue={setInputValue} />
    </div>
  );
};

export default App;
