import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div>
      <section className="header1">
        <div className="header-list">
          <span className="pay-span">
            pay
            <span style={{ fontWeight: "normal", color: "#8a949e" }}>api</span>
          </span>
          <ul>
            <li className="marginLR-40">Pricing</li>
            <li>About</li>
            <li className="marginLR-40">Contact</li>
          </ul>
        </div>
        <div
          style={{
            display: "flex",
            flex: "1",
            columnGap: "10px",
            paddingRight: "40px",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <img
            src="https://img.icons8.com/color/48/000000/facebook-new.png"
            className="facebook-ligo"
          />
          <img
            src="https://img.icons8.com/color/48/000000/twitter.png"
            className="facebook-ligo1"
          />
          <img
            src="https://img.icons8.com/color/48/000000/linkedin.png"
            className="facebook-ligo2"
          />
        </div>
      </section>
    </div>
  );
}


