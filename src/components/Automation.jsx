import React from 'react'
import automationImg from "../assets/images/automation.png";
import {AiFillHtml5} from 'react-icons/ai'
import { FcFlashOn  } from "react-icons/fc";
import {DiCss3} from 'react-icons/di';
import {DiJavascript1} from 'react-icons/di';
import { DiReact } from 'react-icons/di';
import {SiPython} from "react-icons/si";
import {SiPandas} from "react-icons/si"
import {SiSelenium} from 'react-icons/si'
import {SiNumpy} from 'react-icons/si'




function Automation() {
  return (
    <div className="automation">
        <div className="container-fluid">
             <div className="row">
                <div className="col-lg-6 col-sm-12 section-img automation-img text-center order-2 ">
                    <img src={automationImg}  width="80%"alt="" />
                </div>
                <div className="col-lg-6 col-sm-12 text-center section-left order-1">
                        <span className='section-head automation-head'>Web Automation</span>
                        <div className="automation-icons">
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
                        <p className='para automation-text skill-main skill-text'>
                            <div className="skill-lists">
                                <div className="skill-list">
                                    <span> <span className='flash-icon' ><FcFlashOn /></span> Automating Web Browser  </span>
                                </div>
                                
                                <div className="skill-list">
                                
                                    <span> <span className='flash-icon' ><FcFlashOn /></span> Scraping Dynamic / Static Websites </span>
                                </div>
                                <div className="skill-list">
                                    <span> <span className='flash-icon'> <FcFlashOn /></span> Exporting data in Excel Sheets </span>
                                </div>
                                <div className="skill-list">
                                    <span> <span className='flash-icon' ><FcFlashOn /></span> Cleanig data and removing redunduncy </span>
                                </div>
                        
                            </div>

                        </p>
                </div>
             </div>
        </div>
    </div>
  )
}

export default Automation