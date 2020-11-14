import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {

  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false)
    })
    return () => {
      window.removeEventListener("scroll");
    }
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img 
       className="nav_logo"
       src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png"
       alt="Netflix Logo"
      />
      <img 
       className="nav_avatar"
       src="https://media-exp1.licdn.com/dms/image/C4D03AQHS4Arazi8SQg/profile-displayphoto-shrink_200_200/0?e=1610582400&v=beta&t=ojP1i0Uo5TDic9p1V6-c81Y9V5xGdyTEVBl2R2irL_0"
       alt="Netflix User"
      />
    </div>
  )
}

export default Nav;
