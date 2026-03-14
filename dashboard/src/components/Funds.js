import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <div className="funds-page">
      
      <div className="funds-header">
        <p>Instant, zero-cost fund transfers with UPI</p>
        <div>
          <Link className="btn btn-green">Add funds</Link>
          <Link className="btn btn-blue">Withdraw</Link>
        </div>
      </div>

      <div className="funds-container">

        <div className="fund-card">
          <h3>Equity</h3>

          <div className="fund-row highlight">
            <span>Available margin</span>
            <span>₹4,043.10</span>
          </div>

          <div className="fund-row">
            <span>Used margin</span>
            <span>₹3,757.30</span>
          </div>

          <div className="fund-row">
            <span>Available cash</span>
            <span>₹4,043.10</span>
          </div>

          <hr />

          <div className="fund-row">
            <span>Opening Balance</span>
            <span>₹4,043.10</span>
          </div>

          <div className="fund-row">
            <span>Payin</span>
            <span>₹4,064.00</span>
          </div>

        </div>

        <div className="fund-card center-card">
          <p>You don't have a commodity account</p>
          <Link className="btn btn-blue">Open Account</Link>
        </div>

      </div>
    </div>
  );
};

export default Funds;