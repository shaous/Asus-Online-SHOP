import React from 'react'
import Head from 'next/head'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import { fav } from "../public/favicon.png"

const Layout = ({ children }) =>
{
    return (
        <div className='layout'>
            <Head>
                <title>Asus Online Shop</title>
                <link rel="shortcut icon" type="image/png" href="../public/favicon.png" />
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