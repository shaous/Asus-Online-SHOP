import React from 'react'
import Head from 'next/head'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import fav from "../public/vercel.ico"

const Layout = ({ children }) =>
{
    return (
        <div className='layout'>
            <Head>
                <link rel="icon" type="ico" href={fav} />
                <title>Asus Online Shop</title>
            </Head>
            <header>
                <Navbar />
            </header>
            <main className='main-container'>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout