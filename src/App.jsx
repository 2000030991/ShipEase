import React, { useState } from "react";
import Slider from "react-slick";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaShippingFast, FaEnvelopeOpenText, FaShoppingBag, FaUserCircle } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 

import Image1 from "./assets/Image1.png";
import Image2 from "./assets/Image2.png";
import Image3 from "./assets/Image3.png";

import MailBoxTab1 from "./assets/Mail Box Tab1.png"; 
import MailBoxTab2 from "./assets/Mail Box Tab2.png";
import MailBoxTab3 from "./assets/Mail Box Tab3.png";
import MailBoxTab4 from "./assets/Mail Box Tab4.png";

import PersonalShopperTab1 from "./assets/Personal Shopper Tab1.jpg";
import PersonalShopperTab2 from "./assets/Personal Shopper Tab2.jpg";
import PersonalShopperTab3 from "./assets/Personal Shopper Tab3.jpg";
import PersonalShopperTab4 from "./assets/Personal Shopper Tab4.jpg";

// ✅ New Offer Images
import OfferShipping from "./assets/Shipping 640Rs per Kg.png";
import OfferMails from "./assets/3 Monthly Free Mails.png";
import OfferShopper from "./assets/200Rs per order Personal Shopper offer.png";

import appadaalu from "./assets/Appadaalu.jpg";
import atukulaMixture from "./assets/Atukula Mixture.jpg";
import avisaGinjalaKaaram from "./assets/Avisa Ginjala Kaaram.jpg";
import bellamAavakaayaPickle from "./assets/Bellam Aavakaaya Pickle.jpg";
import biyyamVadiyaalu from "./assets/Biyyam Vadiyaalu.jpg";
import boondiAchhu from "./assets/Boondi Achhu.jpg";
import chekraalu from "./assets/Chekraalu.jpg";
import chickenKheemaPickle from "./assets/Chicken Kheema Pickle.jpg";
import chickenPickleBone from "./assets/Chicken Pickle(Bone).jpg";
import chickenPickleBoneless from "./assets/Chicken Pickle(Boneless).jpg";
import coconutBiscuits from "./assets/Coconut Biscuits.jpg"; 
import dhaniyaPowder from "./assets/Dhaniya Powder.jpg";
import dryFishPickle from "./assets/Dry Fish Pickle.jpg";
import dryFruitLaddu from "./assets/Dry Fruit Laddu.jpg";
import dryPrawnsPickle from "./assets/Dry Prawns Pickle.jpg";
import fishPickleBoneless from "./assets/Fish Pickle Boneless.jpg";
import garamMasalaPowder from "./assets/Garam Masala Powder.jpg";
import ghee from "./assets/Ghee.jpg";
import gingerPickle from "./assets/Ginger Pickle.jpg";
import gonguraChickenPickleBoneless from "./assets/Gongura Chicken Pickle(Boneless).jpg";
import gonguraMuttonPickleBoneless from "./assets/Gongura Mutton Pickle(Boneless).jpg";
import gonguraPanduMirapakaiPickle from "./assets/Gongura Pandu Mirapakai Pickle.jpg";
import gonguraPickle from "./assets/Gongura Pickle.jpg";
import gonguraPrawnsPickleBoneless from "./assets/Gongura Prawns Pickle(Boneless).jpg";
import gummadiVadiyaalu from "./assets/Gummadi Vadiyaalu.jpg";
import honey from "./assets/Honey.jpg";
import idlyKaaram from "./assets/Idly Kaaram.jpg";
import kaakarakaayaPickle from "./assets/Kaakarakaaya Pickle.jpg";
import kaaram from "./assets/Kaaram.jpg";
import kaaraPoosa from "./assets/Kaarapoosa.jpg";
import kandhiKaaram from "./assets/Kandhi Kaaram.jpg";
import karivepaakuKaaram from "./assets/Karivepaaku Kaaram.jpg";
import kobbariKaaram from "./assets/Kobbari Kaaram.jpg";
import kuraKaaram from "./assets/Kura Kaaram.jpg";
import lemonPickle from "./assets/Lemon Pickle.jpg";
import minapaVadiyaalu from "./assets/Minapa Vadiyaalu.jpg";
import mushroomPickle from "./assets/Mushroom Pickle.jpg";
import muttonKheemaPickle from "./assets/Mutton Kheema Pickle.jpg";
import muttonPickleBoneless from "./assets/Mutton Pickle(Boneless).jpg";
import nuvvulaKaaram from "./assets/Nuvvula Kaaram.jpg";
import pallilaKaaram from "./assets/Pallila Kaaram.jpg";
import panduMirapakaiPickle from "./assets/Pandu Mirapakai Pickle.jpg";
import pasupu from "./assets/Pasupu.jpg";
import prawnsPickle from "./assets/Prawns Pickle.jpg";
import proteinLaddu from "./assets/Protein laddu.jpg";
import putnaalaKaaram from "./assets/Putnaala Kaaram.jpg";
import raagiMurukulu from "./assets/Raagi Murukulu.jpg";
import rasamPodi from "./assets/Rasam Podi.jpg";
import royyaPottuPodi from "./assets/Royya Pottu Podi.jpg";
import sagguBiyyamVadiyaalu from "./assets/Saggu Biyyam Vadiyaalu.jpg";
import sambharPodi from "./assets/Sambhar Podi.jpg";
import sunnundalu from "./assets/Sunnundalu.jpg";
import vellulliKaaram from "./assets/Vellulli Kaaram.jpg";

