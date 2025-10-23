import React from "react";
import TeamCard from "./components/TeamCard";

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>🧱 Interactive Team Tracker</h1>
      <TeamCard teamName="React Avengers" />
    </div>
  );
}

export default App;

