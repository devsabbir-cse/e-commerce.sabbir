import React from 'react'
import Banner from './components/Banner'
import CartBanner from './components/CartBanner'
import Cart from '../global_components/Cart'

const page = () => {
  return (
    <div >
        <Banner/>
        <CartBanner/>
        <Cart/>
    </div>
  )
}

export default page