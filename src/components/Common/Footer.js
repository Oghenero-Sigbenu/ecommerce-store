import React from "react";
import "./css/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebook, faInstagram, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
const Footer = ({hide}) => {
  return (
    <div className={`footer ${hide ? "half-height": "height"}`}>
          <div className={`bg ${hide ? "half-height": "full-height"}`}></div>
      <div className="text">
        {hide ? "no love" :
        <>
        <div className="text1">
          <p>FRESHY is Nigeria’s number one healthy
             food chain, providing fresh, yummy, delicious, nutrient-rich
              healthy meals and committed to promoting a healthy 
              lifestyle. FRESHY IS BEST and that is how we win every day,
               selling a wide range of fresh salads, 60%juices, smoothies, parfait,
                sandwich and other quick on the go healthy meals.</p>
        </div>
        <div className="flex2 newsletter">
              <p><strong><FontAwesomeIcon icon={faEnvelopeOpen} /> Newsletter</strong></p>
              <p>Signup for FRESHY tips, news and updates.</p>
          <div>
            <div className="subscribe">
              <input type="email" name="email" required/>
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        </>}
        <div className="">
          <ul className="flex2 menu">
            <li>Home</li>
            <li>Return Policy</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Blog</li>
          </ul>
          <ul className="flex2 menu">
            <li><FontAwesomeIcon icon={faFacebook} /> </li>
            <li><FontAwesomeIcon icon={faInstagram} /> </li>
            <li><FontAwesomeIcon icon={faTwitter} /> </li>
            <li><FontAwesomeIcon icon={faWhatsapp } /> </li>
          </ul>
          <p>FRESHY Market © 2020.</p>
        </div>
        </div>
    </div>
  )
}

export default Footer;
