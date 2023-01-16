import React from 'react'
import image from "../assets/images/greetings.png"
import { GoMarkGithub} from "react-icons/go";
import { BsLinkedin} from "react-icons/bs";
import { BsInstagram} from "react-icons/bs";
import { ImFacebook2} from "react-icons/im";
import {SiGmail} from "react-icons/si";
import { useState } from 'react';



function Greeting() {


  return (
    <>

    <div className="greeting  container-fluid">
        <div className="row greeting-text ">
            <div className="col-lg-6 col-sm-12 text-center section-left">
                    <span className='section-head skill-head' >Zain Javed</span>
                    <p className='para greeting-para '>
                    A computer Science student with a passion for coding and  creating efficient , elegant and functional apps that will make life easy and entertaining. Committed to the Complete system development life cycle and maintainence of code and quality.
                    </p>
                    <a  className="socials github" href='https://github.com/Zainjaved96'>
                      <i   className='social-icon'><GoMarkGithub /></i>
      
                    </a>
                    <a href='https://www.linkedin.com/in/zainjaved965/' className="socials linkedin">
                      <i className='social-icon'><BsLinkedin /></i>
                    </a>
                    <a href='https://www.instagram.com/zain__javed/' className="socials insta">
                      <i className='social-icon'><BsInstagram /></i>
                    </a>
                    <a href='https://www.facebook.com/zayn.javed.965' className="socials facebook">
                      <i className='social-icon'><ImFacebook2 /></i>
                    </a>
                    <a href="mailto:zainjaved965@example.com" className="socials gmail">
                      <i className='social-icon'><SiGmail /></i>
                    </a>

            </div>
            <div className="col-lg-6 col-sm-12 section-img ">
                <img src={image}  width="100%"alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Greeting