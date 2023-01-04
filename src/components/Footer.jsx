import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="container footer_container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="Footer Logo" />
          </Link>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
            fugiat nostrum cumque, consectetur perspiciatis perferendis,
            nesciunt obcaecati hic blanditiis voluptatibus impedit. Aspernatur
            eos molestiae quod natus, commodi architecto accusantium possimus.
          </p>
          <div className="footer_socials">
            <a
              href="linkedin account"
              target="_blank"
              rel="noreferrer noopeneer"
            >
              <FaLinkedin></FaLinkedin>
            </a>
            <a
              href="facebook account"
              target="_blank"
              rel="noreferrer noopeneer"
            >
              <FaFacebook></FaFacebook>
            </a>
            <a
              href="twitter account"
              target="_blank"
              rel="noreferrer noopeneer"
            >
              <AiOutlineTwitter></AiOutlineTwitter>
            </a>
            <a
              href="Instagram account"
              target="_blank"
              rel="noreferrer noopeneer"
            >
              <AiFillInstagram></AiFillInstagram>
            </a>
          </div>
        </article>

        <article>
          <h4>Permalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </article>

        <article>
          <h4>Insights</h4>
          <Link to="/">Blog</Link>
          <Link to="/">Case Studies</Link>
          <Link to="/">Events</Link>
          <Link to="/">Communities</Link>
          <Link to="/">FAQs</Link>
        </article>

        <article>
          <h4>Get In Tocuh</h4>
          <Link to="/contact">Contact Us</Link>
          <Link to="/s">Support</Link>
        </article>
      </div>
      <div className="footer_copyright">
        <small>
          2023 Illustratum LLC &copy; All Rights Reserved <br></br> We did our
          own website duh
        </small>
      </div>
    </footer>
  );
};

export default Footer;
