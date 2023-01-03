import React from "react";
const x = [
  "Strategic funding partners",
  "Implementing partnership",
  "Program involvement",
  "Youth Talent services",
];
const GetInvolved = () => {
  return (
    <div className="get_involved mt-4" id="getinvolve">
      <h4 className="text-center">Get Involved</h4>

      <div className="row">
        <div className="col-sm-6 mb-2">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Program</h4>
              <p>
                Our business model includes the Facilitator Mentorship and Peer
                Education. We provide job creation opportunity of a Facilitator
                mentorship for youth. They are trained to train and mentor
                teenage leaders of Africa.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-tile">Engage</h4>
              <div className="accordion" id="accordionExample1">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      <h6 className="text-center">Ways to engage </h6>
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse  "
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample1"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>Strategic funding partners</li>
                        <li>Implementing partnership</li>
                        <li>Program involvement</li>
                        <li>Youth Talent services</li>
                      </ul>
                      <p>
                        Mabhoyi Foundation is focused on achieving concrete
                        outcomes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mt-3">
          <div className="alert alert-success">
            <h6 className="alert-title">
              We offer donors the opportunity to :
            </h6>
            <ul>
              <li>
                Build your portfolio of impact delivering strategic partnership.
              </li>
              <li>
                Convert your budget and resources into quantifiable social
                impact.
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-12 mb-3">
          <div className="card">
            <div className="card-body row">
              <div className="col-sm-6">
                <img
                  className="img-fluid"
                  src="/images/IMG-20221224-WA0003.jpg"
                  alt="our graduate 3"
                />
              </div>
              <div className="col-sm-6">
                <h5>Our Impact</h5>
                <p>
                  We have developed and empowered more than 1000 young people
                  since May 2021. We are committed to bring about concrete
                  change in our country. Our footprints are visible!{" "}
                </p>
                <h5>A Call to Action : Be part of the change</h5>
                <p>Have a positive impact on our youth and change lives.</p>
                <strong>Be the change you want to see.</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
