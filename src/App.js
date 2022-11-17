import React from "react";
import "./App.css";
import Header from "./components/Header";
import Playlistview from "./screens/Playlistview";
import Search from "./screens/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { store } from "./store";

function App() {
  useEffect(() => {
    console.log("loading data from local storage");
    const playlistData = localStorage.getItem("playlists");
    store.update((s) => {
      s.playlists = JSON.parse(playlistData);
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/playlistview" element={<Playlistview />}></Route>
            <Route path="/" element={<Search />}></Route>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
