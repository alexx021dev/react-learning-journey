



export default function TeamList({ teamName, members, handleRemove, onEdit }) {


  return (
    <>
      <h2>{teamName ? `${teamName} Members` : "no team is selected "}</h2>

      {members.length > 0 ?
        (<ul style={styles.list}>
          {members.map((name, index) => (<li style={styles.item} key={index}>{name}
            <button onClick={() => handleRemove(index)}>remove</button>
            <button
              onClick={() => {
                const newName = prompt("Enter new name:", name);
                if (newName && newName.trim()) onEdit(index, newName.trim());
              }}
            >
              ✏️
            </button>
          </li>
          ))}
        </ul>) : (<p> the team is empty</p>)
      }
    </>
  )
}
const styles = {
  list: { listStyle: "none", padding: 0 },
  item: { background: "#f5f5f5", margin: "5px 0", padding: "8px" },
}
