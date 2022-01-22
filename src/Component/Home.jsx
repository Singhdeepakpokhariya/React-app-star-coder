import React from "react";
import web from "../image/img2.png"
import Common from "./Common";


const Home = () => {
  return (
    <>
    <Common  name="Grow your business with" 
     imgsrc={web} 
     visit="/service" 
     btname="Get started" />
    </>
  );
};

export default Home;
