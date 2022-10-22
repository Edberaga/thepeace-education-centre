import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import Quote from '../../common.json'
import { FooterData } from './FooterData'
import { ContactData } from './FooterData'
import { BsSuitHeartFill } from 'react-icons/bs'

export const Footer = () =>{
  return (
    <footer>
        <div className="footer-col col-1">
            <Link to="/">
              <img src={require('../../assets/img/logo.jpeg')} alt="TPEC logo" srcset="" className='nav-logo'/>
            </Link>
            <p>{Quote['footer-summary']}</p>
        </div>

        <div className="footer-col col-2">
          <h2>Explore</h2>
          <ul className='footer-nav-menu'>
            {FooterData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path} >
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="footer-col col-3">
          <h2>Contact</h2>
          <ul className='footer-nav-menu'>
            {ContactData.map((item, index) => {
              return (
                <li key={index} className='footer-nav-contact'>
                  {item.icon}
                  <span>{item.content}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer-col col-4">
          <h2>Support</h2>
          <p>{Quote['footer-support']}</p>
          <button className="footer-donate">
            <Link to='/donate'>
              <BsSuitHeartFill className='nav-user-icon'/>
              <span>Donate</span>
            </Link>
          </button>
        </div>
    </footer>
  )
}