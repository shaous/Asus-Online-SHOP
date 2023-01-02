import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

import { motion } from 'framer-motion'
import { BsCartPlus } from "react-icons/bs"

import { useStateContext } from '../context/StateContext'

const Product = ({ product: { name, image, slug, price } }) =>
{
    const { onAdd } = useStateContext()

    return (
        <Link href={`/product/${slug.current}`}>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
                <div className='product-card'>
                    <img src={urlFor(image && image[0])} alt="" className='card-product-image' width={250} height={250} />
                    <div className='product-card-info'>
                        <p className='product-name'>{name}</p>
                        <div className='product-card-buy'>
                            <p className='product-price'>$ {price}</p>
                            <button type='button' className='card-product-add'>
                                <BsCartPlus color='#00fff5' size={40} />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div >
        </Link>
    )
}

export default Product