import React from "react";
import './Home.css';
import {FaHandsHelping} from 'react-icons/fa'
import {MdReadMore} from 'react-icons/md'
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <>
            <header className="banner">
                <h1 className="banner-title">
                    School that creates Hope
                </h1>
                <p className="banner-quote">
                    Every <span className="banner-quote-1">Children</span> Should have the opportunity to receive
                    quality <span className="banner-quote-2">Education</span> 
                </p>
                <div className="banner-btns">
                    <button className="btn-learn-more">
                        <Link to="./about">                       
                            <MdReadMore/>
                            <span>Learn More</span>
                        </Link>
                    </button>
                    <button className="btn-volunteer-now">
                        <Link to="./contact">                       
                            <FaHandsHelping/>
                            <span>Volunteer Now</span>
                        </Link>
                    </button>
                </div>
            </header>

            <section className="feature-one">
                
            </section>
        </>
    )
}