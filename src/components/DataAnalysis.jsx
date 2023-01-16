import React from 'react'
import automationImg from "../assets/images/automation.png";
import { FcFlashOn  } from "react-icons/fc";
import {SiPython} from "react-icons/si";
import {SiPandas} from "react-icons/si"
import {SiSelenium} from 'react-icons/si'
import {SiNumpy} from 'react-icons/si'
import DataAnalysisImg from "../assets/images/DataAnalysis.png"

function DataAnalysis() {
  return (
    <div className="data-analysis">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 col-sm-12 section-img da-img text-center ">
                    <img src={DataAnalysisImg}  width="65%"alt="" />
                </div>
                <div className="col-lg-6 col-sm-12 section-img da-img2 order-2 text-center ">
                    <img src={DataAnalysisImg}  width="65%"alt="" />
                </div>
                <div className="col-lg-6 col-sm-12 text-center section-left ">
                        <span className='section-head '>Data Analysis</span>
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
                        <p className='para skill-main skill-text'>
                            <div className="skill-lists">
                                <div className="skill-list">
                                    <span> <span className='flash-icon' ><FcFlashOn /></span> Cleaning and Normalization of Data </span>
                                </div>
                                
                                <div className="skill-list">
                                
                                    <span> <span className='flash-icon' ><FcFlashOn /></span> Creating Interactive Dashboards </span>
                                </div>
                                <div className="skill-list">
                                    <span> <span className='flash-icon'> <FcFlashOn /></span> Visualization in any type of plot.</span>
                                </div>
                                <div className="skill-list">
                                    <span> <span className='flash-icon' ><FcFlashOn /></span> Data Science Web Apps.</span>
                                </div>
                        
                            </div>

                        </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DataAnalysis