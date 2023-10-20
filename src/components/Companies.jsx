import React from 'react'
import adobeImg from '../assets/img/fx-companies__adobe.svg'
import amazonImg from '../assets/img/fx-companies__amazon.png'
import googleImg from '../assets/img/fx-companies__google.svg'
import paypalImg from '../assets/img/fx-companies__paypal.svg'
import webflowImg from '../assets/img/fx-companies__webflow.svg'

function Companies() {
  const companies =[
    {
      name: 'Paypal',
      link: paypalImg
    },
    {
      name: 'Webflow',
      link: webflowImg
    },
    {
      name: 'Google',
      link: googleImg
    },
    {
      name: 'Amazon',
      link: amazonImg
    },
    {
      name: 'Adobe',
      link: adobeImg
    },

  ]
  return (
    <section className='fx-companies'>
      <div className="container-fluid">
        {companies.map(companie => (
          <img src={companie.link} alt={companie.name} />
        ))}
      </div>
    </section>
  )
}

export default Companies
