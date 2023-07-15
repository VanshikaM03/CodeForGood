import React from "react";
import "./Aboutus.css";

function Aboutus() {
  return (
    <div className="container_abc">
      <div className="text">
        <div className="card">
          <a className="card1" href="#">
            <p>
              <b>Email:</b>
            </p>
            <p className="small">
              <b>contact@bhumi.ngo</b>
            </p>
            <div className="go-corner" href="#">
              <div className="go-arrow">→</div>
            </div>
          </a>
        </div>
        <div className="card">
          <a className="card1" href="#">
            <p>
              <b>Contact:</b>
            </p>
            <p className="small">
              <b>8754413255</b>
            </p>
            <div className="go-corner" href="#">
              <div className="go-arrow">→</div>
            </div>
          </a>
        </div>
        <div className="card">
          <a className="card1" href="#">
            <p>
              <b>Address:</b>
            </p>
            <p className="small">
              <b>
                3/2, Karpaga Vinayagar Koil Street, Alandur, Chennai – 600016,
                India
              </b>
            </p>
            <div className="go-corner" href="#">
              <div className="go-arrow">→</div>
            </div>
          </a>
        </div>
      </div>
      <div className="Maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2709.476636298968!2d80.20108387948649!3d13.002966846670478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b3d0b53375%3A0x473d1361ea86fc42!2sBhumi!5e0!3m2!1sen!2sin!4v1689440788324!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Aboutus;
