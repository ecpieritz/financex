import React from 'react'
import Mary from '../assets/img/fx-customer__mary.jpg'
import John from '../assets/img/fx-customer__john.jpg'
import Sarah from '../assets/img/fx-customer__sarah.jpg'

function CustomersCarousel() {
  return (
    <div id="customersCarousel" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#customersCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#customersCarousel" data-slide-to="1"></li>
    <li data-target="#customersCarousel" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item fx-customers__carousel__item active">
      <div className="row">
        <div className="col-md-4">
          <img src={Mary} alt="Mary Johnson" />
        </div>
        <div className="col-md-8 fx-customers__carousel__item__person">
            <h4> "I cannot praise FinanceX enough! As a small business owner, their support has been a game-changer. They simplified the complex world of corporate finance and offered us a lifeline when we needed capital. Their competitive rates and superb customer service make them a go-to choice for businesses like mine."</h4>
            <p className='fx-customers__carousel__item__person__name'>Mary Johnson</p>
            <p className="fx-customers__carousel__item__person__profission">Small Business Owner</p>
        </div>
      </div>
      
    </div>
    <div class="carousel-item fx-customers__carousel__item">
      <div className="row">
        <div className="col-md-4">
          <img src={John} alt="John Smith" />
        </div>
        <div className="col-md-8 fx-customers__carousel__item__person">
          <h4>FinanceX has been a trusted partner for our mid-sized company. Their financial expertise is top-notch. They helped us streamline our operations, secure necessary funding, and navigate financial challenges. Their commitment to our success is evident in every interaction.</h4>
          <p className='fx-customers__carousel__item__person__name'>John Smith</p>
          <p className="fx-customers__carousel__item__person__profission">CFO of a Mid-sized Company</p>
        </div>
      </div>

    </div>
    <div class="carousel-item fx-customers__carousel__item">
      <div className="row">
        <div className="col-md-4">
          <img src={Sarah} alt="Sara Davis" />
        </div>
        <div className="col-md-8 fx-customers__carousel__item__person">
          <h4>FinanceX is not just a financial service provider; they are strategic partners in our corporate journey. Their innovative solutions, tailored to our unique needs, have propelled us to new heights. With FinanceX, we have a dependable ally that consistently delivers results and contributes to our long-term success.</h4>
          <p className='fx-customers__carousel__item__person__name'>Sarah Davis</p>
          <p className="fx-customers__carousel__item__person__profission">CEO of a Large Corporation</p>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default CustomersCarousel
