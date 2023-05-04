import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Albums from "./components/Albums";
import Comments from "./components/Comments";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/albums" element={<Albums />}></Route>
          <Route exact path="/comments" element={<Comments />}></Route>
          {/* <Route exact path="*" element={<NotFoundPage />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
