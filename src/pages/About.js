import React from 'react';
// import "./About.css";
// import aboutImg from "../../images/about-img.jpg";
import Abouti from "../assets/About.jpg"

const About = () => {
  return (
    <section className='about'>
      <div className='container'>



        <div className='about-content grid'>
          <div className='about-img'>
            <img src={Abouti} alt="" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookApp</h2>
            <p className='fs-17'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos consequuntur vero commodi provident maiores, iusto atque corrupti voluptate vel sequi consectetur unde aliquam corporis saepe animi non, tempora reiciendis molestias sed laudantium dolores. Assumenda aperiam fuga quo voluptate commodi ullam aliquam expedita voluptas delectus.</p>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About
