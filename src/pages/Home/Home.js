import React from "react";
import { Carousel } from "antd";
import Listcourses from "./ListCourses/Listcourses";
import { useState } from "react";
const contentStyle = {
  height: "600px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

// import slider from '../../assets/img/slider.png'
export default function Home(props) {
  return (
    <div>
      <Carousel style={{marginLeft:'32px',marginRight:'32px'}}>
        <div>
          <img
            src="./img/slider.png"
            className="w-full h-full"
            style={contentStyle}
          />
        </div>
        <div>
          <img
            src="./img/slider2.jpg"
            className="w-full h-full"
            style={contentStyle}
          />
        </div>
        <div>
          <img
            src="./img/slider2.webp"
            className="w-full h-full"
            style={contentStyle}
          />
        </div>
        <div>
          <img
            src="./img/slider3.jpeg"
            className="w-full h-full"
            style={contentStyle}
          />
        </div>
      </Carousel>
      <Listcourses />
    </div>
  );
}
