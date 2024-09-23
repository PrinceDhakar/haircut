import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

const AppointmentForm = () => {


  
  return (


    
    <div className="container mt-5">
      <div className="card shadow">


      <div class="container text-center py-5">
      <h1 class="display-3 text-white text-uppercase mb-3 animated slideInDown">
        Appointment
      </h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol class="breadcrumb justify-content-center text-uppercase mb-0">
          <li class="breadcrumb-item">
            <Link class="text-white" href="/Home">
              Home
            </Link >
          </li>
   
          <li
            class="breadcrumb-item text-primary active"
            aria-current="page"
          >
            Appointment
          </li>
        </ol>
      </nav>
    </div>


        <div className="card-header bg-danger text-white text-center">
          <h3> Appointment Form</h3>
        </div>
        <div className="card-body">
          <form >
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input type="text" className="form-control" id="firstName" placeholder="First Name" />
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="lastName" placeholder="Last Name" />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                <input type="text" className="form-control" id="phoneNumber" placeholder="Please enter a valid phone number" />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="example@example.com" />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="streetAddress" className="form-label">Street Address</label>
              <input type="text" className="form-control" id="streetAddress" placeholder="Street Address" />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" id="streetAddress2" placeholder="Street Address Line 2" />
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <input type="text" className="form-control" id="city" placeholder="City" />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" id="state" placeholder="State/Province" />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-4">
                <label htmlFor="appointmentDate" className="form-label">Preferred Appointment Date</label>
                <input type="text" className="form-control" id="appointmentDateMonth" placeholder="Month" />
              </div>
              <div className="col-md-4">
                <input type="text" className="form-control mt-4" id="appointmentDateDay" placeholder="Date" />
              </div>
              <div className="col-md-4">
                <input type="text" className="form-control mt-4" id="appointmentDateYear" placeholder="Year" />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="startTime" className="form-label">Time</label>
                <input type="text" className="form-control" id="startTime" placeholder="Start" />
              </div>
              <div className="col-md-6">
                <label htmlFor="endTime" className="form-label invisible">End Time</label>
                <input type="text" className="form-control mt-2" id="endTime" placeholder="End" />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="services" className="form-label">What services are you interested in?</label>
              <textarea className="form-control" id="services" rows="3"></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
       
      </div>
    </div>
  );
};

export default AppointmentForm;
