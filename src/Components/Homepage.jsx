import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <section id="homepage-section" className="homepage-section bg-light ">
      <section id="intro-section" className="intro-section w-100">
        <div className="container-fluid">
          <div className="row justify-content-xl-center">
            <div className="col-md-6 col-xl-5 d-flex align-items-center justify-content-center">
              <img
                src="/banner.jpg"
                alt="Me"
                className="p-3 pt-md-2 pt-lg-4 img-fluid rounded-circle"
              />
            </div>
            <div className="col-md-6 col-xl-5 pt-2 pb-3 pt-md-5">
              <h2 className="display-1 text-dark  pt-lg-5">
                <strong> Hello there! </strong>
              </h2>
              <h4 className=" pt-2"> Welcome to My World of Coding!</h4>
              <p>
                {" "}
                <h1>I'm Saniya </h1>A passionate and dedicated programming
                enthusiast. I'm a freelance UI/UX developer based in Dubai, UAE.
                I strives to build immersive and beautiful web applications
                through carefully crafted code and user-centric design. Join me
                on this exciting journey as I continue to evolve and innovate in
                the world of web development!
              </p>
              <div className="d-flex pt-4 pb-md-5">
                <div className="col-3 rounded-circle bg-red justify-content-center align-items-center d-flex">
                  <Link
                    to="/projects"
                    className="text-decoration-none text-dark"
                  >
                    <h6 className="text-dark pt-2"> My Works </h6>
                  </Link>
                </div>
                <div className="col-3 rounded-circle bg-orange justify-content-center align-items-center d-flex">
                  <Link to="/skills" className="text-decoration-none text-dark">
                    <h6 className="text-dark pt-2"> Skills </h6>
                  </Link>
                </div>

                <div className="col-3 rounded-circle bg-blue justify-content-center align-items-center d-flex">
                  <Link to="/resume" className="text-decoration-none text-dark">
                    <h6 className="text-dark pt-2"> About </h6>
                  </Link>
                </div>
                <div className="col-3 rounded-circle bg-green justify-content-center align-items-center d-flex">
                  <Link
                    to="/contact"
                    className="text-decoration-none text-dark"
                  >
                    <h6 className="text-dark pt-2"> Contact </h6>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Homepage;
