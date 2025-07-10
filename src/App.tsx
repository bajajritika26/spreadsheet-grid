import React from "react";
import Toolbar from "./components/Toolbar";
import Header from "./components/Header";
import SpreadsheetGrid from "./components/SpreadsheetGrid";

const App: React.FC = () => {

  return (
    <div className="">
      <Header />
      <Toolbar />
      <SpreadsheetGrid />
    </div>
  );
}

export default App;
