import React from "react";

function BenefitsNumbers() {
  return (
    <div className="fx-benefits__numbers row">
      <div className="col-md-4">
        <h3>10M<span className="fx-text green">+</span></h3>
        <p className="fx-text green">User active</p>
      </div>
      <div className="col-md-4">
        <h3>30<span className="fx-text green">+</span></h3>
        <p className="fx-text green">Countries</p>
      </div>
      <div className="col-md-4">
        <h3>$50M<span className="fx-text green">+</span></h3>
        <p className="fx-text green">Transictions</p>
      </div>
    </div>
  );
}

export default BenefitsNumbers;
