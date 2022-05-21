import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
  import { auth } from '../firebase';
  import { useNavigate } from "react-router-dom";


export default function NVG() {
  const [click, setClick] = useState(false);
  const [, setButton] = useState(true);
  const navigate = useNavigate()

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            WCEMATE
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item' onClick= {()=>navigate(`/doubt/${"questions"}`)} style={{color:"white",paddingTop:"20px"}}>
               <a className="" style={{color:"white",display: "flex",cursor:"pointer", textDecoration:"none"}}>AnyDoubts</a> 
            </li>
            {/* 
            <Link
                to='/doubt'
                className='nav-links'
                // onClick= {()=>navigate(`/doubt/${"questions"}`, {state: {info: "questions"}})}
              >
                AnyDoubts
              </Link> 
            <li className='nav-item'>
              <Link
                to='/share'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Share with us
              </Link>
            </li> */}
            <li className='nav-item'>
              <Link
                to='/work'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                WorkToDO
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/compete'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Compete
              </Link>
            </li>
            {/* <li className='nav-item'>
              <Link
                to='/login'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li> */}
            <li className='nav-item'>
              <Link
                to='/login'
                className='nav-links'
                // onClick={()=>logot}
                onClick={()=>auth.signOut()}
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}


// import React, { useState } from "react";
// import HomeIcon from "@material-ui/icons/Home";
// import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
// import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
// import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
// import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
// import SearchIcon from "@material-ui/icons/Search";
// import LanguageIcon from "@material-ui/icons/Language";

// import '../css/Navbar.css'
// import { Avatar, Button, Input } from "@material-ui/core";
// import { useSelector } from "react-redux";
// import { selectUser } from "../features/userSlice";
// import db, { auth } from "../firebase";

// function Navbar() {
//   const user = useSelector(selectUser)
//   return (
//       <div className="qHeader">
//       <div className="qHeader__logo">
//         <img
//           src=""
//           alt=""
//         />
//       </div>
//       <div className="qHeader__icons">
//         <div className="active qHeader__icon">
//           {/* <HomeIcon /> */}
//           Home
//         </div>
//         <div className="qHeader__icon">
//           {/* <FeaturedPlayListOutlinedIcon /> */}
//           AnyDoubts
//         </div>
//         <div className="qHeader__icon">
//           {/* <AssignmentTurnedInOutlinedIcon /> */}
//           WorkToDO
//         </div>
//         <div className="qHeader__icon">
//           {/* <PeopleAltOutlinedIcon /> */}
//           Compete
//         </div>
//         <div className="qHeader__icon">
//           {/* <NotificationsOutlinedIcon /> */}
//           Logout
//         </div>
//       </div>
//       <div className="qHeader__input">
//         <SearchIcon />
//         <input type="text" placeholder="Search" />
//       </div>
//       <div className="qHeader__Rem">
//         <div className="qHeader__avatar">
//           <Avatar
//             onClick={() => auth.signOut()}
//             className="Avatar"
//             src={
//               user.photo
//                 ? user.photo
//                 : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
//             }
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
