import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import { FaPlay, FaPause } from "react-icons/fa"
import { IoPlayBack, IoPlayForward } from "react-icons/io5"
import { TypeAnimation } from 'react-type-animation'
import { Link as LinkR } from "react-scroll"

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import HorizontalScroll from "react-scroll-horizontal"

import { motion } from "framer-motion"

import Ellipse from "../../Images/hero-product-images/Ellipse 3.png"
import Close from "../../Images/hero-product-images/Vector.png"
import Polygan from "../../Images/hero-product-images/Polygon 2.png"
import Rectangle from "../../Images/hero-product-images/Rectangle 3.png"
import Controler from "../../Images/hero-product-images/Group 3.png"

import HeadphoneOverview from "../../Images/Headphone-section/hero-removebg-preview.png"
import HeadphonePerformance from "../../Images/Headphone-section/P_setting_xxx_0_90_end_692-removebg-preview.png"
import HeadphoneInGame from "../../Images/Headphone-section/image-removebg-preview 1.png"
import HeadphoneInution from "../../Images/Headphone-section/intuition-main-removebg-preview.png"
import HeadphoneMic from "../../Images/Headphone-section/image-removebg-preview (1).png"
import HeadphoneComfort from "../../Images/Headphone-section/comfort-removebg-preview (1).png"
import HeadphoneEffects from "../../Images/Headphone-section/image-removebg-preview (2).png"

