import React from 'react'
import fronEnd from "../assets/images/front-end.png"
import {AiFillHtml5} from 'react-icons/ai'
import { FcFlashOn  } from "react-icons/fc";
import {DiCss3} from 'react-icons/di';
import {DiJavascript1} from 'react-icons/di';
import { DiReact } from 'react-icons/di';


function FrontEnd() {

  return (
    <div className="front-end">
        <div className=" container-fluid">
        <div className="row ">
            <div className="col-lg-6 col-sm-12 section-img text-center ">
                <img src={fronEnd}  width="70%"alt="" />
            </div>
            <div className="col-lg-6 col-sm-12 text-center section-left ">
                    <span className='section-head skill-head'>Front End Web Development</span>
                    <div className="skill-icons ">
                        
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
                            <DiReact color='rgb(97, 218, 251)' />
                        </i>



                    </div>
                    <p className='para  skill-main skill-text'>
                        <div className="skill-lists">
                            <div className="skill-list">
                                <span> <span className='flash-icon' ><FcFlashOn /></span>  Create Responsive Websites </span>
                            </div>
                            
                            <div className="skill-list">
                               
                                <span> <span className='flash-icon' ><FcFlashOn /></span> Elegant Styles With CSS </span>
                            </div>
                            <div className="skill-list">
                                <span> <span className='flash-icon'> <FcFlashOn /></span> Eye Catching Animations </span>
                            </div>
                            <div className="skill-list">
                                <span> <span className='flash-icon' ><FcFlashOn /></span>  Dynamic Websites with React </span>
                            </div>
                       
                        </div>

                      </p>
            </div>
           
        </div>
    </div>
        </div>
  )
}

export default FrontEnd