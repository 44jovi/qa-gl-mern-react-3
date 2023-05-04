import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Albums from "./components/Albums";
import Comments from "./components/Comments";
import Photos from "./components/Photos";
import Posts from "./components/Posts";
import Todos from "./components/Todos";
import Users from "./components/Users";
import NotFound from "./components/NotFound";
import OMDB from "./components/omdb/OMDB";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>

      {/* <BrowserRouter>
        <Menu />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/albums" element={<Albums />}></Route>
          <Route exact path="/comments" element={<Comments />}></Route>
          <Route exact path="/posts" element={<Posts />}></Route>
          <Route exact path="/photos" element={<Photos />}></Route>
          <Route exact path="/todos" element={<Todos />}></Route>
          <Route exact path="/users" element={<Users />}></Route>
          <Route exact path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter> */}
      <OMDB />
    </>
  );
}

export default App;
