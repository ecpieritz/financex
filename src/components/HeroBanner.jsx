import React from 'react'
import img from '../assets/img/fx-banner__img.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

function HeroBanner() {
  return (
    <div className='fx-banner'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <h4 className='fx-text green'>Welcome! Future Platform</h4>
            <h1>The World's Most Modern Card <span className='fx-text green'>Platform</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>
            <a className='fx-btn' href="#about">
              Get Started
              <FontAwesomeIcon icon={faArrowRightLong} />
            </a>
          </div>
          <div className="col-6">
            <img className='fx-banner__img' src={img} alt="credit card with green circle" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
