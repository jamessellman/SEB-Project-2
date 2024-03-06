import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Character from "./components/Character";
import CharacterList from "./components/CharacterList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character" element={<Character />} />
          <Route path="/characterlist" element={<CharacterList />}/>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
