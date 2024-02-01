import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Skills() {
  return (
    <section id='skills-section' className="skills-section">
        <Navbar />
        <div className="container">
          <h1 className='display-4 p-5'><strong> Skills </strong></h1>
          <div className="row card-first-row">
            <div className="col-md-6 p-3 p-md-2 d-flex justify-content-center align-items-center justify-content-md-end">
              <div class="card col-10">
                <div className="web-tech-img d-flex">
                  <img class="card-img-top w-50" src="html.jpg" alt="Card image cap" />
                  <img class="card-img-top w-50" src="css.jpg" alt="Card image cap" />
                </div>
                <div className="web-tech-img d-flex border-bottom">
                  <img class="card-img-top w-50" src="javascript.jpg" alt="Card image cap" />
                  <img class="card-img-top w-50 rounded-0" src="bootstrap.jpg" alt="Card image cap" />
                </div>
                <div class="card-body">
                  <h5 class="card-title text-center">Web Technologies</h5>
                  <p class="card-text"> HTML 5, CSS 3 , JavaScript (ES6+), Bootstrap </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-3 p-md-2 d-flex justify-content-center align-items-center justify-content-md-start">
              <div class="card col-10 ">
                <div className="react-img-height d-md-flex align-items-md-center border-bottom">
                  <img class="card-img-top" src="react.png" alt="Card image cap" />
                </div>
                <div class="card-body">
                  <h5 class="card-title text-center"> Frontend Framework </h5>
                  <p class="card-text"> React </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row card-second-row">
            <div className="col-md-6 p-3 p-md-2 d-flex justify-content-center align-items-center justify-content-md-end">
              <div class="card col-10">
                <div className="js-library-img d-flex border-bottom">
                  <img class="card-img-top w-50" src="reactjl.png" alt="Card image cap" />
                  <img class="card-img-top w-50" src="jquery.png" alt="Card image cap" />
                </div>
                <div class="card-body">
                  <h5 class="card-title text-center"> JavaScript Libraries </h5>
                  <p class="card-text"> React, jQuery </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-3 p-md-2 d-flex justify-content-center align-items-center justify-content-md-start">
              <div class="card col-10">
                <img class="card-img-top border-bottom git-img" src="git.png" alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title text-center"> Version Control </h5>
                  <p class="card-text"> Git </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </section>
  )
}

export default Skills
