import React from "react";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
const Nav = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="py-5 flex gap-8 justify-between items-center absolute top-0 left-0 right-0 w-ful"
    >
      <h4 className="font-bold text-lg text-white  md:text-black">
        Shoe<span className="text-white md:text-red-500 ">Brand</span>
      </h4>
      <ul className="flex gap-8 items-center">
        <li>
          <a className="font-medium text-sm text-white " href="#/home">
            HOME
          </a>
        </li>
        <li>
          <a className="font-medium text-sm text-white " href="#/home">
            SNEAKERS
          </a>
        </li>
        <li>
          <a className="font-medium text-sm text-white " href="#/home">
            PLAYERS
          </a>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Nav;
