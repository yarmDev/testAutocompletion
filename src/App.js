import React from "react";
import "./App.css";
import AutoCompleteTextBox from "./AutoCompleteTextBox";
import DetailsTime from "./DetailsTime";
import Results from "./Results/Results";
import Selector from "./Selecteur/Selector";
import "@sncf/bootstrap-sncf.metier/dist/bootstrap-sncf.css";
import "@sncf/bootstrap-sncf.metier/dist/bootstrap-sncf";

const App = () => {
  return (
    <div className="App">
      <AutoCompleteTextBox />
      <DetailsTime />
      <Results />
      <Selector />
    </div>
  );
};

export default App;