import BgAbout from "./assets/bg-about.png";
import BgOffers from "./assets/bg-offers.png";
import BgServices from "./assets/bg-services.png";
import ShipEasePoster from "./assets/ShipEase Poster.png";
import WhyChooseUs from "./assets/Why Choose US.png"; 

import ShippingImage1 from "./assets/Shipping form image1.png";
import ShippingImage2 from "./assets/Shipping form image2.jpg"; 
import ShippingImage3 from "./assets/Shipping form image3.png";
import ShippingImage4 from "./assets/Shipping form image4.png"; 

function MyFoods() {
  const [cart, setCart] = useState([]);
  const foods = [
    { id: 1, name: "Honey", price: 320, img: honey },
    { id: 2, name: "Appadaalu", price: 110, img: appadaalu },
    { id: 3, name: "Atukula Mixture", price: 200, img: atukulaMixture },
    { id: 4, name: "Avisa Ginjala Kaaram", price: 150, img: avisaGinjalaKaaram },
    { id: 5, name: "Bellam Aavakaaya Pickle", price: 300, img: bellamAavakaayaPickle },
    { id: 6, name: "Biyyam Vadiyaalu", price: 200, img: biyyamVadiyaalu },
    { id: 7, name: "Boondhi Achhu", price: 300, img: boondiAchhu },
    { id: 8, name: "Ghee", price: 900, img: ghee },
    { id: 9, name: "Chicken Kheema Pickle", price: 500, img: chickenKheemaPickle },
    { id: 10, name: "Chicken Pickle(Bone)", price: 500, img: chickenPickleBone },
    { id: 11, name: "Chicken Pickle(Boneless)", price: 600, img: chickenPickleBoneless },
    { id: 12, name: "Coconut Biscuits", price: 300, img: coconutBiscuits },
    { id: 13, name: "Dhaniya Powder", price: 170, img: dhaniyaPowder },
    { id: 14, name: "Dry Fish Pickle", price: 600, img: dryFishPickle },
    { id: 15, name: "Dry Fruit Laddu", price: 600, img: dryFruitLaddu },
    { id: 16, name: "Dry Prawns Pickle", price: 800, img: dryPrawnsPickle },
    { id: 17, name: "Fish Pickle Boneless", price: 1000, img: fishPickleBoneless },
    { id: 18, name: "Garam Masala Powder", price: 350, img: garamMasalaPowder },
    { id: 19, name: "Ginger Pickle", price: 500, img: gingerPickle },
    { id: 20, name: "Gongura Chicken Pickle(Boneless)", price: 900, img: gonguraChickenPickleBoneless },
    { id: 21, name: "Gongura Mutton Pickle(Boneless)", price: 1000, img: gonguraMuttonPickleBoneless },
    { id: 22, name: "Gongura Pandu Mirapakai Pickle", price: 450, img: gonguraPanduMirapakaiPickle },
    { id: 23, name: "Gongura Pickle", price: 400, img: gonguraPickle },
    { id: 24, name: "Gongura Prawns Pickle(Boneless)", price: 1000, img: gonguraPrawnsPickleBoneless },
    { id: 25, name: "Gummadi Vadiyaalu", price: 250, img: gummadiVadiyaalu },
    { id: 26, name: "Protein Laddu", price: 800, img: proteinLaddu },
    { id: 27, name: "Idly Kaaram", price: 200, img: idlyKaaram },
    { id: 28, name: "Kaakarakaaya Pickle", price: 450, img: kaakarakaayaPickle },
    { id: 29, name: "Kandhi Kaaram", price: 250, img: kandhiKaaram },
    { id: 30, name: "Kaaram", price: 300, img: kaaram },
    { id: 31, name: "Kaarapoosa", price: 400, img: kaaraPoosa },
    { id: 32, name: "Chekraalu", price: 400, img: chekraalu },
    { id: 33, name: "Karivepaaku Kaaram", price: 200, img: karivepaakuKaaram },
    { id: 34, name: "Kobbari Kaaram", price: 200, img: kobbariKaaram },
    { id: 35, name: "Kura Kaaram", price: 180, img: kuraKaaram },
    { id: 36, name: "Lemon Pickle", price: 500, img: lemonPickle },
    { id: 37, name: "Minapa Vadiyaalu", price: 200, img: minapaVadiyaalu },
    { id: 38, name: "Mushroom Pickle", price: 800, img: mushroomPickle },
    { id: 39, name: "Mutton Kheema Pickle", price: 1700, img: muttonKheemaPickle },
    { id: 40, name: "Mutton Pickle(Boneless)", price: 2000, img: muttonPickleBoneless },
    { id: 41, name: "Nuvvula Kaaram", price: 200, img: nuvvulaKaaram },
    { id: 42, name: "Pallila Kaaram", price: 200, img: pallilaKaaram },
    { id: 43, name: "Pandu Mirapakai Pickle", price: 600, img: panduMirapakaiPickle },
    { id: 44, name: "Pasupu", price: 90, img: pasupu },
    { id: 45, name: "Prawns Pickle", price: 1200, img: prawnsPickle },
    { id: 46, name: "Putnaala Kaaram", price: 200, img: putnaalaKaaram },
    { id: 47, name: "Raagi Murukulu", price: 500, img: raagiMurukulu },
    { id: 48, name: "Rasam Podi", price: 100, img: rasamPodi },
    { id: 49, name: "Royya Pottu Podi", price: 200, img: royyaPottuPodi },
    { id: 50, name: "Saggu Biyyam Vadiyaalu", price: 200, img: sagguBiyyamVadiyaalu },
    { id: 51, name: "Sambhar Podi", price: 125, img: sambharPodi },
    { id: 52, name: "Sunnundalu", price: 500, img: sunnundalu },
    { id: 53, name: "Vellulli Kaaram", price: 180, img: vellulliKaaram },
  ];

const addToCart = (event, item) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    setCart((prev) => [...prev, item]);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section
      className="my-foods-section"
      onClick={(e) => e.stopPropagation()} // ✅ Block clicks leaking to parent containers
    >
      <h2 className="my-foods-section-title">My Foods</h2>

      <div className="my-foods-grid full-width-grid">
        {foods.map((item) => (
          <div
            key={item.id}
            className="my-foods-card"
            onClick={(e) => e.stopPropagation()} // ✅ Prevent accidental form openings
          >
            <img src={item.img} alt={item.name} draggable="false" />
            <div>
              <h4>{item.name}</h4>
              <p>₹{item.price}</p>
            </div>
            <button
              type="button"
              className="add-to-cart-btn"
              onClick={(e) => addToCart(e, item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="my-foods-cart-summary">
        <h3>Items Added</h3>
        {cart.length === 0 ? (
          <p>No items added yet.</p>
        ) : (
          <ul>
            {cart.map((item, idx) => (
              <li key={idx}>
                {item.name} - ₹{item.price}
              </li>
            ))}
          </ul>
        )}
        <h3>Total Bill: ₹{totalPrice}</h3>
      </div>
    </section> 
  );
} 

export default function App() {
  const [currentView, setCurrentView] = useState("home");
  const [accountTab, setAccountTab] = useState("signup");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); 
   const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: false, 
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Large Mobiles
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Small Mobiles
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


 const slides = [
    { main: Image1, left: Image2, right: Image3 },
    { main: Image2, left: Image1, right: Image3 }, 
    { main: Image3, left: Image2, right: Image1 } 
  ];

  const prohibitedItemsLeft = ["Food and Perishables","Fruits and Vegetables","Raw Rice Flours","Liquids and Semi-liquids","Drugs and Narcotics","Electrical Product","Corpses","Indian Passport","Non-Veg Pickles","Gambling Devices","Firearms","Semi-Precious Items","IATA Restricted Items","Philately Items"];
  const prohibitedItemsRight = ["Radioactive Material","Bullion","Pornographic materials","Medication","Indian Postal Articles","USA Green Card","Lottery Tickets","Ammunition","Precious Items","Cremated Remains","Live Animals","Drugs and Narcotics","Electrical Product","Corpses"];

  const handleSignupSubmit = (e) => { e.preventDefault(); alert("Thank you for signing up!"); setCurrentView("home"); };
  const handleLoginSubmit = (e) => { e.preventDefault(); alert("Logged in successfully!"); setCurrentView("home"); };
  const handleShippingSubmit = (e) => { e.preventDefault(); alert("Shipping details submitted successfully!"); setCurrentView("home"); };
  const handleMailboxSubmit = (e) => { e.preventDefault(); alert("Mail Box details submitted successfully!"); setCurrentView("home"); };
  const handlePersonalShopperSubmit = (e) => { e.preventDefault(); alert("Personal Shopper request submitted successfully!"); setCurrentView("home"); };

  return (
    <>
      {/* ================= NAVBAR ================= */}
<header className="navbar">
  <div className="navbar-top">
    <button
      className="mobile-menu-toggle"
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    >
      {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
    </button>

    <h1 className="logo">ShipEase</h1>

    <button
      onClick={() => {
        setCurrentView("account");
        setIsMobileMenuOpen(false);
      }}
      className={`account-btn ${currentView === "account" ? "active" : ""}`}
      type="button"
    >
      <FaUserCircle />
      Account
    </button>
  </div>

        {/* Navigation Menu */}
        <nav
          className={`nav-links ${isMobileMenuOpen ? "show" : ""}`}
          style={{
            display:
              currentView === "account"
                ? "none"
                : isMobileMenuOpen
                ? "flex"
                : "",
          }}
        >
          <ul className="navbar-links">
            {/* Normal Links */}
            <li>
              <a
                href="#"
                onClick={() => {
                  setCurrentView("home");
                  setIsMobileMenuOpen(false);
                }}
                className={currentView === "home" ? "active" : ""}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  setCurrentView("shipping");
                  setIsMobileMenuOpen(false);
                }}
                className={currentView === "shipping" ? "active" : ""}
              >
                Shipping
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  setCurrentView("mailbox");
                  setIsMobileMenuOpen(false);
                }}
                className={currentView === "mailbox" ? "active" : ""}
              >
                Mail Box
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  setCurrentView("personalShopper");
                  setIsMobileMenuOpen(false);
                }}
                className={currentView === "personalShopper" ? "active" : ""}
              >
                Personal Shopper
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  setCurrentView("myFoods");
                  setIsMobileMenuOpen(false);
                }}
                className={currentView === "myFoods" ? "active" : ""}
              >
                My Foods
              </a>
            </li> 

            {/* ✅ E-commerce Links */}
            <li><a href="https://www.amazon.in" target="_blank" rel="noreferrer">Amazon</a></li>
            <li><a href="https://www.flipkart.com" target="_blank" rel="noreferrer">Flipkart</a></li>
            <li><a href="https://www.myntra.com" target="_blank" rel="noreferrer">Myntra</a></li>
            <li><a href="https://www.meesho.com" target="_blank" rel="noreferrer">Meesho</a></li>
            <li><a href="https://www.nykaa.com" target="_blank" rel="noreferrer">Nykaa</a></li>
            <li><a href="https://www.ajio.com" target="_blank" rel="noreferrer">Ajio</a></li>
          </ul>
        </nav>
      </header>


   {/* HOME */}
      {currentView === "home" && (
        <>
          {/* Carousel */}
          <section className="carousel-section">
            <Slider {...sliderSettings}>
              {slides.map(({ main, left, right }, index) => (
                <div key={index} className="slide-container">
                  <div className="side-card left-card"><img src={left} alt="Left slidebar" /></div>
                  <div className="slide" style={{ backgroundImage: `url(${main})` }}>
                    {index === 2 && (
                      <div className="slide-content">
                        <h1>Your Personal Shopper</h1>
                        <p>Shop from any Indian store and get it delivered to your doorstep.</p>
                      </div>
                    )}
                  </div>
                  <div className="side-card right-card"><img src={right} alt="Right slidebar" /></div>
                </div>
              ))}
            </Slider>
          </section>

{/* Intro */}
<section
  className="intro-section fade-in"
  style={{
    display: "flex",
    alignItems: "center",
    padding: "40px 20px",
    maxWidth: "1100px",
    margin: "40px auto",
    gap: "40px",
    flexWrap: "wrap",
    background: "white",
    borderRadius: "12px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
    color: "#023e8a",
  }}
> 
  <div style={{ flex: "1 1 450px", minWidth: "300px" }}>
    <h2 style={{ color: "#0077b6", marginBottom: "20px" }}>
      Shopping in India is Made EASY for the World
    </h2>
    <p>
      Welcome to <strong>ShipEase</strong>, where the vibrant spirit of India meets the
      world through seamless global shopping. <strong>Ship more, Save more!</strong>
    </p>
    <ul style={{ paddingLeft: "20px", lineHeight: "1.8", marginTop: "15px" }}>
      <li>Get your own virtual Indian address by just signing in.</li>
      <li>Minimal shipping cost compared to all other websites.</li>
      <li>Explore a diverse selection of Indian products.</li>
      <li>All the services you want are available in one place.</li>
      <li>Benefit from personal shopper services at Hyderabad.</li>
      <li>Enjoy convenient pickup from Hyderabad and worldwide delivery options.</li>
      <li>Ensure secure and trustworthy online transactions.</li>
      <li>Track your purchases in real-time for added peace of mind.</li>
      <li>Access competitive pricing for affordable Indian shopping.</li>
      <li>Experience a customer-centric approach to satisfaction.</li>
      <li>Break down international shopping barriers with ShipEase.</li>
    </ul>
  </div>

  <div
    style={{
      flex: "1 1 400px",
      minWidth: "280px",
      textAlign: "center",
    }}
  >
    <img
      src={ShipEasePoster}
      alt="Shopping in India Made Easy"
      style={{
        width: "100%",
        height: "auto",
        borderRadius: "12px",
        boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
      }}
    />
  </div>
</section>
 

          {/* Offers */}
          <section className="offers slide-up">
  <h2>Offers & Deals</h2>
  <div className="offers-cards">
    <div className="offer-card">
      <FaShippingFast className="offer-icon" />
      <img src={OfferShipping} alt="Shipping Offer" />
      <p>Shipping ₹640/kg</p>
    </div>
    <div className="offer-card">
      <FaEnvelopeOpenText className="offer-icon" />
      <img src={OfferMails} alt="Free Mails Offer" />
      <p>3 Monthly Free Shipping</p> 
    </div>
    <div className="offer-card">
      <FaShoppingBag className="offer-icon" />
      <img src={OfferShopper} alt="Personal Shopper Offer" />
      <p>₹200/order Personal Shopper</p>
    </div>
  </div>
</section> 

{/* How it works */}
<section className="how-it-works zoom-in">
  <h2>How It Works</h2>
  <div className="steps">
    <div>
      <h3>Get Your Indian Address</h3>
      <ul>
        <li>Sign up for <strong>ShipEase</strong> in minutes.</li>
        <li>Instantly get your <strong>unique Indian mailbox address</strong>.</li>
        <li>Use this address while shopping from any Indian store or marketplace.</li>
      </ul>
    </div>

    <div>
      <h3>Personal Shopper Assistance</h3>
      <ul>
        <li>Can't buy directly from Indian websites? We’ve got you covered.</li>
        <li>Our <strong>Personal Shopper</strong> helps you purchase items from any Indian store.</li>
        <li>Your products are delivered directly to your ShipEase Address.</li>
      </ul>
    </div>

    <div>
      <h3>Fast & Reliable Shipping</h3>
      <ul>
        <li>We carefully pack and consolidate your shipments.</li>
        <li><strong>Ship them to your doorstep worldwide</strong> at the best rates.</li>
        <li>Track your package in real-time until it arrives safely!</li>
      </ul>
    </div>
  </div>
</section>

{/* Why choose us */}
<section
  className="why-choose-us"
  style={{
    backgroundColor: "#ffffff", // 🔹 White Background
    padding: "40px 20px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "12px",
    boxShadow: "0 5px 25px rgba(0, 0, 0, 0.2)", // Softer shadow for a bright background
  }}
>
  <img
    src={WhyChooseUs}
    alt="Why Choose Us"
    style={{
      maxWidth: "1000px",
      width: "100%",
      height: "auto",
      borderRadius: "12px",
      boxShadow: "0 5px 15px rgba(0,0,0,0.2)", // Matches sky-blue theme
      display: "block",
    }}
  />
</section> 

          {/* About */}
          <section className="about fade-in">
            <h2>About Us</h2>
            <p>ShipEase helps you shop from India and get your products delivered worldwide. From shipping to personal shopping, we’ve got you covered.</p>
          </section>

{/* ===== New Promotional Section ===== */}
      <section className="promo-section">
        <h2>Delivering joy to your doorstep</h2>
        <p>
          Sign-up and start shipping from India to your doorstep across the globe.
          Sign-up now for free and earn benefits.
        </p> 
      </section>  

{/* ================= SHIPEASE INTRO SECTION ================= */}
<section
  className="shipease-intro"
  style={{
    backgroundColor: "#ffffff",
    padding: "40px 20px",
    textAlign: "center",
    margin: "40px auto",
    borderRadius: "12px",
    boxShadow: "0 5px 25px rgba(0, 0, 0, 0.15)",
    maxWidth: "1100px",
  }}
>
  <h2 style={{ color: "#003366", fontSize: "2rem", marginBottom: "15px" }}>
    Shop from India without second thoughts — <strong>ShipEase</strong> delivers worldwide! 🌎
  </h2>

  <p
    style={{
      color: "#222",
      fontSize: "1.1rem",
      maxWidth: "850px",
      margin: "0 auto 25px auto",
      lineHeight: "1.6",
    }}
  > 
    At <strong>ShipEase</strong>, we make shopping from your favorite Indian stores completely hassle-free!
    Now, you can shop online from India and ship your packages directly to the
    <strong> USA, UK, Dubai, Australia, Canada, and Qatar </strong> — with fast delivery,
    affordable rates, and a smooth experience you’ll love.
  </p>

  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
      marginTop: "30px",
    }}
  >
    {/* Shipping Card */}
    <div
      style={{
        background: "#fff",
        padding: "30px 20px",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        flex: "1 1 300px",
        maxWidth: "320px",
        textAlign: "center",
      }}
    >
      <FaShippingFast style={{ fontSize: "36px", color: "#0077b6", marginBottom: "15px" }} />
      <h3 style={{ color: "#0077b6", fontSize: "1.3rem", marginBottom: "10px" }}>Shipping</h3>
      <p style={{ color: "#222", fontSize: "1rem", marginBottom: "8px" }}>
        Fast delivery at ₹640/kg worldwide.
      </p>
      <small style={{ color: "#0077b6", fontSize: "0.95rem" }}>
        Affordable global shipping with real-time tracking, safe packaging & express delivery options.
      </small>
    </div>

    {/* Mail Box Card */}
    <div
      style={{
        background: "#fff",
        padding: "30px 20px",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        flex: "1 1 300px",
        maxWidth: "320px",
        textAlign: "center",
      }}
    >
      <FaEnvelopeOpenText style={{ fontSize: "36px", color: "#0077b6", marginBottom: "15px" }} />
      <h3 style={{ color: "#0077b6", fontSize: "1.3rem", marginBottom: "10px" }}>Mail Box</h3>
      <p style={{ color: "#222", fontSize: "1rem", marginBottom: "8px" }}>
        Order from e-commerce and Indian stores.
      </p>
      <small style={{ color: "#0077b6", fontSize: "0.95rem" }}>
        Get your own Indian virtual address to receive orders from Amazon, Flipkart & any local store.
      </small>
    </div>

    {/* Personal Shopper Card */}
    <div
      style={{
        background: "#fff",
        padding: "30px 20px",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        flex: "1 1 300px",
        maxWidth: "320px",
        textAlign: "center",
      }}
    >
      <FaShoppingBag style={{ fontSize: "36px", color: "#0077b6", marginBottom: "15px" }} />
      <h3 style={{ color: "#0077b6", fontSize: "1.3rem", marginBottom: "10px" }}>Personal Shopper</h3>
      <p style={{ color: "#222", fontSize: "1rem", marginBottom: "8px" }}>
        Shop from any Indian store through your own shopper.
      </p>
      <small style={{ color: "#0077b6", fontSize: "0.95rem" }}>
        Can't shop yourself? Our personal shoppers will buy, pack & ship items on your behalf!
      </small>
    </div>
  </div>
