import React from "react";
import Search from "./components/YoutubeContext/Search";
import YoutubeContext from "./components/YoutubeContext/YoutubeContext";
import Store from "./components/YoutubeContext/Store";
function App() {
  return (
    <div className="App">
      <Store>
        <Search />
        <YoutubeContext />
      </Store>
    </div>
  );
}

export default App;
