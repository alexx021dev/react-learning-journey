// components/Avatar.jsx


export default function Container({ children }) {
const card = {
  display : "flex", flexDirection: "column", justifyContent : "center",
  backgroundColor: "black", borderRadius: "1rem"
}
  return (
     <div style={ card }>{ children }</div>
 )
}

