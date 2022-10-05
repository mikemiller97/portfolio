import Header from "./components/Header"
import About from "./components/About"
import Projects from "./components/Projects"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="info">
        <About />
        <Projects />
      </div>
    </div>
  );
}

export default App;
