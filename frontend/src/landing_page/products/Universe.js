import React from "react";
import { useNavigate } from "react-router-dom";
function Universe() {
  const navigate = useNavigate();
  return (
    <div className="container mt-5">
      <div className="row text-center">

        <h1>The Zerodha Universe</h1>

        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        {/* Smallcase */}
        <div className="col-md-4 col-6 p-3 mt-5">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase"
            style={{ width: "150px" }}
          />
          <p className="text-small text-muted">
            Curated stock portfolios & thematic investing
          </p>
        </div>

        {/* Streak */}
        <div className="col-md-4 col-6 p-3 mt-5">
          <img
            src="media/images/streakLogo.png"
            alt="Streak"
            style={{ width: "150px" }}
          />
          <p className="text-small text-muted">
            Algo trading & strategy builder platform
          </p>
        </div>

        {/* Sensibull */}
        <div className="col-md-4 col-6 p-3 mt-5">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Sensibull"
            style={{ width: "150px" }}
          />
          <p className="text-small text-muted">
            Options trading & analysis platform
          </p>
        </div>

        {/* Zerodha Fund House */}
        <div className="col-md-4 col-6 p-3 mt-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="Zerodha Fund House"
            style={{ width: "150px" }}
          />
          <p className="text-small text-muted">
            Asset management & mutual fund investments
          </p>
        </div>

        {/* GoldenPi */}
        <div className="col-md-4 col-6 p-3 mt-5">
          <img
            src="media/images/goldenpiLogo.png"
            alt="GoldenPi"
            style={{ width: "150px" }}
          />
          <p className="text-small text-muted">
            Bond & fixed income investment platform
          </p>
        </div>

        {/* Ditto */}
        <div className="col-md-4 col-6 p-3 mt-5">
          <img
            src="media/images/dittoLogo.png"
            alt="Ditto"
            style={{ width: "150px" }}
          />
          <p className="text-small text-muted">
            Simple & honest insurance advisory
          </p>
        </div>

        {/* Button */}
        <div className="col-12 mt-5 mb-5">
          <button className="p-2 btn btn-primary fs-5 "onClick={()=>{
            navigate("/signup");
          }} >
            Signup Now
          </button>
        </div>

      </div>
    </div>
  );
}

export default Universe;
