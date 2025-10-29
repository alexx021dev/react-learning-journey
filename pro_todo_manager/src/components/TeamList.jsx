



export default function TeamList({ teamname, members }) {

  return (
    <>
      <h2>{teamname ?`${teamname} Members` : "no team is selected "}</h2>

      {members.length > 0 ?
        (<ul style={styles.list}>
          {members.map((name, index) => (<li style={styles.item} key={name + index}>{name}</li>))}
        </ul>) : (<p> the team is empty</p>)
      }
    </>
  )
}
const styles = {
  list: { listStyle: "none", padding: 0 },
  item: { background: "#f5f5f5", margin: "5px 0", padding: "8px" },
}
