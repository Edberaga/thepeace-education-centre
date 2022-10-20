import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import Quote from '../../common.json'

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
            col 2
        </div>
        <div className="footer-col col-3">
            col 3
        </div>
        <div className="footer-col col-4">
            col 4
        </div>
    </footer>
  )
}