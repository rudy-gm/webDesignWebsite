import "./services.css";
import React from "react";
import Data from "../../data";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_4.jpg";
import Card from "../../UI/Card";
import { plans } from "../../data";

const services = () => {
  return (
    <>
      <Header title="Our Services" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nisi,
        asperiores praesentium quam sint ratione magni quod enim facere
        distinctio consequuntur fugit repudiandae maxime odit ad placeat ex eos
        voluptatem?
      </Header>
      <section className="plans">
        <div className="container plans_container">
          {
            plans.map(({id,name,description,price,features})=>{
              return(
                <Card key={id} className='plan'>
                  <h3>{name}</h3>
                  <small>{description}</small>
                  <h1>{`$${price}`}</h1><h2>/mo</h2>
                  <h4>Features</h4>
                  {
                    features.map(({feature, available}, index)=>{
                      return (
                        <p key={index} className={!available ? 'disabled' : ''}>{feature}</p>
                      )
                    })
                  }
                  <button className="btn lg">Choose Plan</button>
                </Card>
                
              )
            })
          }
        </div>
      </section>
    </>
  );
};

export default services;
