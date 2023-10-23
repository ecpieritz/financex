import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";

function AboutModal() {
  return (
    <>
      <button
        type="button"
        class="fx-btn modal-btn"
        data-toggle="modal"
        data-target="#aboutModal"
      >
        <FontAwesomeIcon icon={faSquareArrowUpRight} />
      </button>

      <div
        class="modal fade"
        id="aboutModal"
        tabindex="-1"
        aria-labelledby="aboutModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title" id="aboutModalLabel">
                Checking accounts
              </h3>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutModal;
