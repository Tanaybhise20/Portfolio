import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
  <nav className="navbar navbar-expand-lg custom-navbar bg-primary-subtle min-vh-10">
      <div className="container">

        {/* Logo / Brand */}
        <Link className="navbar-brand" to="/">
          Tanay <span className="brand-highlight">Bhise</span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/projects">Projects</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/certificates">
                Certificates
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/skills">Skills</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/per-info">My Info</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link contact-btn" to="/contact-me">
                Contact Me →
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar