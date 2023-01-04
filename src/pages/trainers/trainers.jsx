import "./trainers.css";
import React from "react";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_5.jpg";
import { trainers } from "../../data";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Trainer from "../../components/Trainer";

const Trainers = () => {
  return (
    <>
      <Header title="Our Trainers" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo amet
        rerum assumenda perferendis mollitia ipsum alias nemo velit, eum, vel
        voluptatum sequi accusantium laborum dolor! Soluta quasi sunt voluptatem
        explicabo?
      </Header>
      <section className="trainers">
        <div className="container trainers_container">
          {trainers.map(({ id, image, name, job, socials }) => {
            return (
              <Trainer key={id} image={image} name={name} job={job}
                socials={
                  [
                    {icon: <BsInstagram></BsInstagram>, link: socials[0]},
                    {icon: <AiOutlineTwitter></AiOutlineTwitter>, link: socials[1]},
                    {icon: <FaFacebookF></FaFacebookF>, link: socials[2]},
                    {icon: <FaLinkedinIn></FaLinkedinIn>, link: socials[3]},
                  ]
                }
              ></Trainer>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Trainers;
