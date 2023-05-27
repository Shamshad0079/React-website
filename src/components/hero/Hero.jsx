import React from 'react'
import Header from "../header/Header"
import "./hero.css"
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import { motion } from 'framer-motion'

function Hero() {

    const transition = { type: 'spring', duration: 3 }

    return (
        <div className='hero'>

            <div className="blur hero-blur"></div>

            <div className="left-h">
                <Header />

                {/* the best ad */}
                <div className="the-best-add">
                    <motion.div
                        initial={{ left: '238px' }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween' }}
                    >
                    </motion.div>
                    <span>the best fitness club in the town</span>
                </div>

                {/* Hero heading */}
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div>
                        <span>
                            In here we will help you to shape and build your ideal body and live up your life to fullset
                        </span>
                    </div>
                </div>

                {/* figure */}
                <div className="figures">
                    <div>
                        <span>+140</span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span>+978</span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>fitness programs</span>
                    </div>
                </div>

                {/* hero button */}
                <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>

            </div>

            <div className="right-h">
                <button className='btn'>Join Now</button>

                <div className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </div>

                {/* hero images */}
                <img src={hero_image} alt="" className='hero-img' />
                <img src={hero_image_back} alt="" className='hero-img-back' />
                {/* calories */}
                <div className="calories">
                    <img src={Calories} alt="" />
                    <span>Calories Burned</span>
                    <span>220 kcal</span>
                </div>

            </div>

        </div>
    )
}

export default Hero