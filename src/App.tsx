import React from "react";
import Toolbar from "./components/Toolbar";
import Header from "./components/Header";
import SpreadsheetGrid from "./components/SpreadsheetGrid";
import BottomTabs from "./components/BottomTabs";

const App: React.FC = () => {

  return (
    <div className="flex flex-col h-screen">
  <Header />
  <Toolbar />

  <div className="flex-1 overflow-auto">
    <SpreadsheetGrid />
  </div>

  <BottomTabs />
</div>
  );
}

export default App;
