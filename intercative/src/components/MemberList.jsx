
import React, { useState } from "react";
import MemberList from "./MemberList";

export default function TeamCard({ teamName }) {
  const [members, setMembers] = useState(["Alex", "Jordan"]);

  const addMember = () => {
    const newMember = `Recruit #${members.length + 1}`;
    setMembers([...members, newMember]);
  };

  const clearMembers = () => setMembers([]);

  return (
    <div style={styles.card}>
      <h2>{teamName}</h2>
      <p>Total Members: {members.length}</p>
      <MemberList members={members} clear={clearMembers} />
      {members.length > 0 ? (
        <p style={{ color: "limegreen" }}>✅ Team ready!</p>
      ) : (
        <p style={{ color: "orange" }}>⚠️ Team empty — add members!</p>
      )}
      <button style={styles.button} onClick={addMember}>
        ➕ Add Member
      </button>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "12px",
    padding: "1rem",
    width: "250px",
    background: "#222",
    color: "white",
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
