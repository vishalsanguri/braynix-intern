import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <>
      <section className="header">
        <div className="header-list">
          <span
            style={{
              marginLeft: "20px",
              color: "#364b60",
              fontSize: "35px",
              fontWeight: "bold",
            }}
          >
            pay
            <span style={{ fontWeight: "normal", color: "#8a949e" }}>api</span>
          </span>
          <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="header-demo-btn">Schedule a Demo</div>
      </section>
    </>
  );
}