const HeroBannerProduct = () =>
{

    const videoRef = useRef(null)
    const [isPlay, setIsPlay] = useState(false)

    useEffect(() =>
    {
        if (isPlay === true)
        {
            videoRef.current.play()
        } else if (isPlay === false)
        {
            videoRef.current.pause()
        }
    }, [isPlay])

    const section = {
        hidden: { opacity: 0 },
        visble: {
            opacity: 1,
            transition: {
                duration: 3
            }
        }
    }

    useEffect(() =>
    {
        document.addEventListener("mousemove", paralex)
        function paralex(e)
        {
            this.querySelectorAll(".layer").forEach(layer =>
            {
                const speed = layer.getAttribute("data-speed")

                const x = (window.innerWidth - e.pageX * speed) / 100
                const y = (window.innerHeight - e.pageY * speed) / 100

                layer.style.transform = `translateX(${x}px) translateY(${y}px)`
            })
        }
    })

    return (
        <>
            <div className='hero-product-container'>
                <div className='shapes'>
                    <div className='big-shape'> </div>
                    <div className='mid-shape-hero'> </div>
                </div>

                <div className='back-shapes-wrap'>
                    <div className='back-shapes-wrapper'>
                        <div id="small-ellipse-back-shape" className='layer' data-speed="5">
                            <Image src={Ellipse} width="300" height="300" />
                        </div>
                        <div id="close-back-shape" className='layer' data-speed="5">
                            <Image src={Close} width="300" height="300" />
                        </div>
                        <div id="big-polygan-back-shape" className='layer' data-speed="-4">
                            <Image src={Polygan} width="300" height="300" />
                        </div>
                        <div id="small-rec-back-shape" className='layer' data-speed="-3">
                            <Image src={Rectangle} width="250" height="250" />
                        </div>
                        <div id="small-close-back-shape" className='layer' data-speed="7">
                            <Image src={Close} width="250" height="250" />
                        </div>
                        <div id="big-rec-back-shape" className='layer' data-speed="3">
                            <Image src={Rectangle} width="300" height="300" />
                        </div>
                        <div id="small-con-back-shape" className='layer' data-speed="5">
                            <Image src={Controler} width="350" height="350" />
                        </div>
                        <div id="big-con-back-shape" className='layer' data-speed="3">
                            <Image src={Controler} width="400" height="400" />
                        </div>
                        <div id="second-polygan-back-shape" className='layer' data-speed="6">
                            <Image src={Polygan} width="280" height="280" />
                        </div>
                        <div id="big-ellipse-back-shape" className='layer' data-speed="3">
                            <Image src={Ellipse} width="330" height="330" />
                        </div>
                    </div>
                </div>

                {/* <div className='hero-nav-wrap'>
                    <div className='hero-navbar-wrapper'>
                        <div className='hero-navbar-wrap'>
                            <a target="review">Review</a>
                        </div>
                    </div>
                </div> */}

                <div className='sections-wrapper'>
                    <HorizontalScroll>
                        <div className='section-wrap' id='review'>
                            <motion.div className='section' variants={section} initial="hidden" whileInView="visble">
                                <div className='section-title'>
                                    <h1 className='section-modol'>
                                        STRIX 7.1
                                    </h1>
                                    <h3 className='section-name'>
                                        Overview
                                    </h3>
                                    <div className='section-texts'>
                                        True 7.1 gaming headset with 10 discrete neodymium magnet drivers and a plug and play USB audio station With so other Possibilities Just Slide with scroll for see more . . .
                                    </div>
                                    <div className='section-image'>
                                        <Image src={HeadphoneOverview} width="850" height="850" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <div className='section-wrap' id='performance'>
                            <motion.div className='section' variants={section} initial="hidden" whileInView="visble">
                                <div className='section-title'>
                                    <h1 className='section-modol'>
                                        STRIX 7.1
                                    </h1>
                                    <h3 className='section-name'>
                                        Performance
                                    </h3>
                                    <div className='section-perf-texts'>
                                        Strix 7.1 is a superior true 7.1 surround gaming headset engineered with 10 powerful discrete neodymium-magnet drivers, full-size hexagonal ear cushions ( 130mm across at the widest point ) and stylish static and breathing lighting effects. It is accompanied by a driver-free USB audio station that features loads of audio controls and sound effects. Strix 7.1 provides an unrivaled audio experience with punchy and immersive sound. Every gunshot and footstep is reproduced with accurate positioning and stunning clarity, bringing the battlefield to life.
                                    </div>
                                    <div className='section-image'>
                                        <Image src={HeadphonePerformance} width="1000" height="1000" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <div className='section-wrap' id='in-game'>
                            <motion.div className='section' variants={section} initial="hidden" whileInView="visble">
                                <div className='section-title'>
                                    <h1 className='section-modol'>
                                        STRIX 7.1
                                    </h1>
                                    <h3 className='section-name'>
                                        In Game
                                    </h3>
                                    <div className='texts-wrap'>
                                        <div className="text-title">
                                            True 7.1 surround sound via discrete neodymium magnets
                                        </div>
                                        <div className="main-text">
                                            Each ear cup of Strix 7.1 houses five discrete neodymium magnets to enable true 7.1-channel surround sound (or eight-channel surround sound). Together with the optimized position of each driver and precise chamber mechanics, Strix 7.1 delivers realistic surround sound that makes every gamer feel the excitement of being right in the center of the game.
                                        </div>
                                    </div>
                                    <div className='second-sec-image'>
                                        <Image src={HeadphoneInGame} width="650" height="1000" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <div className='section-wrap' id='review'>
                            <motion.div className='section' variants={section} initial="hidden" whileInView="visble">
                                <div className='section-title'>
                                    <h1 className='section-modol'>
                                        STRIX 7.1
                                    </h1>
                                    <h3 className='section-name'>
                                        Control ( INTUITION )
                                    </h3>
                                    <div className='texts-wrap'>
                                        <div className="text-title">
                                            Plug-and-play USB audio station
                                        </div>
                                        <div className="main-text">
                                            Hold total control in your hand with the Strix 7.1 USB plug-and-play audio station, which works as a USB sound card and includes effective environmental noise cancellation (ENC) technology, brilliant game-audio spectrum profiles and a headphone amplifier. Its dedicated, switch-operated speaker output jack lets you easily switch audio output from headset to speakers without unplugging your headset
                                        </div>
                                    </div>
                                    <div className='second-sec-image'>
                                        <Image src={HeadphoneInution} width="950" height="950" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <div className='section-wrap' id='review'>
                            <motion.div className='section' variants={section} initial="hidden" whileInView="visble">
                                <div className='section-title'>
                                    <h1 className='section-modol'>
                                        STRIX 7.1
                                    </h1>
                                    <h3 className='section-name'>
                                        Control ( Mic )
                                    </h3>
                                    <div className='texts-wrap'>
                                        <div className="text-title">
                                            Plug-and-play USB audio station
                                        </div>
                                        <div className="sec-main-text">
                                            With the profile settings, you can enable the best aural performance for a variety of genres, including first-person shooter (FPS), racing and action/role-playing games (RPGs). Choose the suitable game-audio profile to boost critical audio details instantly. Aggressive wheel-drift effects put you right in the middle of the race track, and enhanced footsteps and gunfire sounds mean you ll pinpoint enemies more quickly and with exceptional precision !
                                        </div>
                                    </div>
                                    <div className='third-sec-image'>
                                        <Image src={HeadphoneMic} width="750" height="750" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <div className='section-wrap' id='review'>
                            <motion.div className='section' variants={section} initial="hidden" whileInView="visble">
                                <div className='section-title'>
                                    <h1 className='section-modol'>
                                        STRIX 7.1
                                    </h1>
                                    <h3 className='section-name'>
                                        Effects
                                    </h3>
                                    <div className='efe-texts-wrap'>
                                        <div className="efe-text-title">
                                            Static and breathing lighting effects
                                        </div>
                                        <div className="efe-main-text">
                                            Express your gaming style with Strix 7.1 and its owl eyes that even light up in the dark. Choose between static or breathing lighting with a simple click of a button on the audio station.
                                        </div>
                                    </div>
                                    <div className='fourth-sec-image'>
                                        <Image src={HeadphoneEffects} width="650" height="650" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <div className='section-wrap' id='review'>
                            <motion.div className='section' variants={section} initial="hidden" whileInView="visble">
                                <div className='section-title'>
                                    <h1 className='section-modol'>
                                        STRIX 7.1
                                    </h1>
                                    <h3 className='section-name'>
                                        Comfort
                                    </h3>
                                    <div className='texts-wrap'>
                                        <div className="text-title">
                                            Large protein leather ear cushions and optimal clamping force
                                        </div>
                                        <div className="main-text">
                                            Strix 7.1 is cushioned with ultra-soft, full-size memory foam (130mm across at the widest point) and highly breathable protein leather, generating greater comfort over prolonged sessions with no ear fatigue. Additionally, the headband employs an optimized clamping force based on lab testing using a wide range of head types to further improve wearing comfort.
                                        </div>
                                    </div>
                                    <div className='second-sec-image'>
                                        <Image src={HeadphoneComfort} width="750" height="1100" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <div className='section-wrap' >
                            <video ref={videoRef} className="intro-video" src="https://runway-task-artifacts.s3.amazonaws.com/2fa8ee98-c619-4384-91d9-0822e76b7ecb.mp4" loop />
                            <div className='control-wrap'>
                                <div className='time-change-wrap'>
                                    <button className='video-control' onClick={() => { videoRef.current.currentTime -= 5 }} ><IoPlayBack /></button>
                                    <button className='video-control' onClick={() => { videoRef.current.currentTime += 5 }} ><IoPlayForward /></button>
                                </div>
                                <button className='video-control' onClick={() => { setIsPlay(!isPlay) }}> {!isPlay ? (<FaPlay />) : (<FaPause />)} </button>
                            </div>
                        </div>
                    </HorizontalScroll>
                </div>
            </div >
        </>
    )
}

export default HeroBannerProduct