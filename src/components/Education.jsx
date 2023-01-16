import React from 'react'
import eduImg from '../assets/images/edu-img.png';
import Navbar from './Navbar';
import { FcFlashOn  } from "react-icons/fc";
import webScrapingImg from "../assets/images/webscraping.jpg"
import reactImg from "../assets/images/scrimba.jpg"
import streamlitImg from "../assets/images/streamlit.jpg"

function Education() {
  return (
    <>
    <Navbar/>

    <div className="container edu-main ">
        <div className="row">
            <div className="col-md-6  text-center ">
                <img src={eduImg} width="70%" alt="" />
            </div>
            <div className="col-md-6 edu-head-text  section-left">
                <h1 className='section-head text-center edu-head '>Education</h1>
                <p className='para text-center edu-para'>Basic Education and Certification</p>
            </div>
        </div>
    </div>

    <div className="container degree">
        <h1 className='section-head text-center degree-heading'>DEGREE IN PROGRESS</h1>
        <div class="card" style={{width: "18rem;", backgroundColor:"inherit", margin:"10px 40px", boxShadow: "5px 5px 5px #d9dbdf", borderRadius:"7px"}}>
            <div class="card-body degree-card ">
                <div className="degree-head">
                    <div className="row">
                        <div className="col-lg-10">
                          <h5 class="card-title degree-name ">BS in Information Technology</h5>
                        </div>
                        <div className="col-lg-2 me-auto">
                          <h5 class="card-title degree-year ">2019-2023</h5>
                        </div>
                    </div>
                    
                    <p class="card-text">Lahore College of Education</p>
                </div>
               
                <div className="row degree-body ">
                    <div className="col-lg-12">
                    <span> <span className='flash-icon' ><FcFlashOn /></span> I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.</span>
                    </div>
                    <div className="col-lg-12">
                    <span> <span className='flash-icon' ><FcFlashOn /></span> Highest CGPA in the batch of 2019. </span>
                    </div>
                    <div className="col-lg-12">
                    <span> <span className='flash-icon' ><FcFlashOn /></span> Got Selected for iTitans S.T.E.P Program </span>
                    </div>
                </div>
                
                <a href="https://lgclahore.com/" class="btn btn-primary degree-button">Visit Website </a>
            </div>
        </div>
    </div>

    <div className="certifications container">
        <h5 className='section-head text-center'> Certifications</h5>
        <div className= "row certi-cards">
            <div className="col-lg-4 certi-card">
            <div class="card" style={{Width: "18rem;"}}>
                        <img src={webScrapingImg} width="10%"  class="card-img-top" alt="..."/>
                        <div class="card-body certi-body">
                            <h5 class="card-title">Web Scraping with Python</h5>
                            <p class="card-text">Learned To Scrape Dynamic and Static websites with the use of Python Libraries.</p>
                            <a href="https://www.udemy.com/home/my-courses/learning/" class="btn btn-primary degree-button">View</a>
                        </div>
                </div>
            </div>
            <div className="col-lg-4 certi-card">
                <div class="card" style={{Width: "18rem;"}}>
                        <img src={reactImg} width="10%"  class="card-img-top" alt="..."/>
                        <div class="card-body certi-body">
                            <h5 class="card-title">React Basics Scrimba</h5>
                            <p class="card-text">Learned Basic Components of react like components, useState and Routing.</p>
                            <a href="https://www.youtube.com/watch?v=bMknfKXIFA8" class="btn btn-primary degree-button">View</a>
                        </div>
                </div>
            </div>
            <div className="col-lg-4 certi-card">
            <div class="card" style={{Width: "18rem;"}}>
                        <img src={streamlitImg} width="10%"  class="card-img-top" alt="..."/>
                        <div class="card-body certi-body">
                            <h5 class="card-title">Fundamentals of Streamlit</h5>
                            <p class="card-text">Learned To create data driven web apps using python and it's data science libraries.</p>
                            <a href="https://www.udemy.com/home/my-courses/learning/" class="btn btn-primary degree-button">View</a>
                        </div>
                </div>
            </div>
        </div> 
        
    </div>
    </>
  )
}

export default Education