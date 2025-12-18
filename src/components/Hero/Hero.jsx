import React from 'react'
import CarPng from '../../assets/CarPng.png'
import BuildingImage from '../../assets/BUILDING.jpeg'
import { FaArrowRight } from 'react-icons/fa'
import Navbar from '../Navbar/Navbar.jsx'
import {motion, scale, spring} from 'framer-motion'

const bgImage ={
  backgroundImage: `url(${BuildingImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
}

const Hero = () => {
  return (
    <main style={bgImage} >
      <div className="bg-gradient-to-r from-Primary to
      bg-PrimaryDark/90">
        <div className="container text-white">
          {/* Navbar components here */}
            <Navbar />
          {/* Hero section here */}
          <section className="grid grid-cols-1
          md:grid-cols-2 place-items-center min-h-[800px]">
            {/* text content section */}
            <div className="space-y-8 mt-[100px] md:mt-[20px]">
              <motion.h1
              initial = {{opacity: 0, y:-100}}
              whileInView = {{opacity:1, y:0}}
              transition={{
                type: spring,
                stiffness: 10,
                delay: 1,
                duration: 0.4,
              }} 
              className="text-5xl lg:text-7xl
              font-bold leading-tight uppercase">
                Honda <br /> 
                <span className="text-transparent
                text-outline">
                  Sports EV
                </span> 
              </motion.h1>
              <motion.button
              initial = {{opacity: 0, y:-100}}
              whileInView = {{opacity:1, y:0}}
              transition={{
                type: spring,
                stiffness: 10,
                delay: 1.2,
                duration: 0.4,
              }}  
              className="outlineBtn flex justify-center items-center
              gap-4 group">
                Explore
                <FaArrowRight className="group-hover:translate-x-2
                transition-all duration-300" />
              </motion.button>
              {/* features section here */}
              <motion.div
              initial = {{opacity: 0, y:100}}
              whileInView = {{opacity:1, y:0}}
              transition={{
                type: spring,
                stiffness: 10,
                delay: 1.2,
                duration: 0.4,
              }}   
              className="bg-black/40 p-6 space-y-4 lg:max-w-[400px]
              !mt:[60px]">
                <h1 className="text-xl uppercase">Vehicle Features</h1>
                <p className="text-xs leading-loose">
                  - 0-100 km/h in 3.5 seconds <br />
                  - Top speed of 250 km/h <br />
                  - Range of 400 km on a single charge <br />
                  - Advanced regenerative braking system <br />
                  - Cutting-edge autonomous driving capabilities <br />
                  - Luxurious interior with state-of-the-art infotainment system
                </p>
              </motion.div>
            </div>
            {/* image content section */}
            <div className='relative'>
              <motion.img src={CarPng} alt=""
              className="w-full relative z-30"
              initial = {{opacity: 0, x:300}}
              whileInView = {{opacity:1, x:0, scale: 1.2}}
              transition={{
                duration: 1,
              }}
              />

              {/* glowing circle */}
              <motion.div className="border-[20px] border-cyan-200 rounded-full 
              h-[180px] w-[180px] md:h-[300px] md:w-[300px] absolute 
              top-0 left-1/2 glowing-shadow"
              initial = {{opacity: 0, scale:0.2}}
              whileInView = {{opacity:1, scale:1}}
              transition={{
                type: spring,
                stiffness: 10,
                delay: 0.8,
                duration: 0.8
              }}  >
              </motion.div>

              {/* Bg text here */}
              <motion.div className="absolute -top-40 
              left-0 z-[1]"
              initial = {{opacity: 0, x:-100}}
              whileInView = {{opacity:1, x:0}}
              transition={{
                type: spring,
                stiffness: 10,
                delay: 0.8,
                duration: 0.4,
              }}  >
                <h1 className="text-[180px] scale-150
                font-bold text-cyan-200/10 leading-none"> 
                  {" "}
                  Sport
                </h1>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default Hero