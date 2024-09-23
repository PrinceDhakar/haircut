"use client";
import React, { useEffect, useState } from "react";
import { FaCut, FaArrowRight, FaAngleDown } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Ensure router is only available on the client-side
  }, []);

  const router = mounted ? useRouter() : null; // Only invoke useRouter on the client

  const [isSignUp, setIsSignUp] = useState(false);

  // Function to toggle between login and signup modes
  const toggleMode = () => {
    setIsSignUp(!isSignUp);
  };
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-secondary navbar-dark  py-lg-0 px-lg-4 wow fadeIn sticky-top"
        data-wow-delay="0.1s"

      >
        <Link href="/Home" className="navbar-brand ms-4 ms-lg-0">
          <h1 className="mb-0 text-primary text-uppercase">
            <FaCut className="me-3" />
            HairCut
          </h1>
        </Link>
        <div className="d-flex ms-auto">
          <button
            type="button"
            className="navbar-toggler me-2"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link
              href="/Home"
              className={`nav-item nav-link ${
                router?.pathname === "/Home" ? "active" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/About"
              className={`nav-item nav-link ${
                router?.pathname === "/About" ? "active" : ""
              }`}
            >
              About
            </Link>
            <Link
              href="/Services"
              className={`nav-item nav-link ${
                router?.pathname === "/Services" ? "active" : ""
              }`}
            >
              Service
            </Link>
            <div className="nav-item dropdown">
              <Link href="#" className="nav-link dropdown-toggle">
                Pages <FaAngleDown className="rotate-arrow" />
              </Link>
              <div className="dropdown-menu m-0">
                <Link
                  href="/Price"
                  className={`dropdown-item ${
                    router?.pathname === "/Price" ? "active" : ""
                  }`}
                >
                  Pricing Plan
                </Link>
                <Link
                  href="/Team"
                  className={`dropdown-item ${
                    router?.pathname === "/Team" ? "active" : ""
                  }`}
                >
                  Our Barber
                </Link>
                <Link
                  href="/Workinghour"
                  className={`dropdown-item ${
                    router?.pathname === "/Workinghour" ? "active" : ""
                  }`}
                >
                  Working Hours
                </Link>
                <Link
                  href="/Testimonial"
                  className={`dropdown-item ${
                    router?.pathname === "/Testimonial" ? "active" : ""
                  }`}
                >
                  Testimonial
                </Link>
              </div>
            </div>
            <Link
              href="/Contact"
              className={`nav-item nav-link ${
                router?.pathname === "/Contact" ? "active" : ""
              }`}
            >
              Contact
            </Link>
            {/* Login link */}
            <Link
              href="#"
              className="nav-item nav-link"
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
            >
              Login
            </Link>
          </div>
        </div>
        <div>
          <Link
            href="/Appointment"
            className="btn btn-primary rounded-0 py-2 px-lg-4 d-none d-lg-block"
          >
            Appointment
            <FaArrowRight className="ms-3 rotate-arrow" />
          </Link>
        </div>
      </nav>

      {/* Bootstrap Modal for Login */}
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="loginModalLabel">
                {isSignUp ? "Sign Up" : "Login"}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* Login/Sign-up Form */}
              <form>
                {/* Username Field - Only show in Sign-up mode */}
                {isSignUp && (
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Enter username"
                      required
                    />
                  </div>
                )}

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                    required
                  />
                </div>

                {/* Confirm Password Field - Only show in Sign-up mode */}
                {isSignUp && (
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      placeholder="Confirm password"
                      required
                    />
                  </div>
                )}

                <button type="submit" className="btn btn-primary w-100">
                  {isSignUp ? "Sign Up" : "Login"}
                </button>
              </form>
            </div>

            <div className="modal-footer">
              <p className="text-center">
                {isSignUp ? (
                  <>
                    Already have an account?{" "}
                    <a href="#" onClick={toggleMode}>
                      Login
                    </a>
                  </>
                ) : (
                  <>
                    Don't have an account?{" "}
                    <a href="#" onClick={toggleMode}>
                      Sign Up
                    </a>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
