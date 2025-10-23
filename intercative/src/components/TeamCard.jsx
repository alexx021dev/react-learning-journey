import React, { useState } from "react";
import MemberList from "../components/MemberList";

export default function TeamCard({ teamName }) {
  const [members, setMembers] = useState(["Alex", "Jordan", "Taylor"]);

  const addMember = () => {
    const newMember = `New Recruit #${members.length + 1}`;
    setMembers([...members, newMember]);
  };

  const clearlist = (members) => {
    setMembers([]);
  }

  return (
    <div style={styles.card}>
      <h2>{teamName}</h2>
      <p>Total Members: {members.length}</p>

      <MemberList members={members } clear={clearlist} />

      <button style={styles.button} onClick={addMember}>
        ➕ Add Member
      </button>
      {
        members.length > 0 ? 
        ( <p>Team ready!</p> ) :
        ( <p>Team empty — add members!</p>)
      
      }
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "12px",
    padding: "1rem",
    width: "300px",
    background: "#784949ff",
  },
  button: {
    marginTop: "1rem",
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    border: "none",
    background: "#61dafb",
    cursor: "pointer",
  },
};
