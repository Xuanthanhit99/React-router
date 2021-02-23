import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

function Nav() {
    return (
      <div >
       {/* begin menu   */}
<nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
  <div className="container">
  <NavLink to="/home">React Router - News</NavLink>
    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      Menu
      <i className="fas fa-bars" />
    </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav ml-auto">
      <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/tin">Tin tức</NavLink>
            </li>
            
            <li>
              <NavLink to="/lien-he">Contact</NavLink>
            </li>
      </ul>
    </div>
  </div>
</nav>
{/* end menu */}

      </div>
    );
  }
  
  export default Nav;
  