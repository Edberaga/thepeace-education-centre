import React from "react";
import './About.css';
import Quote from '../../common.json'
export const About = () => {
    return (
        <>
            <section className="about-title">
                <h1>School Mission</h1>
            </section>

            <section className="about-mission">
                <div className="container">
                    <div className="about-mission-1">
                        <p>{Quote["our-goal-about"]}</p>
                    </div>
                    <div className="about-mission-2">
                        <img src="" className="" alt="" srcset="" />
                    </div>
                </div>
            </section>

            <section className="about-history">
                <div className="container">
                    <div className="about-history-1">
                        <img src="" className="" alt="" srcset="" />
                    </div>
                    <div className="about-history-2">
                        
                    </div>
                </div>
            </section>
        </>
    )
}