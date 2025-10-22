

export default function TeamCard({ name = "guest", members = [] }) {

    const ismember = members.length > 0;
    return (
        <div>
            <h3>{name}</h3>
            {
                ismember ? (
                    <ul>
                        {members.map((member) => (
                            <li key={member}>{member}</li>
                        ))}
                    </ul>
                ) : (
                    <p>there is no member</p>
                )
            }
            {members.map(member => (
                <MemberCard
                    key={member.name}
                    avatar={member.avatar}
                    name={member.name}
                    role={member.role}
                />
            ))}

        </div>
    )
}

