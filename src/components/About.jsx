import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <section className="fx-about">
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <h4>About Us</h4>
            <h2>
              Browse our
              <br />
              services & <span className="fx-text green">offerings</span>
            </h2>
            <a className="fx-btn outline" href="#contact">
              Get Started
              <FontAwesomeIcon icon={faArrowRightLong} />
            </a>
          </div>
          <div className="col-3">
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
