import { NavLink } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return <header>
    <nav>
      <NavLink to="/" className={({isActive}) => 
        isActive ? "activeLink link" : "nonActiveLink link"
      }>Domů</NavLink>

      <NavLink to="/movies" className={({isActive}) => 
        isActive ? "activeLink link" : "nonActiveLink link"
      }>Filmy</NavLink>
      
      <NavLink to="/serials" className={({isActive}) => 
        isActive ? "activeLink link" : "nonActiveLink link"
      }>Seriály</NavLink>
    </nav>
  </header>
}

export default Navbar