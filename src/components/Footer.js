import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="books">
        <h3>انواع کتابها</h3>
        <p>الکترونیک</p>
        <p>صوتی</p>
        <p>ایرانی</p>
        <p>انگلیسی</p>
      </div>
      <div className="about-us">
        <h3>تماس ما</h3>
        <p>آدرس : تهران پاسداران</p>
        <p>شماره تماس :0912111111</p>
        <p>ایمیل: bookonline@gmail.com</p>
      </div>
      <div className="social">
        <FaInstagram />
        <FaLinkedin />
        <FaTwitter />
        <FaWhatsapp />
      </div>
    </div>
  );
};

export default Footer;
