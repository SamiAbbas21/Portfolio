import "./App.css";
import { Navbar } from "./components";
import { Aboutme, Footer, Header, Ocean, Resume, Projet, Contact } from "./containers";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
        <Ocean />
      </div>
      <Aboutme />
      <Projet />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
