import React from 'react';
import "./Header.css"
function Header() {
  return <header>
            <a href="#logo"><img src="/interview_logo.png" alt="logo" /></a>
            <button className='hamburger'>
                <img src="/hamburger.svg" alt="hamburger" />
            </button>
        </header>;
}

export default Header;
