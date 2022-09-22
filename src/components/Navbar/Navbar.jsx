import React , {useEffect} from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

export const Navbar = () => {
  function animation(){
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {
    animation();
    $(window).on('resize', function(){
      setTimeout(function(){ animation(); }, 500);
    });
    
  }, []);

  return (
    <nav className='navbar navbar-expand-lg navbar-mainbg'>
      <NavLink className="navbar-brand navbar-logo" to="/" exact>
        The Peace Education Centre
      </NavLink>

      <button
        className='navbar-toggler'
        onClick={ function(){
          setTimeout(function(){ animation(); });
        }}
        type='button' data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="#navbarSupportedContent"
        aria-expanded="false"
        aria-label='Toggle navigation'>
          <i className='fas fa-bars text-white'></i>
      </button>
      
      <div 
        className="collapse navbar-collapse"
        id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            {/*Home Link */}
            <li className="nav-item active">
              <NavLink className="nav-link" to="/" exact>
              <i class="fa-solid fa-house-chimney"></i> Home
              </NavLink>
            </li>
            {/*About Us Link */}
            <li className="nav-item active">
              <NavLink className="nav-link" to="/about" exact>
              <i class="fa-solid fa-people-group"></i> About Us
              </NavLink>
            </li>
            {/*Donation Link */}
            <li className="nav-item active">
              <NavLink className="nav-link" to="/donation" exact>
              <i class="fa-solid fa-hand-holding-medical"></i> Donation
              </NavLink>
            </li>
            {/*Blog Link */}
            <li className="nav-item active">
              <NavLink className="nav-link" to="/blog" exact>
              <i class="fa-solid fa-newspaper"></i> Blog
              </NavLink>
            </li>
            {/*Gallery Link */}
            <li className="nav-item active">
              <NavLink className="nav-link" to="/gallery" exact>
              <i class="fa-solid fa-images"></i> Gallery
              </NavLink>
            </li>
            {/*Contact Us Link */}
            <li className="nav-item active">
              <NavLink className="nav-link" to="/contact" exact>
              <i class="fa-solid fa-envelope"></i> Contact Us
              </NavLink>
            </li>
          </ul>

      </div>
    </nav>
  )
}
