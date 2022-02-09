import ReactDOM from "react-dom";
import App from "./App";
import "./styles/Global.css";
import { BrowserRouter } from "react-router-dom";
import { ResultsContextProvider } from "./context/ResultsContextProvider";

ReactDOM.render(
  <ResultsContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ResultsContextProvider>,
  document.getElementById("root")
);
