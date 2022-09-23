import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import asusLogo from "../Images/asus.png"
import gamersLogo from "../Images/gamers.png"
import { AiOutlineShopping } from "react-icons/ai"

import Cart from "../components/Cart"
import { useStateContext } from '../context/StateContext'

const Navbar = () =>
{

    const { showCart, setShowCart, totalQuantities } = useStateContext()

    return (
        <div className='navbar-container'>
            <Link href="/">
                <div className='logos-container'>
                    <Image src={asusLogo} className="logo" />
                    <Image src={gamersLogo} className="logo" />
                </div>
            </Link>
            <button className='cart-icon' onClick={() => setShowCart(true)}>
                <AiOutlineShopping />
                <span className='cart-item-qty'>{totalQuantities}</span>
            </button>
            {showCart && <Cart />}
        </div>
    )
}

export default Navbar