import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import ServiceImg from '../assets/img/fx-service__img.png'

function Services() {
  return (
    <section className="fx-services">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <h4>Our Services</h4>
            <h2>
              Real Time <br />
              <span className="fx-text green">Transaction Report</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
              purus sit amet luctus venenatis, lectus magna{" "}
            </p>
            <a className="fx-btn outline" href="#contact">
              Get Started
              <FontAwesomeIcon icon={faArrowRightLong} />
            </a>
          </div>
          <div className="col-md-6">
            <img src={ServiceImg} alt="Visa card over a green circle" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
