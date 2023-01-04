import React from "react";
import Header from "../../components/Header";
import "./about.css";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from '../../images/about2.jpg';
import MissionImage from '../../images/about3.jpg';

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui facilis
        unde, dolores aliquid similique ab vero nihil odio totam magnam
        cupiditate quasi et at voluptate reprehenderit quo rem? Molestias,
        perferendis!
      </Header>

      <section className="about_story">
        <div className="container about_story-container">
          <div className="about_section-image">
            <img src={StoryImage} alt="Our Story" />
          </div>
          <div className="about_section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
              officia nobis natus tenetur exercitationem error, ab, quidem eius
              harum culpa totam nam magni aliquid maxime cumque vitae et quam
              earum?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              ullam, voluptates ratione reprehenderit, debitis odio soluta quam
              culpa alias quod consequatur voluptatibus necessitatibus vitae
              fugit at est blanditiis perspiciatis. Officiis?
            </p>
            <p>
              cnwjhuiyycbuiwhcuh ucishubei dhuw cuhde ygu wh iu hge fyuhuw gyuhdeuiguywhufegfyhu9wfgwyuefhu9h
              hwefhywgfywe 
            </p>
          </div>
        </div>
      </section>

      <section className="about_vision">
        <div className="container about_vision-container">
          <div className="about_section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
              officia nobis natus tenetur exercitationem error, ab, quidem eius
              harum culpa totam nam magni aliquid maxime cumque vitae et quam
              earum?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              ullam, voluptates ratione reprehenderit, debitis odio soluta quam
              culpa alias quod consequatur voluptatibus necessitatibus vitae
              fugit at est blanditiis perspiciatis. Officiis?
            </p>
  
          </div>

          <div className="about_section-image">
            <img src={VisionImage } alt="Our Vision" />
          </div> 
        </div>
      </section>


      <section className="about_mission">
        <div className="container about_mission-container">
          <div className="about_section-image">
            <img src={MissionImage} alt="Our Mission" />
          </div>
          <div className="about_section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
              officia nobis natus tenetur exercitationem error, ab, quidem eius
              harum culpa totam nam magni aliquid maxime cumque vitae et quam
              earum?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              ullam, voluptates ratione reprehenderit, debitis odio soluta quam
              culpa alias quod consequatur voluptatibus necessitatibus vitae
              fugit at est blanditiis perspiciatis. Officiis?
            </p>
            <p>
              cnwjhuiyycbuiwhcuh ucishubei dhuw cuhde ygu wh iu hge fyuhuw gyuhdeuiguywhufegfyhu9wfgwyuefhu9h
              hwefhywgfywe 
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
