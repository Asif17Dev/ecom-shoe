import React from "react";
import Feature from "../components/Feature";

const Features = () => {
  const data = [
    {
      img: "/shoe 1.jpg",
      title: "Flexibility",
      left: false,
      desc: "Soft, flexible soles will allow the walker to push off easly with each step.",
    },
    {
      img: "/shoe 2.jpg",
      title: "Flexibility",
      desc: "Soft, flexible soles will allow the walker to push off easly with each step.",
      left: true,
    },
    {
      img: "/shoe 4.jpg",
      left: false,
      title: "Flexibility",
      desc: "Soft, flexible soles will allow the walker to push off easly with each step.",
    },
  ];
  return (
    <div className="container py-24">
      {data.map((el, index) => (
        <Feature
          key={index}
          img={el.img}
          title={el.title}
          desc={el.desc}
          left={el.left}
          index={index}
        />
      ))}
    </div>
  );
};

export default Features;
