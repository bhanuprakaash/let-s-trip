import React,{useEffect} from "react";
import Hero from "./Hero";
import Features from "./Features";
import TopDestinations from "./TopDestinations";
import HowToStart from "./HowToStart";
import Address from "./Address";

const Home = () => {

  useEffect(()=>{
    document.title = "Let's Trip - Home";
  },[]);

  return (
    <>
      <Hero />
      <Features />
      <TopDestinations />
      <HowToStart />
      <Address />
    </>
  );
};

export default Home;
