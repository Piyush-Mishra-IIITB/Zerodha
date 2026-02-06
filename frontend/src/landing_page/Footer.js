import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img
              src="media/images/logo.svg"
              style={{ width: "50%" }}
              alt="Logo"
            />
            <p>
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          <div className="col">
            <p>Company</p>
            <span className="d-block text-primary">About</span>
            <span className="d-block text-primary">Products</span>
            <span className="d-block text-primary">Pricing</span>
            <span className="d-block text-primary">Referral programme</span>
            <span className="d-block text-primary">Careers</span>
            <span className="d-block text-primary">Zerodha.tech</span>
            <span className="d-block text-primary">Press & media</span>
            <span className="d-block text-primary">Zerodha cares (CSR)</span>
          </div>

          <div className="col">
            <p>Support</p>
            <span className="d-block text-primary">Contact</span>
            <span className="d-block text-primary">Support portal</span>
            <span className="d-block text-primary">Z-Connect blog</span>
            <span className="d-block text-primary">List of charges</span>
            <span className="d-block text-primary">Downloads & resources</span>
          </div>

          <div className="col">
            <p>Account</p>
            <span className="d-block text-primary">Open an account</span>
            <span className="d-block text-primary">Fund transfer</span>
            <span className="d-block text-primary">60 day challenge</span>
          </div>
        </div>

        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities Pvt.
            Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading through
            Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.:
            INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th
            Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th
            Phase, Bengaluru - 560078, Karnataka, India.
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name, PAN,
            Address, Mobile Number, E-mail ID.
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
