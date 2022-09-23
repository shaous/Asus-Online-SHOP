import React from 'react'
import { BsInstagram } from "react-icons/bs"
import { ImLinkedin, ImTwitter } from "react-icons/im"

const Footer = () =>
{
    return (
        <div className='footer-container'>
            <p>shayan saed all rights reserverd</p>
            <div className='icons'>
                <BsInstagram />
                <ImLinkedin />
                <ImTwitter />
            </div>
        </div>
    )
}

export default Footer