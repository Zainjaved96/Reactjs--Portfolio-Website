import React from 'react'
import Navbar from './Navbar'
import contactImg from "../assets/images/contact.png"
import contactImg2 from "../assets/images/contact-2.png"
import { GoMarkGithub} from "react-icons/go";
import { BsLinkedin} from "react-icons/bs";
import { BsInstagram} from "react-icons/bs";
import { ImFacebook2} from "react-icons/im";
import {SiGmail} from "react-icons/si";
import {AiFillHtml5} from 'react-icons/ai'
import { FcFlashOn  } from "react-icons/fc";
import {DiCss3} from 'react-icons/di';
import {DiJavascript1} from 'react-icons/di';
import { DiReact } from 'react-icons/di';

function Contact() {
  return (
    <>
        <Navbar/>
        <div className="container contact-main ">
        <div className="row">
            <div className="col-md-6  text-center ">
                <img src={contactImg} width="100%" alt="" />
            </div>
            <div className="col-md-6 contact-head-text  section-left">
                <h1 className='section-head text-center contact-head '>Contact Information</h1>
                <p className='para text-center contact-para'>You can Contact me on almost all social media Platforms I'm  available 24/7.</p>
                <div className="contact-icons">
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
                
            </div>
        </div>
        </div>
        <div className="row ">
            <div className="col-lg-6 col-sm-12 section-img text-center  order-2">
                <img src={contactImg2}  width="70%"alt="" />
            </div>
            <div className="col-lg-6 col-sm-12 text-center section-left ">
                   <h3 className='contact-head'>Address</h3>
                   <p className='contact-text para'>Lahore Punjab Pakistan</p>
                   <h3 className='contact-head' >Phone Number</h3>
                   <p className='contact-text para' >+92 3034196071</p>
                </div>
            </div>
    </>
    

  )
}

export default Contact