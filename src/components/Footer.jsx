import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareGithub, faSquareInstagram  } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  const socials = [
    {
      link: 'https://github.com/ecpieritz',
      img: faSquareGithub
    },
    {
      link: 'https://www.linkedin.com/in/ecpieritz/',
      img: faLinkedin
    },
    {
      link: 'https://www.instagram.com/ecpieritz/',
      img: faSquareInstagram
    },
  ]
  return (
    <footer className='fx-footer'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
          <a className='fx-footer__logo' href="/">FinanceX</a>
          </div>
          <div className="col-md-6 fx-footer__text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna.</p>
          </div>
          <div className="col-md-3 fx-footer__socials">
            {socials.map((social,index) => (
              <a href={social.link} target="_blank" rel="noopener noreferrer" key={index}>
                <FontAwesomeIcon icon={social.img} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <hr/>

      <div className='fx-footer__made-by'>
        <h5>Developed with 💙 by <a href="https://www.linkedin.com/in/ecpieritz/" target="_blank" rel="noopener noreferrer">Emilyn C. Pieritz</a></h5>
      </div>
    </footer>
  )
}

export default Footer
