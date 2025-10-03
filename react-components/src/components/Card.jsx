import "./card.css"

function Profile() {
  return(
    <div className="pro"></div>
  )
}
// components/Card.js
function Card({ title, content }) {

  return (
    <div className="cards">
      <h3>{title}</h3>
      <p>{content}</p>
      <Profile />
    </div>
  );
}
export default Card;