</section>

{/* Prohibited */}
<section
  className="prohibited fade-in"
  style={{
    backgroundColor: "#ffffff", // ✅ White background to match About Us
    padding: "30px",
    marginTop: "30px",
    borderRadius: "16px", // ✅ Same rounded corners as About Us
    maxWidth: "1050px", // ✅ Matches About Us width
    marginLeft: "auto",
    marginRight: "auto",
    boxShadow: "0 6px 25px rgba(0, 0, 0, 0.18)", // ✅ Same shadow as About Us
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <h2
    style={{
      color: "#d00000", // ✅ Red heading for warning
      marginBottom: "15px",
      fontSize: "2.2rem",
      fontWeight: "700",
    }}
  >
    🚫 Prohibited Items for Shipping
  </h2>

  <p
    style={{
      fontSize: "1rem",
      color: "#023e8a",
      fontWeight: "600",
      marginBottom: "20px",
      maxWidth: "850px",
    }}
  >
    The following items cannot be shipped through our service:
  </p>

  {/* Prohibited Lists */}
  <div
    className="prohibited-lists"
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)", // ✅ Two-column layout
      gap: "20px 40px",
      width: "100%",
      maxWidth: "900px",
      textAlign: "left",
    }}
  >
    <ul style={{ color: "#333", fontWeight: "600", lineHeight: "1.6", paddingLeft: "20px" }}>
      {prohibitedItemsLeft.map((item, index) => (
        <li key={index} style={{ marginBottom: "8px" }}>{item}</li>
      ))}
    </ul>

    <ul style={{ color: "#333", fontWeight: "600", lineHeight: "1.6", paddingLeft: "20px" }}>
      {prohibitedItemsRight.map((item, index) => (
        <li key={index} style={{ marginBottom: "8px" }}>{item}</li>
      ))}
    </ul>
  </div>
