import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 mb-4">
          To create a ticket, select a relevant topic
        </h1>

        {/* COLUMN 1 */}
        <div className="col-4 p-4">
          <h4>
            <i className="fa fa-plus-circle"></i> Account Opening
          </h4>

          <a href="/support/account-opening/online">Online Account Opening</a><br />
          <a href="/support/account-opening/offline">Offline Account Opening</a><br />
          <a href="/support/account-opening/nri">NRI Account Opening</a><br />
          <a href="/support/account-opening/company">Company, Partnership & HUF</a><br />
          <a href="/support/account-opening/charges">Charges at Zerodha</a><br />
        </div>

        {/* COLUMN 2 */}
        <div className="col-4 p-4">
          <h4>
            <i className="fa fa-plus-circle"></i> Your Zerodha Account
          </h4>

          <a href="/support/account/profile">Profile & Verification</a><br />
          <a href="/support/account/password">Password & Security</a><br />
          <a href="/support/account/segment">Adding / Removing Segments</a><br />
          <a href="/support/account/nominee">Nomination</a><br />
          <a href="/support/account/bank">Bank Account Change</a><br />
        </div>

        {/* COLUMN 3 */}
        <div className="col-4 p-4">
          <h4>
            <i className="fa fa-plus-circle"></i> Trading & Platforms
          </h4>

          <a href="/support/trading/kite">Kite Platform</a><br />
          <a href="/support/trading/orders">Placing Orders</a><br />
          <a href="/support/trading/margin">Margins</a><br />
          <a href="/support/trading/holdings">Holdings & Positions</a><br />
          <a href="/support/trading/charts">Charts & Tools</a><br />
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
