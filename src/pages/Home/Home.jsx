import React from "react";
import './Home.css';
import {FaHandsHelping} from 'react-icons/fa'
import {MdReadMore} from 'react-icons/md'
import { Link } from "react-router-dom";
import { HomeData } from "./HomeData";

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
                <div className="container">
                    <section className="feature-row">
                        {HomeData.map((record, index) => {
                            return (
                                <div key={index} className="feature-col" >
                                    <div className="first-col">
                                        <img src={record.image} alt={record.title} className={record.class}/>
                                        <h4 className="col-title">{record.title}</h4>
                                    </div>
                                    <div className="col-word">
                                        <p className="col-text">{record.word}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </section>
                </div>
            </section>

            {/*Feature Two Section */}
            <section>
                <p>Hello</p>
            </section>
        </>
    )
}