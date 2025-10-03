
// App.js
import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  const style = { display: "flex", flexDirection: "column", justifyContent: "center", width: "40%" };
  return (
    <div className="main">
      <Header />
      <Hero />
      <main style={{style}}>
        <Card title="componet" />
        <Card title="state" />
        <Card title="style" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
