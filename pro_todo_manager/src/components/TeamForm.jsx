

export default function TeamList({
  addMember,
  handleReset,
  handleNewMember,
  newMember,
  handleTeamName,
  teamName

}) {

  return (
    <div>
       <form onSubmit={addMember} style={styles.form}>
        <input type="text" 
         style={styles.input}
          placeholder="team name "
          value={teamName}
          onChange={handleTeamName}
        />

        <input type="text" style={styles.input}
          placeholder="member name "
          value={newMember}
          onChange={handleNewMember}
        />
        <button disabled={!newMember.trim()}  style={styles.button} >add member</button>
      </form>

      <h2> {teamName}</h2>

      
      <button onClick={handleReset} style={styles.reset}> reset </button>

    </div>
  )
}
const styles = {
  form: { marginBottom: "1rem" },
  input: {
    width: "90%",
    padding: "8px",
    margin: "5px 0",
  },
  button: {
    margin: "5px",
    padding: "8px 12px",
    cursor: "pointer",
  },
  reset: {
    margin: "5px",
    padding: "8px 12px",
    backgroundColor: "#eee",
    cursor: "pointer",
  },
};

