import React from 'react'
import "./Footer.css"
import { FaInstagram, FaNewspaper } from 'react-icons/fa'
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="left">
          <div className="news-logo">
            <FaNewspaper className='news-logo-image' />
            <h1 className="news-heading">News Today</h1>
          </div>
          <div className="social-media-icons">
            <FaFacebook className='icon facebook-icon' />
            <FaWhatsapp className='icon whatsapp-icon' />
            <FaXTwitter className='icon xtwitter-icon' />
            <IoLogoInstagram className='icon instagram-icon' />
            <IoLogoYoutube className='icon youtube-icon' />
            <CgMail className='icon gmail-icon' />
          </div>
        </div>
        <div className="right">
          <ul className="categories">
            <h2 className="footer-right-heading">Categories</h2>
            <li>Ap Politics News</li>
            <li>Telangana Politics News</li>
            <li>Andhra Pradhesh News</li>
            <li>Cricket News</li>
            <li>Crime News</li>
            <li>Hyderabad News</li>
            <li>International News</li>
            <li>Sports News</li>
          </ul>
          <ul className="company">
            <h2 className="footer-right-heading">Company</h2>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Terms And Conditions</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <hr />
        <div className="footer-bottom-body">
        <p className="copyrights">
        © 2024, Emery Telcom. All rights reserved.
        </p>
        <p className="policies">
        NewsLetter News Policies
        </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
