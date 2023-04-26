import React from "react";
import BreadCrumb from "./components/BreadCrumb";
import ContactAddressArea from "./components/ContactAddressArea";
import ContactMessageArea from "./components/ContactMessageArea";
import Features from "./components/Features";
import Footer from "./components/Footer";
import GoogleMap from "./components/GoogleMap";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import BannerSlider from "./components/BannerSlider";
import Test from "./components/Test";


function App() {
  return (
    <div className="App">
      {/* <Test/> */}
      {/* <Header/> */}
      <Navbar/>
      <BannerSlider/>
      {/* <BreadCrumb/> */}
      <ContactAddressArea/>
      <ContactMessageArea/>
      <GoogleMap/>
      {/* <Features/> */}
      <Footer/>
    </div>
  );
}

export default App;
