

export default function Card({ name, title, avatarUrl, skills }) {

    const avatarexist = avatarUrl ? true : false;
    const isempty = skills.length === 0;
    const avatarmissing = !avatarUrl;
    const formalTitle = (t) => t.toUpperCase();

    const imageStyle = {
        display: "flex",
        backgroundColor: 'lightblue',
        borderRadius: '8px',
        color: 'darkblue',
        width: "100px",
        Height: "100px",
        margin: "0 auto"
    };

    return (
        <>
            <h1>{formalTitle(title)}</h1>
            <p>{name}</p>
            {
                avatarexist
                    ? (
                        <img src={avatarUrl} alt="profile-image"style={imageStyle} />
                    )
                    : (
                        <p>no avatar available </p>
                    )

            }  {/* conditional renedring  */}
            {/*  skills list  */}

            {
                isempty ? (
                    <p> the skill stack is empty</p>
                )
                    : (
                        <ul style={{listStyle: "none", display: "flex", flexDirection: "row" ,margin: "2rem auto", padding: "0", gap: "1rem"}}>
                            {skills.map((skill, index) => (
                                <li key={index}>{skill}</li>  /* key used to identify each element uniqely so react renders change accurately */
                            ))}
                        </ul>
                    )
            }

            <button disabled={avatarmissing} style={{width: "6rem", margin: "0 auto"}}>contact</button> {/* the elmenent will be disabled if the avatarurl is not passed */}
            <p>number of skills : {skills.length}</p>

        </>
    )
}