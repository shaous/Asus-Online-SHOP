import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'
import { BsArrowRight } from "react-icons/bs"
import { motion } from 'framer-motion'

import { HeroBannerProduct } from "../pages/product/HeroBannerProduct"

const HeroBanner = ({ heroBanner }) =>
{
    return (
        <div className='hero-banner-container'>
            <div>
                <p className='beats-solo'>{heroBanner.smallText}</p>
                <h3>{heroBanner.midText}</h3>
                <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }}>{heroBanner.largeText1}</motion.h1>
                <img src={urlFor(heroBanner.image)} alt="Asus Headphone" className='hero-banner-image' />

                <div>
                    <Link href='/product/HeroBannerProduct'>
                        <motion.button type='button' initial={{ x: -300 }} animate={{ x: 0 }} transition={{ duration: 2 }}>{heroBanner.buttonText}<BsArrowRight /></motion.button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner