import MemberCard from "./MemberCard";
import image from "../assets/image.png"

export default function TeamCard({ name = "Guest Team", members = [] }) {
  const hasMembers = members.length > 0;

  return (
    <div>
      <h3>{name}</h3>
      {hasMembers ? (
        <div style={{ display: "flex", gap: "1rem" }}>
          {members.map((member) => (
            <MemberCard
              key={member.name}
              avatar={image}
              name={member.name}
              role={member.role}
            />
          ))}
        </div>
      ) : (
        <p>No members yet</p>
      )}
    </div>
  );
}


