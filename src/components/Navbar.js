import React from 'react';
import '../App.css';
const NavBar = ()=>{
    return(
        <nav>
        <div  style={{height:'80px'}} className="nav-wrapper light-blue navbar-container" >
          <a href="/" className="brand-logo left"><img src="/logo-removebg-preview.png" alt="Logo" className='logo' style={{height:'30px',margin:'0 10px 0 10px',paddingleft:'10px'}}/>Arthmate</a>
          <ul id="nav-mobile" className="right ">
            <li><a href="/" style={{ fontSize: '18px' }}>Home</a></li>
            <li><a href="/team" style={{ fontSize: '18px' }}>Team</a></li>
            <li><a href="/about" style={{ fontSize: '18px' }}>About</a></li>
            <li><a href="/login" style={{ fontSize: '18px' }}>Login</a></li>
          </ul>
        </div>
      </nav>
    )
}

export default NavBar