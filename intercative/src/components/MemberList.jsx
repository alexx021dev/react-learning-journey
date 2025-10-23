

import React from "react";
import { useState } from "react";

function MemberList({ members,clear }) {
  const [show, setshow] = useState(true);
  const [isVisible, setbutton] = useState("hide");
  const list = Boolean(members);
  const changeListState = () => {
  setshow(!show);
    if (isVisible === "show") {
      setbutton("hide");
    } else { setbutton("show"); }
  }
  const clearlist = clear;
  return (
    <div>
      { 
         show ? (
          <ul>
            {members.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
        ) : (
          <p>No members yet</p>
        )
      }
      <button onClick={changeListState}>{isVisible}</button>
      {
        show && <button onClick={clear}>reset</button>
      }
    </div>
  );
}

export default MemberList;
