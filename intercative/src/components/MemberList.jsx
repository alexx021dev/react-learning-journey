

export default function MemberList({ members, toogle }) {
  return (
    <ul>
      {members.map(member => (
        <li key={member.id}>
          {member.name} – {member.active ? "Active" : "Inactive"}
          <button onClick={() => toogle(member.id)}>Toggle</button>
        </li>
      ))}
    </ul>
  );
}


