import React from 'react'

const Navbar = () => {
    const li = "hover:text-orange-600 hover:font-bold";
    
  return (
    <div className=' border-b-3 py-5 border-orange-600 hidden lg:block bg-white'>
        <ul className='flex justify-between font-semibold text-2xl px-15'>
            <li className={li}>Trending</li>
            <li className={li}>Top Sale</li>
            <li className={li}>Fashion</li>
            <li className={li}>Cosmetics</li>
            <li className={li}>Gadget</li>
            <li className={li}>Cosmetics</li>
            <li className={li}>Fashion</li>
            <li className={li}>Gadget</li>
        </ul>
    </div>
  )
}

export default Navbar