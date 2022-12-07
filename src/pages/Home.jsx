import React from "react";
import Nav from "../components/Nav";
import { motion } from "framer-motion";
import { navVariants, slideIn, staggerContainer } from "../utils/motion";
const Home = () => {
  return (
    <div>
      <div className="hone_img h-screen md:w-1/2 absolute top-0 right-0">
        <img
          src="/shoe 3.jpg"
          alt="shoe"
          className="object-cover object-center h-full w-full"
        />
      </div>
      <div className="home_screen min-h-screen relative flex container">
        <Nav />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="home_cont h-full md:w-1/2 self-center z-10 "
        >
          <motion.h1
            variants={slideIn("left", "tween", 0.25, 1)}
            className="text-5xl md:text-6xl font-bold max-w-3xl mb-6 text-white md:text-black"
          >
            Regain your confidence on the court.
          </motion.h1>
          <motion.p
            variants={slideIn("left", "tween", 0.5, 1)}
            className="text-lg font-light text-white md:text-gray-700"
          >
            A shoe built with purpose and to take your game to the next level.
          </motion.p>
          <motion.svg
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            className="fill-white md:fill-black h-36 mt-6"
            width="16"
            height="132"
            viewBox="0 0 16 132"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.29289 131.707C7.68341 132.098 8.31658 132.098 8.7071 131.707L15.0711 125.343C15.4616 124.953 15.4616 124.319 15.0711 123.929C14.6805 123.538 14.0474 123.538 13.6568 123.929L7.99999 129.586L2.34314 123.929C1.95262 123.538 1.31945 123.538 0.928927 123.929C0.538402 124.319 0.538402 124.953 0.928927 125.343L7.29289 131.707ZM7 -4.37114e-08L6.99999 131L8.99999 131L9 4.37114e-08L7 -4.37114e-08Z"
              fill="black"
            />
          </motion.svg>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
