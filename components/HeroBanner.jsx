import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { urlFor } from '../lib/client'
import { BsArrowRight } from "react-icons/bs"
import { motion } from 'framer-motion'

import { HeroBannerProduct } from "../pages/product/HeroBannerProduct"

import HeroBannerBack from "../Images/herobanner-back.png"
import HeroBannerPic from "../Images/hero-removebg-preview.png"

import HeadphoneComfort from "../Images/Headphone-section/comfort-removebg-preview (1).png"
import Controler from "../Images/Headphone-section/image-removebg-preview (1).png"
import HeadphoneLight from "../Images/Headphone-section/image-removebg-preview (2).png"
import ControlerBehind from "../Images/Headphone-section/intuition-main-removebg-preview.png"

const HeroBanner = ({ heroBanner }) =>
{
    return (
        <div className="back-wrap">
            <Image src={HeroBannerBack} className="back-pic" />

            <Link href='/product/HeroBannerProduct'>
                <motion.button className="see-more" initial={{ x: -450 }} animate={{ x: 0 }} transition={{ delay: 5, duration: 1 }}>
                    {heroBanner.buttonText} <BsArrowRight size={50} />
                </motion.button>
            </Link>

            <motion.img src={urlFor(heroBanner.image)} className="headphone-pic" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1.5 }} />

            <motion.h1 className="take-it" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
                {heroBanner.smallText}
            </motion.h1>
            <motion.h1 className="be-best" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1.5 }}>
                {heroBanner.midText} <span className="forever">Forever</span>
            </motion.h1>
            <motion.h1 className="gaming-headphone" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4, duration: 1.5 }}>
                {heroBanner.largeText1}
            </motion.h1>

            <motion.div className="images-wrap" initial={{ opacity : 0 }} animate={{ opacity : 1 }} transition={{ delay: 5, duration: 1 }}>
                <Image src={HeadphoneComfort} className="landing-product-image" />
                <Image src={Controler} className="landing-product-image" />
                <Image src={HeadphoneLight} className="landing-product-image" />
                <Image src={ControlerBehind} className="landing-product-image" />
            </motion.div>
        </div>
    )
}

export default HeroBanner