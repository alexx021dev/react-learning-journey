

export default function MemberList({ members, Toggle }) {
  return (
    <ul>
      {members &&
        members.map(m => (
          <li key={m.id}>
            {m.name} - {m.active ? "Active" : "Inactive"}
            <button onClick={() => Toggle(m.id)}>Toggle</button>
          </li>
        ))}
    </ul>
  );
}




