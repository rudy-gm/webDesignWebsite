import "./portfolio.css";
import React from "react";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_3.jpg";

const portfolio = () => {

  const galleryLength = 15;
  const images = [];

  for(let i =1 ; i <galleryLength; i++){
    images.push(require(`../../images/gallery${i}.jpg`));
  
  } 

  return (
    <>
      <Header title="Our Portfolio" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis
        quasi rerum nulla accusantium perspiciatis dignissimos? Rerum, corporis,
        odit cum dolor eum quae possimus aut nesciunt dolorem obcaecati quasi
        quibusdam?
      </Header>
      <section className="gallery">
        <div className="container gallery_container">
          {
            images.map((image,index)=>{
              return(
                <article key={index}>
                  <img src={image} alt={`Gallery ${index+1}`} />
                </article>
              )
            })
          }
        </div>
      </section>
       
    </>
  );
};

export default portfolio;
