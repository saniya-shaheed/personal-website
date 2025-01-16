import React from "react";

function Skills() {
  return (
    <section id="skills-section" className="skills-section">
      <div className="container-fluid">
        <h1 className="display-3 p-5 pb-4 pt-md-3 align-items-center justify-content-start d-flex">
          <strong>Skills </strong>
        </h1>
        <div className="row justify-content-center">
          <div className="col-md-5 p-1 p-lg-2 p-xl-3">
            <div className="card  p-3 p-xl-5">
              <div className="image-body d-flex col-4">
                <img class="card-img-top col-4" src="html.jpg" alt="HTML" />
                <img class="card-img-top col-4" src="css.jpg" alt="CSS" />
                <img
                  class="card-img-top col-4"
                  src="javascript.jpg"
                  alt="JavaScript"
                />
              </div>
              <div className="card-body">
                <h5 class="card-title">Languages</h5>
                <p class="card-text">HTML5, CSS3, JavaScript</p>
              </div>
            </div>
          </div>

          <div className="col-md-5 p-1 p-lg-2 p-xl-3">
            <div className="card  p-3 p-xl-5">
              <div className="image-body d-flex col-4">
                <img class="card-img-top col-4" src="reactjl.png" alt="React" />
                <img
                  class="card-img-top col-4"
                  src="bootstrap.jpg"
                  alt="Bootstrap"
                />
                <img class="card-img-top col-4" src="Express.png" alt="jQuery" />
              </div>
              <div className="card-body">
                <h5 class="card-title">Frameworks</h5>
                <p class="card-text">React, Bootstrap, Express.js</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row ms-auto me-auto justify-content-center">
          <div className="col-md-8 p-1 p-lg-2 p-xl-3">
            <div className="card  p-3 p-xl-5">
              <div className="image-body">
                <div className="skills-image-row-one d-flex justify-content-center">
                <img
                  class="card-img-top  "
                  style={{width:"30%"}}
                  src="git.png"
                  alt="Git/Github"
                />
                <img
                  class="card-img-top col-3"
                  style={{width:"30%"}}
                  src="node.webp"
                  alt="Node.js"
                />
                 <img
                  class="card-img-top col-3"
                  style={{width:"30%"}}
                  src="mongodb.png"
                  alt="MongoDB"
                />
               
                </div>
                <div className="skills-image-row-two d-flex justify-content-center">
                <img
                  class="card-img-top col-3"
                  style={{width:"25%"}}
                  src="postman.webp"
                  alt="Postman"
                />
              <img
                  class="card-img-top col-3"
                  style={{width:"25%"}}
                  src="firbase.png"
                  alt="Firebase"
                />
              <img class="card-img-top col-3" src="jest.png"   style={{width:"25%"}} alt="Jest" />
              <img class="card-img-top col-3" src="sass.png"   style={{width:"25%"}} alt="Sass" /> 
              </div>
              </div>
              <div className="card-body">
                <h5 class="card-title">Tools</h5>
                <p class="card-text">Git/GitHub, Firebase, Postman, MongoDB, NodeJS, Sass, Jest</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
