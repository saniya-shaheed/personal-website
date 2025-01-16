import React from "react";

function Projects() {
  return (
    <section id="projects-section" className="projects-section">
      <div className="container-fluid">
        <h1 className="display-3 p-5 pb-4 pt-md-3 align-items-center justify-content-start d-flex">
          <strong>My Works</strong>
        </h1>
        <div className="d-flex justify-content-center">
          <div
            id="carouselExampleControls"
            class="carousel slide p-3 pt-5 ps-md-1 pe-md-1 col-md-10"
            data-ride="carousel"
          >
            <div class="carousel-inner">
            <div class="carousel-item active">
                <a href="https://fastfixautomaintanence.onrender.com/adminFF">
                  <img
                    class="d-block w-100 "
                    src="fastfix.png"
                    alt="First slide"
                  />
                </a>
                <div className="bg-white rounded-bottom-5">
                  <h5 className="p-3 pb-1 text-secondary">
                    {" "}
                    1. Web Application for FastFix Automaintanece data management{" "}
                  </h5>
                  <p className="ps-3 pb-4 caption-carousel">
                    <div className="page-link">
                      {" "}
                      <p>
                        Website:{" "}
                        <a href="https://fastfixautomaintanence.onrender.com/adminFF" className="text-secondary">
                        https://fastfixautomaintanence.onrender.com/adminFF{" "}
                        </a>
                      </p>
                    </div>
                    <ul className="project-ul">
                      <li>

                      Designed and developed separate interfaces for users and admins, including
authentication. </li>
<li>
Implemented <strong>CRUD </strong> operations on customer, dealers, employee details, with
a detailed view for managing multiple vehicles or customers, etc.</li>
<li>
Implemented a <strong>dynamic expense management </strong>system that tracks monthly and
yearly expenses and calculates revenue and profit dynamically.
</li>
<li>Integrated <strong>search functionality </strong> for customers, dealers and vehicles.</li>
<li>
Utilized the <strong>MERN stack (MongoDB, Express.js, React, Node.js) </strong> with tools like
<strong>Postman and Git </strong> for efficient development and testing workflows.</li>
<li>Deployed the frontend and backend separately using<strong> Render</strong>  for seamless and
scalable application hosting.</li>
                    </ul>
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <a href="https://saniya-shaheed.github.io/weatherist/">
                  <img
                    class="d-block w-100 "
                    src="project2.png"
                    alt="First slide"
                  />
                </a>
                <div className="bg-white rounded-bottom-5">
                  <h5 className="p-3 pb-1 text-secondary">
                    {" "}
                    2. Weatherist Weather App{" "}
                  </h5>
                  <p className="ps-3 pb-4 caption-carousel">
                    <div className="page-link">
                      {" "}
                      <p>
                        Website:{" "}
                        <a  href="https://saniya-shaheed.github.io/weatherist/" className="text-secondary">
                          https://saniya-shaheed.github.io/weatherist/{" "}
                        </a>
                      </p>
                    </div>
                    <ul className="project-ul">
                      <li>
                        Developed a weather dashboard application using{" "}
                        <strong> React.js </strong> and integrated the{" "}
                        <strong> OpenWeatherMap API </strong> to provide
                        real-time weather data.{" "}
                      </li>
                      <li>
                        Implemented <strong>geolocation</strong> to
                        automatically detect the user's location, neighbouring
                        cities and fetch weather data accordingly.{" "}
                      </li>
                      <li>
                        Utilized <strong> React Router </strong> for navigation
                        between different views, including a home page,
                        dashboard, and settings page.{" "}
                      </li>
                      <li>
                        Designed a user-friendly interface with responsive
                        design principles to ensure compatibility across various
                        devices.{" "}
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <a href="https://saniya-shaheed.github.io/alhamd-acupuncture/">
                  <img
                    class="d-block w-100"
                    src="alhamd_acupuncture.png"
                    alt="Third slide"
                  />
                </a>
                <div className="bg-white rounded-bottom-5">
                  <h5 className="p-3 pb-1 text-secondary">
                    {" "}
                    3. Al Hamd Acupuncture{" "}
                  </h5>
                  <p className="ps-3 pb-4 caption-carousel">
                    <div className="page-link">
                      {" "}
                      <p>
                        Website:{" "}
                        <a href="https://saniya-shaheed.github.io/alhamd-acupuncture/"  className="text-secondary">
                          {" "}
                          https://saniya-shaheed.github.io/alhamd_acupuncture/{" "}
                        </a>
                      </p>
                    </div>
                    <ul className="project-ul  pb-4">
                      <li>
                        A responsive website for an acupuncture clinic to
                        showcase their services, staff, and clinic details,
                        providing users with easy access to information
                      </li>
                      <li>
                        {" "}
                        Home Page: Overview of the clinic and its healer,
                        services.
                      </li>
                      <li>
                        Services Carousel: Detailed descriptions of the
                        acupuncture services in <strong>carousels</strong> for
                        better user interaction provided.
                      </li>
                      <li>
                        Contact: <strong>Form</strong> for users to send
                        messages to the clinic.
                      </li>
                      <li>
                        Booking System:{" "}
                        <strong>Form to book an appointment</strong>.
                      </li>
                      <li>
                        <strong>Responsive Design</strong>: Optimized for
                        various devices.
                      </li>
                    </ul>{" "}
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <a href="https://saniya-shaheed.github.io/clickmart-ecommerce/">
                  <img
                    class="d-block w-100"
                    src="clickmart.png"
                    alt="Third slide"
                  />
                </a>
                <div className="bg-white rounded-bottom-5">
                  <h5 className="p-3 pb-1 text-secondary">
                    {" "}
                    4. ClickMart eCommerce{" "}
                  </h5>
                  <p className="ps-3 pb-4 caption-carousel">
                    <div className="page-link">
                      {" "}
                      <p>
                        Website:{" "}
                        <a href="https://saniya-shaheed.github.io/clickmart-ecommerce/" className="text-secondary">
                          https://saniya-shaheed.github.io/clickmart-ecommerce/{" "}
                        </a>
                      </p>
                    </div>
                    <ul className="project-ul">
                      <li>
                        Created a <strong>responsive</strong> e-commerce application that fetches
                        product data from the FakeStoreAPI, allowing users to
                        browse products by category, search for items, and view
                        detailed product information.{" "}
                      </li>
                      <li>
                        {" "}
                        To dynamically fetch and display product data integrated 
                        <strong> REST API</strong> using <strong>axios</strong>.{" "}
                      </li>
                      <li>
                        {" "}
                        A <strong>search functionality</strong> to help users find products
                        easily.{" "}
                      </li>
                      <li>
                        {" "}
                        Top and interesting products are displayed prominently
                        to enhance user shopping experience.{" "}
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev text-decoration-none"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span class="carousel-prev-icon" aria-hidden="true">
                &lsaquo;
              </span>
            </a>
            <a
              class="carousel-control-next  text-decoration-none"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span class=" carousel-next-icon" aria-hidden="true">
                &rsaquo;
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
