import React, { useEffect } from 'react'
import { client, urlFor } from '../lib/client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { TypeAnimation } from "react-type-animation"

import monitorPic from "../Images/71KdSXyTpdL._AC_SL1500_-removebg-preview.png"
import headphonePic from "../Images/h732-removebg-preview (57).png"
import keyboardPic from "../Images/71fVmHJN5aL._AC_SL1500_-removebg-preview.png"
import mousePic from "../Images/h732-removebg-preview (5).png"
import pcPic from "../Images/image-removebg-preview (5).png"

const ProductsAds = () =>
{

    const adsH1 = "BE BEST WITH ASUS"
    const sentence = {
        hidden: { opacity: 0 },
        visble: {
            opacity: 1,
            transition: {
                duration: 3,
                staggerChildren: 1.5,
                opacity: 0,
            },
        }
    }

    const letter = {
        hidden: { opacity: 0, y: 50 },
        visble: {
            opacity: 1,
            y: 0
        }
    }

    return (
        <div className='product-ads-container'>
            <motion.h1 variants={sentence} initial="hidden" whileInView="visble" className='ads-h1' viewport={{ once: true }}>
                <TypeAnimation
                    sequence={[
                        'Be Best With Asus',
                        1000,
                    ]}
                    speed={30}
                    style={{ fontSize: '15rem' }}
                    wrapper="span"
                    repeat={5}
                    variants={sentence} initial="hidden" whileInView="visble" className='ads-h1' viewport={{ once: true }}
                />
            </motion.h1>
            <motion.div className='ads-wrap' initial={{ opacity: 0 }} whileInView={{ opacity: 1, zIndex: 995 }} transition={{ delay: 5, duration: 2 }} viewport={{ once: true }}>
                <motion.div className="ads-pic" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 8, duration: 2 }} viewport={{ once: true }}>
                    <Image src={monitorPic} />
                </motion.div>
                <div className='ads-images' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 8, duration: 2 }} viewport={{ once: true }}>
                    <Image src={headphonePic} />
                    <Image src={keyboardPic} />
                    <Image src={mousePic} />
                </div>
                <motion.div className='ads-pic' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 8, duration: 2 }} viewport={{ once: true }}>
                    <Image src={pcPic} />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default ProductsAds