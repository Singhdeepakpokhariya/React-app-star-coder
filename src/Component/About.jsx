import React from "react";
import web from "../image/s5.png"
import Common from "./Common";

const About = () => {
  return (
    <div>
     <Common name="Welcome to the About page" 
     imgsrc={web} 
     visit="/contact" 
     btname="Contact Now"
     />
    </div>
  );
};

export default About;
