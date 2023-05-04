import logo from "./logo.svg";
import "./App.css";
import Albums from "./components/Albums";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
      <Albums />
    </>
  );
}

export default App;
