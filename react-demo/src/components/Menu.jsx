import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";

const Menu = () => {
  return (
    <>
      <Nav pills>
        <NavItem>
          <NavLink href="/">HOME</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/albums">ALBUMS</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/comments">COMMENTS</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/photos">PHOTOS</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/posts">POSTS</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/todos">TODOS</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/users">USERS</NavLink>
        </NavItem>
      </Nav>
    </>
  );
};

export default Menu;

{
  /* <ul>
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
</ul> */
}
