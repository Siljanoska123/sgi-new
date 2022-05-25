import React, { useEffect, useState } from "react";
import JsonData from './data/data.json'
import './App.css'
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Mission } from "./components/Mission";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Footer } from "./components/Footer";



export function App() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
     
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Mission data={landingPageData.Mission} />
      <Footer data={landingPageData.Footer}/>

    </div>
  )
}