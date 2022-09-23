import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'
import { BsArrowRight, BsCartPlus } from "react-icons/bs"

const FooterBanner = ({ footerBanner: { desc, discount, largeText1, largeText2, saleTime, smallText, midText, product, buttonText, image } }) =>
{
    return (
        // <>
        <div className="footer-banner-container">
            <div className="banner-desc">
                <div className="left">
                    <p>{smallText}</p>
                    <h3>{largeText1}</h3>
                    <h3>{largeText2}</h3>
                    <p>{product}</p>
                </div>
                <img
                    src={urlFor(image)} className="footer-banner-image"
                />
                <div className="right">
                    <h3>{discount} OFF To {saleTime}</h3>
                    <h3>{midText}</h3>
                    <p>{desc}</p>
                    <Link href={`/product/strix-xg49vq`}>
                        <button type="button">{buttonText}<BsCartPlus /></button>
                    </Link>
                </div>

            </div>
        </div>
        // </>
    )
}

export default FooterBanner