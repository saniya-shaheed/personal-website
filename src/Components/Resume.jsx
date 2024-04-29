import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Resume() {
  return (
    <section id='resume-section' className="resume-section">
        <Navbar />
        <div className="container">
          <div className='col-12 d-block d-md-flex'>
            <h1 className='display-3 p-5 pb-1 pt-md-3 align-items-center justify-content-start d-flex'><strong> Resume </strong></h1>
            <div className="col-md-8 p-5 pt-1 pt-md-5 align-items-center justify-content-md-end d-flex">
              <button className='btn btn-secondary'> 
                <a href='cv.webp' className='text-decoration-none text-white' download>Download Resume 
                <span className='ps-1'> 
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{height:"15px"}}>
                    <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/>
                  </svg>
                </span>
                </a>
              </button>
            </div>
          </div>
          <dl class="row p-5 pb-2 pt-1 pt-md-5">
            <dt class="col-md-4"><h3> Work <br /> Experience </h3></dt>
              <dd class="col-md-2 resume-year"><small> Present </small></dd>
                <dd class="col-md-6 resume-project-link">
                  <p> While I may not have formal work experience in a professional setting, I have 
                      dedicated my time to honoring my skills in frontend development through various 
                      projects.</p>
                  <a href='/personal-website/projects' className='project-link'> View My Projects </a>
                </dd>
          </dl>
          <hr />
          <dl class="row p-5 pt-4 pb-2">
            <dt class="col-md-4"><h3> Skills <br /> & Expertise </h3></dt>
              <dd class="col-md-2 resume-year"><small>  </small></dd>
                <dd class="col-md-6">
                  <ul>
                    <li>
                      <h5 className='pt-4'> Web Technologies </h5>
                      <ul className='list-unstyled'>
                        <li> - HTML5 </li>
                        <li> - CSS3 </li>
                        <li> - JavaScript (ES6+) </li>
                        <li> - Bootstrap</li>
                      </ul> 
                    </li>
                    <li>
                      <h5 className='pt-4'>Frontend Frameworks </h5>
                      <ul className='list-unstyled'>
                        <li> -React for building efficient and scalable user interfaces </li>
                      </ul> 
                    </li>
                    <li>
                      <h5 className='pt-4'>JavaScript Libraries </h5>
                      <ul className='list-unstyled'>
                        <li> -jQuery </li>
                        <li> -React </li>
                      </ul> 
                    </li>
                    <li>
                      <h5 className='pt-4'>Version Control </h5>
                        <ul className='list-unstyled'>
                          <li> -Git </li>
                        </ul> 
                    </li>
                    <li>
                      <h5 className='pt-4'>Responsive Design </h5>
                      <ul className='list-unstyled'>
                        <li> -Proficient in creating responsive and mobile-friendly web layouts.</li>
                      </ul> 
                    </li>
                    <li>
                      <h5 className='pt-4'>Collaboration Tools </h5>
                      <ul className='list-unstyled'>
                        <li> -Experience with collaborative development using Git for version control.</li>
                      </ul> 
                    </li>
                    <li>
                      <h5 className='pt-4'> Problem Solving </h5>
                      <ul className='list-unstyled'>
                        <li> -Strong analytical and problem-solving skills demonstrated through web development projects.</li>
                      </ul> 
                    </li>
                    <li>
                      <h5 className='pt-4'> Code Optimization </h5>
                      <ul className='list-unstyled'>
                        <li> -Knowledge of best practices for writing clean, efficient, and maintainable code.</li>
                      </ul> 
                    </li>
                    <li>
                      <h5 className='pt-4'> Cross-Browser Compatibility </h5>
                      <ul className='list-unstyled'>
                        <li> -Ensured cross-browser compatibility for websites by testing and debugging.</li>
                      </ul> 
                    </li>
                    <li>
                      <h5 className='pt-4'> Adaptive Learning </h5>
                      <ul className='list-unstyled'>
                        <li> -Rapidly adapt to new technologies and methodologies.</li>
                      </ul> 
                    </li>
                    <li>
                      <h5 className='pt-4'> Project Management </h5>
                      <ul className='list-unstyled'>
                        <li> -Successfully completed projects within specified timelines.</li>
                      </ul> 
                    </li>
                    <li>
                      <h5 className='pt-4'> Documentation</h5>
                      <ul className='list-unstyled'>
                        <li> -Proficient in creating documentation for code, processes, and project specifications.</li>
                      </ul> 
                    </li>
                  </ul>
                </dd>
          </dl>
          <hr />
          <dl class="row p-5 pt-4 pb-1">
            <dt class="col-md-4"><h3> Education </h3></dt>
              <dd class="col-md-2 resume-year"><small> Soon to Graduate </small></dd>
              <dd class="col-md-6">
                <h5> Information Technology | <br />  Bachelor of Science </h5>
                  <p> Amity University</p>
              </dd>
          </dl>
        </div>
        <Footer />
      </section>
    )
}

export default Resume
