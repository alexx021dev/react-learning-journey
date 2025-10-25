// App.jsx
import React from "react";
import TeamRoster from "./components/TeamRoster"; 

export default function App() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ marginBottom: 12 }}>RosterManager</h1>
      <TeamRoster />
    </main>
  );
}

