import React from 'react'
import mapImg from '../assets/img/fx-benefits__img.png'

function Benefits() {
  return (
    <section className='fx-benefits' id='benefits'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
          <h4>Benefits</h4>
          <h2>We have many users all over the <span className="fx-text green">world</span></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna</p>
          </div>
          <div className="col-md-6">
            <img src={mapImg} alt="World map in dots" />
        </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits
