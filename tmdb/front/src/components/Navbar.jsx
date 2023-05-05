import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    
    <nav>
      <Link to="/">
        <button>Peliculas</button>
      </Link>
      <Link to="/tvShows">
        <button>ProgramasTv</button>
      </Link>
      <Link to="/login">
        <button>LOGIN</button>
      </Link>
      <Link to="/signup">
        <button>SIGN UP</button>
      </Link>
    </nav>


   
  )
}

export default Navbar
