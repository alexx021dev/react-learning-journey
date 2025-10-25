import MemberList from "./MemberList";
import FilterToggle from "./FilterToogle";
import { useState } from "react";


export default function TeamRoster() {

const [team, setTeam]  = useState(
  [
    {id : 1,name: "beki",active: true},
    {id : 2,name: "lina",active: false},
    {id : 3,name: "jhon",active: true}
  ]
);

const [showActiveOnly, setShowActiveOnly] = useState(false);

const visibleMembers = showActiveOnly
? team.filter(m => m.active)
: team

const Toggle = (id) => {
 setTeam(prev => {
  prev.map((member) => {
    member.id === id ? {...member, active : !member.active} : member
  })
 })
}

  return (
    <div>
        <MemberList members={ team } toogle={ Toggle }/>
        <FilterToggle showActiveOnly={ visibleMembers }  setShowActiveOnly={ Toggle }/>
    </div>
  )
}


