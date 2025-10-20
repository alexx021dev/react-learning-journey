// App.js
import Card from "./components/ProfileCard";
import image from "./assets/image.png"

function App() {
  const skill = ["java","nodejs","react"];
  return (
    <div className="main">
      <Card title={"employe"} skills={skill} name={"beki"} avatarUrl={image} />
    </div>
  );
}

export default App;
