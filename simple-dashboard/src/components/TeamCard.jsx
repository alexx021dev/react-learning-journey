

export default function TeamCard({ name = "guest", members = [] }) {

    const ismember = members.length > 0;
    return(
        <div>
            <h3>{ name }</h3>
            {
                ismember ? (
                    <ul>
                        {members.map((member, index) => (
                            <li key={index}>{ member }</li>
                        ))}
                    </ul>
                ) : (
                    <p>there is no member</p>
                )
            }
        </div>
    )
}

