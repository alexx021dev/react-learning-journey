import MemberList from "./MemberList";
import FilterToggle from "./FilterToggle";
import { useState } from "react";

export default function TeamRoster() {
  const [team, setTeam] = useState([
    { id: 1, name: "beki", active: true },
    { id: 2, name: "lina", active: false },
    { id: 3, name: "jhon", active: true },
  ]);

  const [showActiveOnly, setShowActiveOnly] = useState(false);

  const visibleMembers = showActiveOnly
    ? team.filter((m) => m.active)
    : team;

  const Toggle = (id) => {
    setTeam((prev) =>
      prev.map((member) =>
        member.id === id ? { ...member, active: !member.active } : member
      )
    );
  };

  const [newName, setNewName] = useState("");

  const addMember = () => {
  if(!newName.trim()) return;
  setTeam(prev => [
    ...team, {id:team.length + 1,name: newName, active: true},
  ]);

  setNewName("");

  }

  const reset = () => {
    setTeam([]);
  }

  return (
    <div>
      <MemberList members={visibleMembers} Toggle={Toggle} />
      <FilterToggle
        showActiveOnly={showActiveOnly}
        setShowActiveOnly={setShowActiveOnly}
      />

      <input
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Add new member"
      />
      <button onClick={addMember}>Add</button>
      <button onClick={ reset }>reset</button>


    </div>

  );
}



