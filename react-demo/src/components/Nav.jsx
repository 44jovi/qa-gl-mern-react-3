import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/albums">ALBUMS</Link>
        </li>
        <li>
          <Link to="/comments">COMMENTS</Link>
        </li>
        <li>
          <Link to="/photos">PHOTOS</Link>
        </li>
        <li>
          <Link to="/posts">POSTS</Link>
        </li>
        <li>
          <Link to="/todos">TODOS</Link>
        </li>
        <li>
          <Link to="/users">USERS</Link>
        </li>
      </ul>
    </>
  );
};

export default Nav;
