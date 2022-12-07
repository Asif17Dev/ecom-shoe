import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-200 py-10">
      <div className="container flex justify-between gap-8 items-center">
        <h4 className="font-bold text-lg text-black">
          Shoe<span className="text-red-500 ">Brand</span>
        </h4>
        <p>contact@shoebrand.com</p>
      </div>
    </div>
  );
};

export default Footer;
