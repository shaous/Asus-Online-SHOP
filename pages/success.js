import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill, BsCartCheck } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { beHappy } from '../lib/utils';

const Success = () =>
{
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

    useEffect(() =>
    {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        beHappy();
    }, []);

    return (
        <div className='success-wrapper'>
            <div className='success'>
                <p className='icon'>
                    <BsCartCheck />
                </p>
                <h2>Thank you for your trust and purchase , We are looking for the incredible</h2>
                <p className='email-msg'>Chek Your E - Mail For Order - Information . . .</p>
                <p className='description'>For Any Qustion Or Report Problem Of Shop And Troubleshot Just E - Mail To Us
                    <a href='mailto:sadmwchshyshayan55@gmail.com'>E - Mail To Support</a>
                </p>
                <Link href="/">
                    <button type='button' className='btn'>
                        Back To Asus Shop
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Success