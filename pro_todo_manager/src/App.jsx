
import { useState } from "react";
import TeamForm from "./components/TeamForm";
import TeamList from "./components/TeamList";

export default function App() {
  const [teamName, setTeamName] = useState("");
  const [newMember, setNewMember] = useState("");
  const [members, setMembers] = useState([]);

  return (
    <div>
      <h1>Team Registration</h1>

      <TeamForm
        teamName={teamName}
        setTeamName={setTeamName}
        newMember={newMember}
        setNewMember={setNewMember}
        members={members}
        setMembers={setMembers}
      />

      <TeamList members={members} />
    </div>
  );
}
