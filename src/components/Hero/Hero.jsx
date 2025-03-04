import React from "react";
import Header from "../Header/Header";
import './Hero.css'

import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

import { motion } from "framer-motion";
import NumberCounter from "number-counter";

const Hero = () => {

    const transition = {type : 'spring', duration : 2}

    return (
        <div className="hero">
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header/>
                {/* the best gym ad*/}
                <div className="the-best-ad">
                    <motion.div
                        initial = {{left : '238px'}}
                        whileInView={{left : '8px'}}
                        transition={{...transition, type : 'tween'}}
                    >
                    </motion.div>
                    <span>
                        the best fitness club in the town
                    </span>
                </div>

                {/* Hero Heading */}
                <div className="hero-text">
                    <div><span className="storke-text">Shape </span><span>Your</span></div>
                    <div><span>Ideal Body</span></div>
                    <div>
                        <span>
                            In here we will help you to shape and build your 
                            ideal body and live up your life to fullest
                        </span>
                    </div>
                </div>

                {/* Figure */}
                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter 
                                start={100} 
                                end={140} 
                                delay = '4' 
                                preFix="+" 
                            />
                        </span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span>
                        <NumberCounter 
                                start={800} 
                                end={978} 
                                delay = '4' 
                                preFix="+" 
                            />
                        </span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>
                        <NumberCounter 
                                start={0} 
                                end={50} 
                                delay = '4' 
                                preFix="+" 
                            />
                        </span>
                        <span>fitness programs</span>
                    </div>
                </div>

                {/* Buttons */}
                <div className="hero-buttons">
                    <buttons className="btn">Get Started</buttons>
                    <buttons className="btn">Learn More</buttons>

                </div>
            </div>
            <div className="right-h">
                <button className="btn">Join Now</button>

                <motion.div 
                        initial = {{right : '-3rem'}}
                        whileInView={{right : '4rem'}}
                        transition={{...transition, type : 'tween'}}
                        className="heart-rate"
                    >
                    <img src={Heart} alt="" />
                    <span>Heart Rate </span><span>116 bpm</span>
                </motion.div>

                {/* Hero Images */}
                <img src={hero_image} alt=""  className="hero-image"/>
                <motion.img
                        initial = {{right : "11rem" }}
                        whileInView={{right : "20rem"}}
                        transition={{...transition, type : 'tween'}}
                        src={hero_image_back} alt="" className="hero-image-back"
                    />

                {/* Calories */}
                <motion.div 
                        initial = {{right : "37rem" }}
                        whileInView={{right : "27rem"}}
                        transition={{...transition, type : 'tween'}}
                        className="calories"
                    >
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Hero;