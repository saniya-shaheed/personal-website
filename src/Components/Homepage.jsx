import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <section id='homepage-section' className="homepage-section bg-light">

        <Navbar />

        <section id='intro-section' className="intro-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <img src='introimg.webp' alt='Me' className='p-3 pt-md-2 pt-lg-4 img-fluid rounded-circle' />
                    </div>
                    <div className="col-md-6 pt-2 pb-3 pt-md-5">
                        <h1 className='display-1 text-dark  pt-lg-5'><strong> Hello there! </strong></h1>
                        <h4 className='text-dark pt-2'> Welcome to the World of My Coding!</h4>
                        <p> I'm Saniya, a passionate and dedicated programming enthusiast. 
                            While I may be a fresher, my love for coding has driven me to 
                            explore and master a range of technologies. Join me on this 
                            exciting  journey as I continue to evolve and innovate in the 
                            world of web development!
                        </p>
                        <div className="d-flex pt-4 pb-md-5">
                        <div className="col-3 rounded-circle bg-orange justify-content-center align-items-center d-flex">
                            <Link to="/skills" className='text-decoration-none text-dark'>
                                <h6 className='text-dark pt-2'> Skills </h6></Link>
                        </div>
                        <div className="col-3 rounded-circle bg-red justify-content-center align-items-center d-flex">
                            <Link to="/projects" className='text-decoration-none text-dark'>
                                <h6 className='text-dark pt-2'> Projects </h6></Link>
                        </div>
                        <div className="col-3 rounded-circle bg-blue justify-content-center align-items-center d-flex">
                            <Link to="/resume" className='text-decoration-none text-dark'>
                                <h6 className='text-dark pt-2'> Resume </h6></Link>
                        </div>
                        <div className="col-3 rounded-circle bg-green justify-content-center align-items-center d-flex">
                            <Link to="/contact" className='text-decoration-none text-dark'>
                                <h6 className='text-dark pt-2'> Contact </h6></Link>
                        </div>
                        </div>
                    </div>  
                </div>
            </div>
        </section>

        <Footer />


    </section>
  )
}

export default Homepage
