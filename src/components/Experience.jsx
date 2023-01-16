import React from 'react'
import expImg from '../assets/images/experience.png';
import Navbar from "./Navbar"
import ititanImg from '../assets/images/ititan.jpg'
function Experience() {
  return (
    <>
    <Navbar/>
    <div className="container exp-main" >
    <div className="row">
        <div className="col-md-6  text-center ">
            <img src={expImg} width="100%" alt="" />
        </div>
        <div className="col-md-6 exp-head-text  section-left">
            <h1 className='section-head text-center exp-head '>Experience</h1>
            <h5 className='sub-head text-center'>Freelance & Internship</h5>
             <p className='para text-center exp-para'>I'v Worked with Many local and International client on projetcs like web scraping, data analysis and creating data driven wb apps.</p>
        </div>
    </div>
    </div>

    <div class="accordion container" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Freelance
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <div className="row accordion-inner">
            <div className="col-lg-9">
                <p className='ac-role'>Web Scraper</p>
                <p className='ac-company'>Freelancer</p>
              <p>I learn about how the requests are sent to websites and data can be fetched. I also learned alot about frontend selector and how scraped data can be cleaned and output into Excel. </p>
            </div>
            <div className="col-lg-3">
                <p>May 2020 - Sept 2021</p>
            </div>
        </div>
        <div className="row accordion-inner">
            <div className="col-lg-9">
                <p className='ac-role'>Data Analyst</p>
                <p className='ac-company'>Freelancer</p>
              <p>It helped me understand the importance of data and the different ways we can visualiza it to make better decisions for our businesses. Learned to Extract data from cloud services like snowfalke.</p>
            </div>
            <div className="col-lg-3 me-auto">
                <p>Oct 2021 - Present</p>
            </div>
        </div>
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Internships
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <div className="row accordion-inner">
            <div className="col-lg-2 ititan-img">
                <img   src={ititanImg}  alt="" />
            </div>
            <div className="col-lg-7">
                <p className='ac-role'>Trainee</p>
                <p className='ac-company'>iTitans</p>
              <p>Learning about web technologies like html css js react and figuring out the best practices to write code. Getting better with collaborating in a team enviornment.</p>
            </div>
            <div className="col-lg-3 me-auto">
                <p>Jan 2023 - Present</p>
            </div>
        </div>
      </div>
    </div>
  </div>
  
  
   </div>
    </>
  )
}

export default Experience