</section>

{/* Highlights */}
<section className="image-gallery fade-in">
  <h2>Our Highlights</h2>
  <div className="image-card-grid">
    {[BgAbout, BgOffers, BgServices, Image1, Image2, Image3].map((img, index) => (
      <div className="image-card" key={index}>
        <img src={img} alt={`Gallery ${index + 1}`} />
      </div>
    ))}
  </div>
</section>

          {/* Footer */}
          <footer className="footer">
            <p>© 2025 ShipEase. All rights reserved. | CTC</p>
          </footer>
        </>
      )}

  {/* ================= ACCOUNT SECTION ================= */}
      {currentView === "account" && (
        <section
          style={{
            maxWidth: "460px",
            margin: "30px auto",
            padding: "20px",
            background: "white",
            borderRadius: "12px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            color: "#023e8a",
          }}
        >
          <div style={{ display: "flex", gap: "10px", marginBottom: "18px" }}>
            <button
              type="button"
              onClick={() => setAccountTab("signup")}
              style={{
                flex: 1,
                padding: "10px",
                borderRadius: "8px",
                border:
                  accountTab === "signup"
                    ? "2px solid #0077b6"
                    : "1px solid #ddd",
                background:
                  accountTab === "signup" ? "#e6f7ff" : "white",
                cursor: "pointer",
              }}
            >
              Sign Up
            </button>
            <button
              type="button"
              onClick={() => setAccountTab("login")}
              style={{
                flex: 1,
                padding: "10px",
                borderRadius: "8px",
                border:
                  accountTab === "login"
                    ? "2px solid #0077b6"
                    : "1px solid #ddd",
                background:
                  accountTab === "login" ? "#e6f7ff" : "white",
                cursor: "pointer",
              }}
            >
              Login
            </button>
          </div>

          {accountTab === "signup" && (
            <>
              <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
                Create Account
              </h2>
              <form onSubmit={handleSignupSubmit}>
                <label>Name*</label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  style={inputStyle}
                />
                <label>Email*</label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  style={inputStyle}
                />
                <label>Password*</label>
                <input
                  type="password"
                  required
                  placeholder="Enter a secure password"
                  style={inputStyle}
                />
                <label>Contact Number*</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 9876543210"
                  style={inputStyle}
                />
                <label>Address*</label>
                <textarea
                  required
                  placeholder="Your shipping address"
                  rows={3}
                  style={inputStyle}
                ></textarea>
                <button type="submit" style={buttonStyle}>
                  Submit
                </button>
              </form>
            </>
          )}

          {accountTab === "login" && (
            <>
              <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
                Login
              </h2>
              <form onSubmit={handleLoginSubmit}>
                <label>Email*</label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  style={inputStyle}
                />
                <label>Password*</label> 
                <input
                  type="password"
                  required
                  placeholder="Your password"
                  style={inputStyle}
                />
                <button type="submit" style={buttonStyle}>
                  Login
                </button>
              </form>
            </>
          )} 
        </section>  
      )}

     {/* SHIPPING */}
{currentView === "shipping" && (
  <section className="shipping-section">
    {/* Left column */}
    <div className="shipping-side left-side">
      <div className="shipping-card float-1">
        <img src={ShippingImage1} alt="Shipping 1" />
      </div>
      <div className="shipping-card float-2">
        <img src={ShippingImage2} alt="Shipping 2" />
      </div>
    </div>

    {/* Center form */}
    <div className="shipping-form-container">
      <h2>Shipping Form</h2>
      <form onSubmit={handleShippingSubmit}>
        <h3>Receiver Details</h3>
        <label>Receiver Name*</label>
        <input type="text" required placeholder="Receiver's full name" style={inputStyle} />
        <label>Receiver Address*</label>
        <textarea required placeholder="Receiver's address" rows={3} style={inputStyle}></textarea>
        <label>Receiver Contact*</label>
        <input type="tel" required placeholder="+91 9876543210" style={inputStyle} />

        <h3 style={{ marginTop: "20px" }}>Sender Details</h3>
        <label>Sender Name*</label>
        <input type="text" required placeholder="Sender's full name" style={inputStyle} />
        <label>Sender Address*</label>
        <textarea required placeholder="Sender's address" rows={3} style={inputStyle}></textarea>
        <label>Sender Contact*</label>
        <input type="tel" required placeholder="+91 9876543210" style={inputStyle} />

        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </div>

    {/* Right column */}
    <div className="shipping-side right-side">
      <div className="shipping-card float-3">
        <img src={ShippingImage3} alt="Shipping 3" />
      </div>
      <div className="shipping-card float-4">
        <img src={ShippingImage4} alt="Shipping 4" />
      </div>
    </div>
  </section>
)}

    {/* MAILBOX */}
{currentView === "mailbox" && (
  <section className="shipping-section">
    {/* Left floating images */}
    <div className="shipping-side">
      <div className="shipping-card float-1">
        <img src={MailBoxTab1} alt="MailBox1" />
      </div>
      <div className="shipping-card float-2">
        <img src={MailBoxTab2} alt="MailBox2" />
      </div>
    </div>

    {/* Center form */}
    <div className="shipping-form-container">
      <h2>Mail Box Form</h2>
      <form onSubmit={handleMailboxSubmit} className="form-box">
        <input style={inputStyle} type="text" placeholder="Full Name" required />
        <input style={inputStyle} type="email" placeholder="Email" required />
        <input style={inputStyle} type="text" placeholder="Address" required />
        <button type="submit" style={buttonStyle}>
          <FaEnvelopeOpenText style={{ marginRight: "6px" }} /> Submit
        </button>
      </form>
    </div>

    {/* Right floating images */}
    <div className="shipping-side">
      <div className="shipping-card float-3">
        <img src={MailBoxTab3} alt="MailBox3" />
      </div>
      <div className="shipping-card float-4">
        <img src={MailBoxTab4} alt="MailBox4" />
      </div>
    </div>
  </section>
)}


 {/* PERSONAL SHOPPER */}
{currentView === "personalShopper" && (
  <section className="shipping-section">
    {/* Left floating images */}
    <div className="shipping-side">
      <div className="shipping-card float-3">
        <img src={PersonalShopperTab3} alt="Personal Shopper 3" />
      </div>
      <div className="shipping-card float-1">
        <img src={PersonalShopperTab1} alt="Personal Shopper 1" />
      </div>
    </div>

{/* Center form */}
<div className="shipping-form-container">
  <h2>Personal Shopper Form</h2>
  <form onSubmit={handlePersonalShopperSubmit} className="form-box">
    <input style={inputStyle} type="text" placeholder="Full Name" required />
    <input style={inputStyle} type="email" placeholder="Email" required />
    <input style={inputStyle} type="tel" placeholder="Phone Number" required />
    <input style={inputStyle} type="text" placeholder="Delivery Address" required />
    
    <textarea
      style={{ ...inputStyle, height: "100px", resize: "vertical" }}
      placeholder="Item Details (e.g., brand, size, color, etc.)"
      required
    ></textarea>

    <input style={inputStyle} type="text" placeholder="Budget Range (e.g., ₹2000 - ₹5000)" />
    <input style={inputStyle} type="text" placeholder="Preferred Store (optional)" />
    <input style={inputStyle} type="text" placeholder="Preferred Delivery Date" />

    <button type="submit" style={buttonStyle}>
      <FaShoppingBag style={{ marginRight: "6px" }} /> Submit Request
    </button>
  </form>
</div>


    {/* Right floating images */}
    <div className="shipping-side">
      <div className="shipping-card float-2">
        <img src={PersonalShopperTab2} alt="Personal Shopper 2" />
      </div>
      <div className="shipping-card float-4">
        <img src={PersonalShopperTab4} alt="Personal Shopper 4" />
      </div>
    </div>
  </section>
)}


      {/* MY FOODS */}
      {currentView === "myFoods" && <MyFoods />}
    </>
  );
}
 
const inputStyle = {
  width: "100%",
  padding: "8px 10px",
  margin: "6px 0 15px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "1rem",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#0077b6",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "1.1rem",
  cursor: "pointer",
};






