import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div>
      <section
        style={{ backgroundColor: "#1C262F", marginBottom: "0px" }}
        className="header"
      >
        <div className="header-list">
          <span
            style={{
              marginLeft: "20px",
              color: "white",
              fontSize: "35px",
              fontWeight: "bold",
            }}
          >
            pay
            <span style={{ fontWeight: "normal", color: "#8a949e" }}>api</span>
          </span>
          <ul style={{ flex: "0" }}>
            <li style={{ margin: "0px 20px" }}>Pricing</li>
            <li>About</li>
            <li style={{ margin: "0px 20px" }}>Contact</li>
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
            width="30px"
            height="30px"
          />
          <img
            src="https://img.icons8.com/color/48/000000/twitter.png"
            width="30px"
            height="30px"
          />
          <img
            src="https://img.icons8.com/color/48/000000/linkedin.png"
            width="30px"
            height="30px"
          />
        </div>
      </section>
    </div>
  );
}
