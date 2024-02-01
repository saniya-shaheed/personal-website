import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function Contact() {
  return (
    <section id="contact-section" className="contact-section">
        <Navbar />
        <div className="container">
          <h1 className='display-3 p-5 pb-1 pt-md-3 align-items-center justify-content-start d-flex'>
            <strong>Contact </strong>
          </h1>
          <footer className='blockquote-footer ps-5'>Looking forward to hear from you</footer>
          <div className="row">
            <div className="col-md-4 p-5">
              <h6 className='pt-3 pt-md-4 text-dark'> Phone </h6>
              +971-58-1253582
              <h6 className='pt-3 pt-md-4 text-dark'> E-mail </h6>
              <a href="mailto:saniyatp30@gmail.com" className=' text-secondary'>
                saniyatp30@gmail.com
              </a>
            </div>
            <div className="col-md-8 p-3">
              <form>
                <div className="d-md-flex">
                  <div class="form-group p-2 col-md-6">
                    <label for="exampleFormControlInput1"> First Name </label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" />
                  </div>
                  <div class="form-group p-2 col-md-6">
                    <label for="exampleFormControlInput1">Second Name</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" />
                  </div>
                </div>
                <div className="d-md-flex">
                  <div class="form-group p-2 col-md-6">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" />
                  </div>
                  <div class="form-group p-2 col-md-6">
                    <label for="exampleFormControlInput1">Subject</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" />
                  </div>
                </div>
                <div className="d-lg-flex">
                  <div class="form-group p-2 col-lg-9 col-xl-10">
                    <label for="exampleFormControlTextarea1">Your Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                  </div>
                  <div className="p-1 col-lg-3 col-xl-2 pt-lg-4 contact-section-button">
                    <button type="submit" class="btn w-lg-100 btn-secondary rounded-circle contact-button">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
    </section>
  )
}

export default Contact
