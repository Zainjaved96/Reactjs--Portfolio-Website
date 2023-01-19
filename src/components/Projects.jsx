import React from 'react'
import Navbar from './Navbar'
import projectsImg from "../assets/images/projects.png"
import {SiPython} from "react-icons/si";
import {SiPandas} from "react-icons/si"
import {SiSelenium} from 'react-icons/si'
import {SiNumpy} from 'react-icons/si'
import {AiFillHtml5} from 'react-icons/ai'
import { FcFlashOn  } from "react-icons/fc";
import {DiCss3} from 'react-icons/di';
import {DiJavascript1} from 'react-icons/di';
import { DiReact } from 'react-icons/di';

function Projects() {
  return (
    <>
        <Navbar />
        <div className="container proj-main" >
              <div className="row">
                  <div className="col-md-6  text-center ">
                      <img src={projectsImg} width="100%" alt="" />
                  </div>
                  <div className="col-md-6 proj-head-text  section-left">
                      <h1 className='section-head text-center proj-head '>Projects</h1>
                      <h5 className='sub-head text-center'>Personel & Commercial</h5>
                      <p className='para text-center proj-para'>I've created many projects from data driven web apps to automation script i have developed them with ease of end user in mind.</p>
                  </div>
              </div>

          <div className="projects row ">
            <a className="project col" href='https://github.com/Zainjaved96/Python-Amazon-Automation-using-Selenium'>
                  <h5 className='project-name'>Amazon Web Scraper</h5>
                  <p className='project-desc'>A Python app that scrapes listings information like name, desc, images, urls and store them in Excel.</p>
                  <div className="automation-icons project-icons">
                            <i className='skill-icon python-icon'>
                                <SiPython color='rgb(20%, 40%, 59%)' /> 
                            </i>
                            <i className='skill-icon pandas-icon'>
                                <SiPandas color='rgb(21, 114, 182)' /> 
                            </i>
                            <i className='skill-icon selenium-icon'>
                                <SiSelenium color='green'/>
                            </i>
                            <i className='skill-icon numpy-icon'>
                                <SiNumpy color='rgb(97, 218, 251)' />
                            </i>



                  </div>
            </a>
            <a className="project col " href='https://textutilz-react.netlify.app/'>
                  <h5 className='project-name'>Text Utilz Web App</h5>
                  <p className='project-desc'>A Python app that scrapes listings information like name, desc, images, urls and store them in Excel.</p>
                  <div className="automation-icons project-icons project2-icons ">
                        <i className='skill-icon html-icon'>
                            <AiFillHtml5 color='rgb(227, 79, 38)' /> 
                        </i>
                        <i className='skill-icon css-icon'>
                            <DiCss3 color='rgb(21, 114, 182)' /> 
                        </i>
                        <i className='skill-icon js-icon'>
                            <DiJavascript1 color='rgb(247, 223, 30)'/>
                        </i>
                        <i className='skill-icon react-icon'>
                            <DiReact color='rgb(21, 114, 182)' />
                        </i>



                    </div>
            </a>
            <a className="project col" href='https://zainjaved96.github.io/resume-html-css/'>
                  <h5 className='project-name'>Personel Resume</h5>
                  <p className='project-desc'>A Personel resume to sharpen my html and css skills it's created using flexbox layout and contains my skills, hobbies experiences and other information </p>
                  <div className="automation-icons project-icons project2-icons ">
                        <i className='skill-icon html-icon'>
                            <AiFillHtml5 color='rgb(227, 79, 38)' /> 
                        </i>
                        <i className='skill-icon css-icon'>
                            <DiCss3 color='rgb(21, 114, 182)' /> 
                        </i>
                    </div>
            </a>
            
          </div>
          <div className="projects row">
            
           
          <a className="project col " href='https://github.com/Zainjaved96/Faceboook-Marketplace-Scraper'>
                  <h5 className='project-name'>Facebook Marketplace Scraper</h5>
                  <p className='project-desc'>A python app that scrapes facebook marketplace for automobiles data and then stores them in a google sheet using gspread api.</p>
                  <div className="automation-icons project-icons">
                            <i className='skill-icon python-icon'>
                                <SiPython color='rgb(20%, 40%, 59%)' /> 
                            </i>
                            <i className='skill-icon pandas-icon'>
                                <SiPandas color='rgb(21, 114, 182)' /> 
                            </i>
                            <i className='skill-icon selenium-icon'>
                                <SiSelenium color='green'/>
                            </i>
                            <i className='skill-icon numpy-icon'>
                                <SiNumpy color='rgb(97, 218, 251)' />
                            </i>



                  </div>
            </a>
            <a className="project col" href='https://github.com/Zainjaved96/Crypto-Currencies-Tracker-Python'>
                  <h5 className='project-name'>Crypto Currency Tracker</h5>
                  <p className='project-desc'>A Python based app that scrapes currencies data from binance store it in google sheets using gspread api. The color of cell values changes based on decrease or increase in the celll values.</p>
                  <div className="automation-icons project-icons">
                            <i className='skill-icon python-icon'>
                                <SiPython color='rgb(20%, 40%, 59%)' /> 
                            </i>
                            <i className='skill-icon pandas-icon'>
                                <SiPandas color='rgb(21, 114, 182)' /> 
                            </i>
                            <i className='skill-icon selenium-icon'>
                                <SiSelenium color='green'/>
                            </i>
                            <i className='skill-icon numpy-icon'>
                                <SiNumpy color='rgb(97, 218, 251)' />
                            </i>
                  </div>
            </a>
            <a className="project col" href='https://bestcalculatorjs.netlify.app/'>
                  <h5 className='project-name'>Calculator </h5>
                  <p className='project-desc'>A Responsive Calculator Built on HTML CSS and JAVASCRIPT.It performs simple calculations as well as scientific calculations</p>
                  <div className="automation-icons project-icons project2-icons ">
                        <i className='skill-icon html-icon'>
                            <AiFillHtml5 color='rgb(227, 79, 38)' /> 
                        </i>
                        <i className='skill-icon css-icon'>
                            <DiCss3 color='rgb(21, 114, 182)' /> 
                        </i>
                        <i className='skill-icon js-icon'>
                            <DiJavascript1 color='rgb(247, 223, 30)'/>
                        </i>
                        <i className='skill-icon react-icon'>
                            <DiReact color='rgb(21, 114, 182)' />
                        </i>
                    </div>
            </a>
          </div>
        
      
       </div>

       
    </>
  )
}

export default Projects