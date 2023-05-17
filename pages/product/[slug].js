import React, { useEffect, useState } from 'react'
import { client, urlFor } from '../../lib/client'

import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { motion } from "framer-motion"
import Product from '../../components/Product'

import { useStateContext } from '../../context/StateContext'
import toast from 'react-hot-toast'

const ProductDetails = ({ products, product }) =>
{

    const { image, price, details, name, type, category} = product

    const [index, setIndex] = useState(0)

    const { qty, inQty, decQty, onAdd, setShowCart } = useStateContext()

    const handleBuyNow = () =>
    {
        onAdd(product, qty)
        setShowCart(true)
    }

    console.log(type , category)

    return (
        <div>
            <div className='product-detail-container'>
                <div>
                    <div className='image-container'>
                        <motion.img src={urlFor(image && image[index])} className="product-detail-image" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} />
                    </div>
                    <div className='small-images-container'>
                        {image?.map((item, i) => (
                            <motion.img key={i} src={urlFor(item)} className={i === index ? "small-image selected-image" : "small-image"} onMouseEnter={() => setIndex(i)} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: i + 0.5 }} />
                        ))}
                    </div>
                </div>
                <div className='product-detail-desc'>
                    <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} >{name}</motion.h1>
                    <motion.h4 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 2 }}>Details :</motion.h4>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 3 }}>{details}</motion.p>

                    <div className='quantity'>
                        <div className='qty-wrapper'>
                            <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 4 }}>Quantity :</motion.h3>
                            <motion.p className='quantity-desc' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 5.5 }}>
                                <span className='minus' onClick={decQty}><AiOutlineMinus /></span>
                                <span className='num'>{qty}</span>
                                <span className='plus' onClick={inQty}><AiOutlinePlus /></span>
                            </motion.p>
                        </div>
                        <motion.p className='price' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 6.5 }}>$ {price}</motion.p>
                    </div>
                    <motion.div className='buttons' initial={{ y: -70 }} whileInView={{ y: 0 }} transition={{ duration: 1.5, delay: 7 }}>
                        <motion.button type='button' className='add-to-cart' onClick={() => onAdd(product, qty)} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 7.5 }} >Add To Cart</motion.button>
                        <motion.button type='button' className='buy-now' onClick={handleBuyNow} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 7.5 }} >Buy Now</motion.button>
                    </motion.div>
                </div>
            </div>
            <div className='maylike-products-wrapper'>
                <h2>You May Also Like</h2>
                <div className='marquee'>
                    <div className='maylike-products-container track'>{products.map((item) => (<Product key={item._id} product={item} />))}</div>
                </div>
            </div>
        </div>
    )
}

export const getStaticPaths = async () =>
{
    const query = `*[_type == "product"] {
        slug {
            current
        }
    }
    `;

    const products = await client.fetch(query)

    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }))

    return {
        paths,
        fallback: "blocking"
    }
}

export const getStaticProps = async ({ params: { slug } }) =>
{
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]'

    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);

    return {
        props: { products, product }
    }
}

export default ProductDetails