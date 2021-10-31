import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <>
      <section className="header">
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
        <div className="header-demo-btn">Schedule a Demo</div>
      </section>
    </>
  );
}
