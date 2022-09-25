import React, { useState } from 'react';
import {FaBars} from 'react-icons/fa';
import {BsTelephoneFill} from 'react-icons/bs'
import {AiFillCloseCircle, AiOutlineMail} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './Navdata';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>

        <div className='navbar'>
          <div className='first-bar'> 
            <Link to="/">
              <img src={require('../../img/logo.jpeg')} alt="TPEC logo" srcset="" className='nav-logo'/>
            </Link>
          </div>

          <div className="second-bar">
            <div className='first-row-nav'>
              <li className="nav-text">
                <BsTelephoneFill/>
                <span> + 601 8232 2011</span>
              </li>
              <li className="nav-text">
                <AiOutlineMail style={{ fontSize: '140%' }}/>
                <span> thepeaceedu@gmail.com</span>
              </li>
            </div>

            <div className='second-row-nav'>
              <div className='nav-links'>
                <Link to='#' className='menu-bars'>
                  <FaBars onClick={showSidebar} className='menu-btn'/>
                </Link>
              </div>
              <div className="nav-user">
                <Link>
                  <button to='/signup'>Sign Up</button>
                </Link>
              </div>
            </div>
            
          </div>
        </div>

        {/*Sidebar code */}
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='close-bars'>
                <AiFillCloseCircle className='close-btn'/>
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path} >
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li className="nav-text">
              <BsTelephoneFill/>
              <span> + 601 8232 2011</span>
            </li>
            <li className="nav-text">
              <AiOutlineMail style={{ fontSize: '130%' }}/>
              <span> thepeaceedu@gmail.com</span>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;