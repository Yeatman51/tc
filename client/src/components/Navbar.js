import React, {useState} from "react";
import { Link } from "react-router-dom";

function Navbar() {

  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  const closeMenu = () => {
    setNavbarOpen(false)
  }

  
  const hamNavClick = () => {
    setNavbarOpen(!navbarOpen)
    // console.log('mobilehamnavclick');
  }

  return (
    <>
    <nav className="desktop-navigation">
        <ul className="links"> 
            <li><Link to="./">Home</Link></li>
            <li><Link to="./Tech">Web Development</Link></li>
            <li><Link to="./Designs">UI/UX</Link></li>
            <li><Link to="./About">About US</Link></li>
            <li><Link to="./Contact">Contact</Link></li> 
        </ul>
    </nav>

    <div className="icon-burger" onClick={hamNavClick}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>

  <nav className="mobile-navigation">
    <ul className="mobile-links" style={navbarOpen ? {display:"flex"} : {display:"none"}}>          
      <li><Link to="./" onClick={closeMenu}>Home</Link></li>
      <li><Link to="./Tech" onClick={closeMenu}>Web Development</Link></li>
      <li><Link to="./Designs" onClick={closeMenu}>UI/UX</Link></li>
      <li><Link to="./About" onClick={closeMenu}>About US</Link></li>
      <li><Link to="./Contact" onClick={closeMenu}>Contact</Link></li>
    </ul>
  </nav>
</>

  
  );
}

export default Navbar;