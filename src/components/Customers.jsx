import React from 'react'
import CustomersCarousel from './CustomersCarousel'

function Customers() {
  return (
    <section className="fx-customers" id='customers'>
      <div className="container-fluid">
        <h4>Our Costumers</h4>
        <h2>Global businesses<br/>
          love FinanceX</h2>  

        <CustomersCarousel />
      </div>
    </section>
  )
}

export default Customers
