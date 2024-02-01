import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header>
            <nav class="navbar navbar-expand-lg p-3">
                <div class="container-fluid ">
                    <Link to="/" class="navbar-brand p-1 pt-3 ms-md-5">
                        <h2>Saniya TP</h2>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-secondary">
                            <li class="nav-item p-1 border-end resume-link">
                            <Link to="/resume" className='text-decoration-none text-secondary p-3'>Resume</Link>
                            </li>
                            <li class="nav-item p-1 border-end">
                            <Link to="/skills" className='text-decoration-none text-secondary p-3'>Skills</Link>
                            </li>
                            <li class="nav-item p-1 border-end">
                            <Link to="/projects" className='text-decoration-none text-secondary p-3'>Projects</Link>
                            </li>
                            <li class="nav-item p-1">
                            <Link to="/contact" className='text-decoration-none text-secondary p-3'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
  )
}

export default Navbar
