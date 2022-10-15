import React from "react";
import './Home.css';
import {FaHandsHelping} from 'react-icons/fa'
import {MdReadMore} from 'react-icons/md'
import {BsSuitHeartFill} from 'react-icons/bs'
import { Link } from "react-router-dom";
import { HomeData } from "./HomeData";
import Quote from "../../common.json";
import ReactPlayer from "react-player";

export const Home = () => {
    return (
        <>
        {/*Banner Section */}
            <header className="banner">
                <h1 className="banner-title">
                    School that creates Hope
                </h1>
                <h4 className="banner-quote">
                    Every <span className="banner-quote-1">Children</span> Should have the opportunity to receive
                    quality <span className="banner-quote-2">Education</span> 
                </h4>
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

        {/*Feature One Section */}
            <section className="feature-one">
                <div className="container">
                    <section className="section-one">
                        {HomeData.map((record, index) => {
                            return (
                                <div key={index} className="feature-col" >
                                    <div className="first-col">
                                        <img src={record.image} alt={record.title} className={record.class}/>
                                        <h1 className="col-title">{record.title}</h1>
                                    </div>
                                    <div className="col-word">
                                        <p>{record.word}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </section>
                </div>
            </section>

        {/*Feature Two Section */}
            <section className="feature-two">
                <div className="container">
                    <div className="section-img">
                        <div className="background-image"></div>
                        <img src={require('../../assets/img/section.jpg')} className="section-image" alt="The Peace Education Centre Students" srcset="" />
                    </div>
                    <div className="section-word">
                        <h2>About Us</h2>
                        <h1>Our Goal is to <span className="marked">Educated</span><br/>Refugee Children</h1>
                        <p>{Quote["our-goal"]}</p>
                    </div>
                </div>
            </section>

        {/*Feature Three Section */}
            <section className="container container-three">
                <div className="feature-three">
                    <div className="section-video">
                        <h2 className="video-title">Welcome To The Peace Education Centre</h2>
                        <ReactPlayer className="section-video" controls url={'https://www.youtube.com/watch?v=iOLs5_f7ejA&t=19s'}/>
                    </div>
                    <div className="section-word">
                        <h1>Join Our Mission to <span className="marked">Help</span><br/>the Children</h1>
                        <p>{Quote["about-school"]}</p>
                        <div className="banner-btns">
                            <button className="btn-learn-more">
                                <Link to="./about">
                                    <span>Learn More</span>
                                    <BsSuitHeartFill/>
                                </Link>
                            </button>
                            <button className="btn-volunteer-now">
                                <Link to="./contact">                       
                                    <span>Become Volunteer</span>
                                    <BsSuitHeartFill/>
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        {/*Feature Three Section */}
            <section className="feature">
                <div className="container">
                    
                </div>
            </section>
        </>
    )
}