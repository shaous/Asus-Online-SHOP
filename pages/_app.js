import React from 'react'
import '../styles/globals.css'
import Layout from '../components/Layout'

import { StateContext } from "../context/StateContext"

import { Toaster } from "react-hot-toast"
import LiveChat from 'react-livechat'

function MyApp({ Component, pageProps })
{
  return (
    <>
      <StateContext>
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </StateContext>
    </>
  )
}

export default MyApp
