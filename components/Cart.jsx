import React, { useRef } from 'react'
import Link from 'next/link'

import { AiOutlinePlus, AiOutlineMinus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai'
import { BsCartPlus } from "react-icons/bs"
import { RiDeleteBin2Line, RiMoneyDollarCircleLine } from "react-icons/ri"
import { FaMoneyCheckAlt } from "react-icons/fa"

import { useStateContext } from '../context/StateContext'
import { urlFor } from '../lib/client'

import getStripe from '../lib/getStripe'
import toast from 'react-hot-toast'
import Stripe from 'stripe'

import { motion, Reorder } from 'framer-motion'

const Cart = () =>
{

    const { totalPrice, totalQuantities, cartItems, setCartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext()

    const handleCheckout = async () =>
    {
        const stripe = await getStripe();

        const response = await fetch('/api/stripe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cartItems),
        });

        if (response.statusCode === 500) return;

        const data = await response.json();

        toast.loading('Redirecting...');

        stripe.redirectToCheckout({ sessionId: data.id });
    }

    return (
        <div className='cart-wrapper'>
            <div className='cart-container'>
                <button type='button' className='cart-heading' onClick={() => setShowCart(false)}>
                    <AiOutlineLeft />
                    <span className='heading'>Your Cart</span>
                    <span className='cart-num-items'>{totalQuantities} Items</span>
                </button>

                {cartItems.length < 1 && (
                    <div className='empty-cart'>
                        <BsCartPlus size={150} color="#00adb5" />
                        <h3>Your SHOPPING - CART Is Empty . . .</h3>
                        <Link href="/">
                            <button type='button'
                                className='btn'
                                onClick={() => setShowCart(false)}
                            >
                                Start shopping
                            </button>
                        </Link>
                    </div>
                )}

                <Reorder.Group values={cartItems} onReorder={setCartItems} className='product-container'>
                    {cartItems.length >= 1 && cartItems.map((item) =>
                    (
                        <Reorder.Item value={item} className='product' key={item._id}>
                            <img src={urlFor(item?.image[0])} className="cart-product-image" />
                            <div className='item-desc'>
                                <div className='flex top'>
                                    <h5>{item.name}</h5>
                                    <button type='button' className='remove-item' onClick={() => onRemove(item)}><RiDeleteBin2Line size={40} /></button>
                                </div>
                                <div className='item-detail'>
                                    <p>
                                        {item.details}
                                    </p>
                                </div>
                                <div className='flex bottom'>
                                    <div>
                                        <p className='quantity-desc'>
                                            <span className='minus' onClick={() => toggleCartItemQuanitity(item._id, 'dec')}><AiOutlineMinus /></span>
                                            <span className='num'>{item.quantity}</span>
                                            <span className='plus' onClick={() => toggleCartItemQuanitity(item._id, 'inc')}><AiOutlinePlus /></span>
                                        </p>
                                    </div>
                                    <h4>$ {item.price}</h4>
                                </div>
                            </div>
                        </Reorder.Item>
                    ))}
                </Reorder.Group>
                {cartItems.length >= 1 && (
                    <div className='cart-bottom'>
                        <div className='total'>
                            <h3>Total :</h3>
                            <h3>$ {totalPrice}</h3>
                        </div>
                        <div className='btn-container'>
                            <button type='button' className='btn' onClick={handleCheckout}>FINAL PAY <FaMoneyCheckAlt size={50} /></button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart