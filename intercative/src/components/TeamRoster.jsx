

import React from "react";

export default function MemberList({ members, toogle }) {
  return (
    <div>
      <ul>
        {members.map((member, index) => (
          <li key={`${member}-${index}`}>{member}</li>
        ))}
      </ul>
      {members.length > 0 && (
        <button onClick={clear} style={{ background: "red", color: "white" }}>
          Reset Team
        </button>
      )}
    </div>
  );
}


