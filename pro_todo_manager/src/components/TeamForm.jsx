

export default function TeamForm({
  teamName,
  setTeamName,
  newMember,
  setNewMember,
  members,
  setMembers
}) {
const addmember = (newMember) => {
  setMembers(
    { ...members, {id: members.length + 1,name: newMember}}
  )
}


  return (
    <div>
      <input
        type="text"
        placeholder="Team Name"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
      />

      <input
        type="text"
        placeholder="New Member Name"
        value={newMember}
        onChange={(e) => setNewMember(e.target.value)}
      />

      <button onClick={ addmember }>Add Member</button>
      <button >Reset</button>
    </div>
  );
}
