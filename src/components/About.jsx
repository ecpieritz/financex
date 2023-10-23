import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import AboutModal from './AboutModal';

function About() {
  return (
    <section className="fx-about">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
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
          <div className="col-lg-3 col-sm-12">
            <hr />
            <p>
              <strong>Checking accounts</strong>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </p>
            <AboutModal />
          </div>
          <div className="col-lg-3 col-sm-12">
            <hr />
            <p>
              <strong>Checking accounts</strong>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </p>
            <AboutModal />
          </div>
          <div className="col-lg-3 col-sm-12">
            <hr />
            <p>
              <strong>Checking accounts</strong>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </p>
            <AboutModal />
          </div>
          <div className="col-lg-3 col-sm-12">
            <hr />
            <p>
              <strong>Checking accounts</strong>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </p>
            <AboutModal />
          </div>
          <div className="col-lg-3 col-sm-12">
            <hr />
            <p>
              <strong>Checking accounts</strong>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </p>
            <AboutModal />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
