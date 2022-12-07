import React from "react";
import { motion } from "framer-motion";
import { slideIn, staggerContainer } from "../utils/motion";

function Feature({
  img = "/shoe 1.jpg",
  title = "title",
  desc = "description",
  left,
  index,
}) {
  return (
    <motion.div
      variants={staggerContainer}
      viewport={{ once: false, amount: 0.25 }}
      initial="hidden"
      whileInView="show"
      className={`feature_wrap min-h-[350x] flex flex-col  py-14 gap-20 ${
        left ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <motion.div
        variants={slideIn(left ? "right" : "left", "tween", 0.25, 1)}
        initial="hidden"
        whileInView="show"
        className={`self-center flex-1 text-left ${
          left ? "md:text-left" : "md:text-right"
        }`}
      >
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p
          className={`text-gray-600 md:w-1/2 mr-auto ${
            left ? "md:mr-auto" : "md:ml-auto md:mr-0"
          }`}
        >
          {desc}
        </p>
      </motion.div>
      <motion.div
        variants={slideIn(left ? "left" : "right", "tween", 0.25, 1)}
        initial="hidden"
        whileInView="show"
        className="max-h-[280px] w-full flex-1 overflow-hidden"
      >
        <img src={img} alt={title} className="w-full h-full object-cover " />
      </motion.div>
    </motion.div>
  );
}

export default Feature;
