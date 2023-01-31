import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Link as LinkS } from "react-scroll"

import { client, urlFor } from '../lib/client'

import { motion } from 'framer-motion'

import HeroBanner from "../components/HeroBanner"
import Product from "../components/Product"
import FooterBanner from "../components/FooterBanner"
import ProductsAds from '../components/ProductsAds'

import { FiMonitor } from "react-icons/fi"
import { GiComputerFan } from "react-icons/gi"
import { ImKeyboard, ImHeadphones } from "react-icons/im"
import { BsMouse3 } from "react-icons/bs"
import { CgTouchpad } from "react-icons/cg"
import { AiOutlineLaptop } from "react-icons/ai"
import { MdKeyboardArrowUp } from "react-icons/md"

import { LiveChatWidget, EventHandlerPayload } from '@livechat/widget-react'
import { all } from 'axios'

const Home = ({ products, bannerData }) =>
{

  const [productsList, setProductsList] = useState([])

  const [monitors, setMonitors] = useState([])
  const [pcs, setPcs] = useState([])
  const [keyboards, setKeyboards] = useState([])
  const [mouses, setMouses] = useState([])
  const [headphones, setHeadphones] = useState([])
  const [mousePad, setMousePad] = useState([])
  const [laptops, setLoptops] = useState([])

  const [searchWord, setSearchWord] = useState("")

  const filterProduct = productsList.filter((product) =>
  {
    return product.name.toLowerCase().includes(searchWord.toLowerCase());
  })

  const [showTopBtn, setShowTopBtn] = useState(false);

  const [isLoaded, setIsloaded] = useState(false)

  useEffect(() =>
  {
    const filterProducts = async () =>
    {
      await setProductsList(products)
      setMonitors(products.filter((item) => item.category === "monitor"))
      setPcs(products.filter((item) => item.category === "pc"))
      setKeyboards(products.filter((item) => item.category === "keyboard"))
      setMouses(products.filter((item) => item.category === "mouse"))
      setHeadphones(products.filter((item) => item.category === "headphone"))
      setMousePad(products.filter((item) => item.category === "mouse-pad"))
      setLoptops(products.filter((item) => item.category === "laptop"))
    }
    filterProducts()

    window.addEventListener('scroll', () =>
    {
      if (window.scrollY > 600)
      {
        setShowTopBtn(true);
      } else
      {
        setShowTopBtn(false);
      }
    });

    window.addEventListener("load", () =>
    {
      setIsloaded(true)
    })

  }, [])

  return (
    <>
      <div>

        <HeroBanner heroBanner={bannerData.length && bannerData[1]} />

        <div className='home-wrapper'>
          <div className='shapes'>
            <div className='big-shape'> </div>
            <div className='top-shape'></div>
            <div className='second-big-shape'> </div>
            <div className='small-shape'> </div>
            <div className='mid-shape'> </div>
            <div className='center-shape'> </div>
          </div>

          {isLoaded && (<LiveChatWidget license="14907978" />)}
          <div className='go-wrap'>
            <div className='go-top-wrap'>
              {showTopBtn && (<button className={"go-top-btn"} onClick={() => { document.documentElement.scrollTop = 0 }} >
                <MdKeyboardArrowUp size={50} />
              </button>)}
            </div>
          </div>

          <div className='products-marquee'>
            <div className='input-search-container'>
              <motion.input initial={{ width: 900, opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 3 }} type="text" placeholder='Enter Product Name For Filter Products' onChange={(e) => setSearchWord(e.target.value)} className="searchInput" />
              <motion.div className='input-icons-wrap' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 5 }}>
                <LinkS to="monitor" className='input-icon'><FiMonitor /></LinkS>
                <LinkS to="pc" className='input-icon'><GiComputerFan /></LinkS>
                <LinkS to="keyboard" className='input-icon'><ImKeyboard /></LinkS>
                <LinkS to="mouse" className='input-icon'><BsMouse3 /></LinkS>
                <LinkS to="mouse-pad" className='input-icon'><CgTouchpad /></LinkS>
                <LinkS to="headphone" className='input-icon'><ImHeadphones /></LinkS>
                <LinkS to="laptop" className='input-icon'><AiOutlineLaptop /></LinkS>
              </motion.div>
            </div>

            <div className='products-container'>
              <div className='products-track'>
                {filterProduct?.map((product) => <Product key={product._id} product={product} />)}
              </div>
            </div>
          </div>


          <motion.div className='monitors-wrapper' id='monitor' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
            <div className='catagory-marquee'>
              <div className='catagory'>
                <motion.h3 className='catagory-name' initial={{ opacity: 1 }} whileInView={{ letterSpacing: "4rem", opacity: 0, zIndex: -10 }} transition={{ duration: 4 }} viewport={{ once: true }}>MONITOR</motion.h3>
                <motion.div className='left-products-track' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 8 }} viewport={{ once: true }}>
                  {monitors.map((product) => <Product key={product._id} product={product} />)}
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div className='monitors-wrapper' id='pc' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
            <div className='catagory-marquee'>
              <div className='catagory'>
                <motion.h3 className='catagory-name' initial={{ opacity: 1 }} whileInView={{ letterSpacing: "4rem", opacity: 0, zIndex: -10 }} transition={{ duration: 4 }} viewport={{ once: true }}>PC</motion.h3>
                <motion.div className='left-products-track' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 8 }} viewport={{ once: true }}>
                  {pcs.map((product) => <Product key={product._id} product={product} />)}
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div className='monitors-wrapper' id='keyboard' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
            <div className='catagory-marquee'>
              <div className='catagory'>
                <motion.h3 className='catagory-name' initial={{ opacity: 1 }} whileInView={{ letterSpacing: "4rem", opacity: 0, zIndex: -10 }} transition={{ duration: 4 }} viewport={{ once: true }}>KEYBOARD</motion.h3>
                <motion.div className='left-products-track' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 8 }} viewport={{ once: true }}>
                  {keyboards.map((product) => <Product key={product._id} product={product} />)}
                </motion.div>
              </div>
            </div>
          </motion.div>

          <ProductsAds />

          <motion.div className='monitors-wrapper' id='mouse' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
            <div className='catagory-marquee'>
              <div className='catagory'>
                <motion.h3 className='catagory-name' initial={{ opacity: 1 }} whileInView={{ letterSpacing: "4rem", opacity: 0, zIndex: -10 }} transition={{ duration: 4 }} viewport={{ once: true }}>MOUSE</motion.h3>
                <motion.div className='left-products-track' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 8 }} viewport={{ once: true }}>
                  {mouses.map((product) => <Product key={product._id} product={product} />)}
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div className='monitors-wrapper' id='mouse-pad' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
            <div className='catagory-marquee'>
              <div className='catagory'>
                <motion.h3 className='catagory-name' initial={{ opacity: 1 }} whileInView={{ letterSpacing: "4rem", opacity: 0, zIndex: -10 }} transition={{ duration: 4 }} viewport={{ once: true }}>MOUSE PAD</motion.h3>
                <motion.div className='left-products-track' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 8 }} viewport={{ once: true }}>
                  {mousePad.map((product) => <Product key={product._id} product={product} />)}
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div className='monitors-wrapper' id='headphone' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
            <div className='catagory-marquee'>
              <div className='catagory'>
                <motion.h3 className='catagory-name' initial={{ opacity: 1 }} whileInView={{ letterSpacing: "4rem", opacity: 0, zIndex: -10 }} transition={{ duration: 4 }} viewport={{ once: true }}>HEADPHONE</motion.h3>
                <motion.div className='left-products-track' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 8 }} viewport={{ once: true }}>
                  {headphones.map((product) => <Product key={product._id} product={product} />)}
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div className='monitors-wrapper' id='laptop' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
            <div className='catagory-marquee'>
              <div className='catagory'>
                <motion.h3 className='catagory-name' initial={{ opacity: 1 }} whileInView={{ letterSpacing: "4rem", opacity: 0, zIndex: -10 }} transition={{ duration: 4 }} viewport={{ once: true }}>LAPTOP</motion.h3>
                <motion.div className='left-products-track' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 8 }} viewport={{ once: true }}>
                  {laptops.map((product) => <Product key={product._id} product={product} />)}
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>

        <FooterBanner footerBanner={bannerData.length && bannerData[0]} />

      </div>
    </>
  )
}

export const getServerSideProps = async () =>
{
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)

  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)

  const imagesQuery = '*[_type == "images"]'
  const images = await client.fetch(imagesQuery)

  return {
    props: { products, bannerData, images }
  }
}

export default Home;