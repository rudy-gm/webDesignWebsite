import "./contact.css";
import React from "react";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo cumque
        magnam, impedit illum quasi ea quibusdam velit veniam nostrum dolore
        sapiente reiciendis, adipisci exercitationem quis accusamus non debitis
        repellat. Quam!
      </Header>
      <section className="contact">
        <div className="container contact_container">
          <div className="contact_wrapper">
            <a
              href="mailto:hello@illustratumwebdesign.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <MdEmail></MdEmail>
            </a>
            <a
              href="/facebooklink"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsMessenger></BsMessenger>
            </a>
            <a
              href="/wslink"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IoLogoWhatsapp></IoLogoWhatsapp>
            </a>

          </div>
        </div>
      </section>
    </>
  );
};

export default contact;
