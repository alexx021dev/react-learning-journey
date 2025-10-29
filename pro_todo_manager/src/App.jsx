


import TeamList from "./components/TeamList"
import TeamForm from "./components/TeamForm"
import { useState } from "react";

export default function App() {

  const [teamName, setTeamName] = useState("");
  const [member, setMember] = useState([]);
  const [newName, setNewName] = useState("");

  const handleTeamName = (e) => setTeamName(e.target.value);
  const handleNewMember = (e) => setNewName(e.target.value);

  const addMember = (e) => {
    e.preventDefault();
    if(!newName.trim()) return;
    setMember([...member, newName.trim()]);
    setNewName("");
  }

  const reset = () => {
    setMember([]);
    setNewName("");
    setTeamName("");

  }
  return (
    <div style={styles.app}>
      <h1> Team Registeration Form </h1>
      <TeamForm
      addMember={addMember}
      handleReset={reset}
      handleNewMember={handleNewMember}
      handleTeamName={handleTeamName}
      teamName={teamName}
      newMember={newName}
      />

      <TeamList
       members={member}
       teamname={teamName}
      />

    </div>
  )
}

const styles = {
  app: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "400px",
    margin: "2rem auto",
    textAlign: "center",
  },
};
