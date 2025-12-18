import React from 'react'
import Logo from '../../assets/logo.png'
import {GiHamburgerMenu} from 'react-icons/gi'
import { FaSearch } from 'react-icons/fa'
import {motion} from 'framer-motion'

const NavMenu = [
  { id: 1,
    title: "Home",
    link: "#" },
  { id: 2,
    title: "About Us",
    link: "#" },
  { id: 3,
    title: "Services",
    link: "#" },
  { id: 4,
    title: "Contact",
    link: "#" },
]


const Navbar = () => {
  return (
    <main className="py-10 text-white absolute top-0 left-0 w-full
    z-20 pt-10">
      <motion.div className="container"
      initial = {{opacity: 0}}
      whileInView = {{opacity:1}}>
        <div className="flex justify-between items-center">
          {/* Logo Section Here */}
          <div >
            <img src={Logo} alt="" 
            className="w-[80px] grayscale brightness-0 invert"/>
          </div>
          {/* Nav Menu Section */}
          <div className="hidden md:block">
            <ul className="flex gap-4">
              {
              NavMenu.map((menu) => (
                <div key={menu.id} className="inline-block">
                  <a href={menu.link} className="inline-block px-6 py-2 uppercase
                  hover:bg-Primary duration-200 rounded-md hover:shadow-[0px_0px_20px_#d2e6ff]">{menu.title}</a>
                </div>
              ))
              }
            </ul>
          </div>
          {/* Hamburger menu Section */}
          <div className="flex items-center gap-6">
            <div className=" rounded-icons">
              <GiHamburgerMenu className='text-xl' />
            </div>
            <div className=" rounded-icons">
              <FaSearch className='text-xl' />
            </div>
          </div>

        </div>
      </motion.div>
    </main>
  )
}

export default Navbar