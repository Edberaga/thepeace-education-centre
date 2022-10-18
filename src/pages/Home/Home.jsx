import React from "react";
import './Home.css';
import './Review/ReviewCard.css';
import {FaHandsHelping} from 'react-icons/fa'
import {MdReadMore} from 'react-icons/md'
import {BsSuitHeartFill} from 'react-icons/bs'
import { Link } from "react-router-dom";

import Quote from "../../common.json";
import ReactPlayer from "react-player";
import Carousel from 'react-elastic-carousel';

import { HomeData } from "./HomeData";
import { ReviewData } from "./Review/ReviewData";
import 'font-awesome/css/font-awesome.min.css';

let factor = 32; // to make react player to be responsive

//For Carousel:
const breakPoints = [
    { width: 1, itemsToShow: 1},
    { width:500, itemsToShow: 1},
    { width:768, itemsToShow: 2},
    { width:1000, itemsToShow: 3}
];

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
                    <div className="section section-img">
                        <img src={require('../../assets/img/section.jpg')} className="section-image" alt="The Peace Education Centre Students" srcset="" />
                    </div>
                    <div className="section section-word">
                        <h2>About Us</h2>
                        <h1>Our Goal is to <span className="marked">Educated</span><br/>Refugee Children</h1>
                        <p>{Quote["our-goal"]}</p>
                    </div>
                </div>
            </section>

        {/*Feature Three Section */}
            <section className="container container-three">
                <div className="feature-three">
                    <div className="section section3-video">
                        <h2>Welcome To The Peace Education Centre</h2>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}>                      
                            <ReactPlayer 
                                className="section-video" 
                                controls 
                                url={'https://www.youtube.com/watch?v=iOLs5_f7ejA&t=19s'}
                                width={factor*16}
                                height={factor*9}
                            />
                        </div>
                    </div>
                    <div className="section section3-word">
                        <h1>Join Our Mission to <span className="marked">Help</span><br/>the Children</h1>
                        <p>{Quote["about-school"]}</p>
                        <div className="banner-btns">
                            <button className="btn-learn-more">
                                <Link to="./donate">
                                    <span>Donate</span>
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

        {/*Feature What They Say Section */}
            <section className="feature-five">
                <div className="container">
                    <div className="section section-word">
                        <h2>Happy People</h2>
                        <h1>What they say</h1>
                    </div>
                    <Carousel breakPoints={breakPoints} className="review-carousel">           
                        {ReviewData.map((review, index) => {
                            return (
                                <article class="review" key={index}>
                                    <div class="review-container">
                                        <img src={review.image} className="review-img" alt="" />
                                    </div>
                                    <p className="review-info">{review.word}</p>
                                    <h4 className="author">- {review.title}</h4>
                                </article>
                            );
                        })}
                    </Carousel>
                </div>
            </section>
        </>
    )
}