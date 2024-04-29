import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Projects() {
  return (
    <section id="projects-section"  className="projects-section">
        <Navbar />
        <div className="container">
            <h1 className='display-3 p-5 pb-1 pt-md-3 align-items-center justify-content-start d-flex'><strong> Projects </strong></h1>
            <div className="d-flex justify-content-center">
                <div id="carouselExampleControls" class="carousel slide p-3 pt-5 ps-md-1 pe-md-1 col-md-10" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <a href="https://saniya-shaheed.github.io/personal-website/">
                            <img class="d-block w-100 " src="project1.png" alt="First slide" />
                            </a>
                            <div className="bg-white rounded-bottom-5">
                                <h5 className='p-3 pb-1 text-secondary'> 1. My Personal Portfolio Website </h5>
                                <p className='ps-3 pb-4 caption-carousel'>
                                    <div> <p>
                                    Website: <a href='https://saniya-shaheed.github.io/personal-website/'> https://saniya-shaheed.github.io/personal-website/ </a><br />
                                    Github: <a href='https://github.com/saniya-shaheed/personal-website'> https://github.com/saniya-shaheed/personal-website </a>
                                    </p></div> 
                                    <ul className='project-ul'>
                                        <li>Developed a website to showcase <strong>frontend development skills</strong>.</li>
                                        <li>Designed a visually appealing user interface using <strong>HTML, CSS, and JavaScript</strong>.</li>
                                        <li>Implemented features such as a <strong>carousel</strong> for project gallery, <strong>contact form</strong>, and <strong>interactive 
                                            elements</strong> to demonstrate coding abilities.</li>
                                        <li>Implemented responsive design principles using <strong>Bootstrap</strong></li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="project2.png" alt="Second slide" />
                            <div className="bg-white rounded-bottom-5">
                                <h5 className='p-3 pb-1 text-secondary'> 2. E-Commerce Website </h5>
                                <p className='ps-3 pb-4 caption-carousel'> The 'E-Commerce' project was so exciting as well
                                as challenging for me. Because unlike personal portfolio, this contains a lot of features 
                                of React. I included API, lot of carousels, sections in one page itself like sidebar, Navbar
                                and special bars for displaying offers. Even though it had a lot of work, I could finish import PropTypes from 'prop-types'
                                easily with help of Reeact and Bootstrap.
                                </p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="project3.png" alt="Third slide" />
                            <div className="bg-white rounded-bottom-5">
                                <h5 className='p-3 pb-1 text-secondary'> 3. Autocraft for Automobile Services </h5>
                                <p className='ps-3 caption-carousel'> This is a very special project for me, because 
                                this was done for a very spec ial person for building up their business. I am so happy that I 
                                am also a part of it. 
                                </p>
                                <p className='ps-3 pb-4 caption-carousel'> Just like E-Commerce this also contains alot of 
                                features including API, React, Bootstrap and all. I tried my maximum to make it helpful for users and 
                                also responsive in all screen sizes. In this I needed to use alot of JavaScript  functions and also responsive 
                                in all screen sizes. 
                                </p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="project2.png" alt="Third slide" />
                            <div className="bg-white rounded-bottom-5">
                                <h5 className='p-3 pb-1 text-secondary'> 4. Acupuncture Clinic </h5>
                                <p className='ps-3 caption-carousel'> This is also for a very special client. 
                                I am so happy that I am also a part of it. 
                                </p>
                                <p className='ps-3 pb-4 caption-carousel'> This is just like a static website but still, 
                                I had to use little functions for booking appointments and enquiry from their patients. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev text-decoration-none" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-prev-icon" aria-hidden="true">&lsaquo;</span>
                    </a>
                    <a class="carousel-control-next  text-decoration-none" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class=" carousel-next-icon" aria-hidden="true">&rsaquo;</span>
                    </a>
                </div>
            </div>
        </div>
        <Footer />
    </section>
  )
}

export default Projects
