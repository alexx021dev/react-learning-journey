

import  TeamCard from "./components/TeamCard.jsx";
import MemberCard from "./components/MemberCard.jsx";
import Container from "./components/container.jsx";
import image from "./assets/image.png"

export default function App() {

  const team = {
    name: "Frontend Ninjas",
    members: [
      { name: "Beki", role: "Lead Developer", avatar: "" },
      { name: "Lina", role: "UI Engineer", avatar: "https://via.placeholder.com/60" },
      { name: "Tom", role: "Intern", avatar: "" }
    ]
  };
  
  return (
    <Container>
      <TeamCard members={team.member.map(member => member.name)} name={team.name}/>
      <MemberCard avatar={image} usersName="beki" role="ui developer"/> 
    </Container>
  );
}

