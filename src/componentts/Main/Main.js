import React from "react";
import "./Main.css";
import Mobilemessage from "../Assets/mobileMessage.PNG";
import Google from "../Assets/Google-Logo.wine.svg";
import Hp from "../Assets/hewlett-packard-2-logo-svg-vector.svg";
import Microsoft from "../Assets/Microsoft-Logo.wine.svg";
import Nvidia from "../Assets/Nvidia-White-Horizontal-Logo.wine.svg";
import Oracle from "../Assets/oracle-6-logo-svg-vector.svg";
import Snippit from "../Assets/code.PNG";
import Tesla from "../Assets/Tesla,_Inc.-Wordmark-Black-Logo.wine.svg";

export default function Main() {
  return (
    <>
      <div className="main-compart1">
        <div className="text">
          <span>
            Start building <br /> with our Apis for <br /> absolutely free.
          </span>
          <div className="input-container">
            <input type="text" placeholder="Enter Email Address" />
            <div className="absolute-button">
              <div className="header-demo-btn">Schedule a Demo</div>
            </div>
          </div>
          <span className="normal-font">
            Have any questions?
            <span style={{ textDecoration: "underline" }}>Contact Us</span>
          </span>
        </div>
        <div className="mobile-img">
          <img src={Mobilemessage} alt="message" className="message-mobile" />
        </div>
      </div>
      <div className="main-compart2">
        <div className="absolute-con1"></div>
        <div className="desc">
          <h2>Who we work with</h2>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Distinctio, sed ut laboriosam eius amet fugiat labore architecto
            tenetur quia dignissimos est harum hic ratione perferendis sint
            error at ipsam maxime.
          </span>
          <div className="button">About us</div>
        </div>
        <div className="compant-logo">
          <div className="logos">
            <img src={Google} alt="google" className="logo-manager" />
            <img src={Hp} alt="google" className="logo-manager" />
            <img src={Microsoft} alt="google" className="logo-manager" />
          </div>
          <div className="logos1">
            <img src={Nvidia} alt="google" className="logo-manager" />
            <img src={Oracle} alt="google" className="logo-manager" />
            <img src={Tesla} alt="google" className="logo-manager" />
          </div>
        </div>
      </div>
      <div className="main-compart3">
        <div className="snippit-image">
          <img src={Snippit} alt="image" className="image-snipppit" />
        </div>
        <div className="easy-text">
          <h2>Easy to Implement</h2>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            illo, voluptatum iusto eaque voluptas dignissimos itaque temporibus
            illum reprehenderit facere.
          </span>
        </div>
      </div>
      <div className="main-compart3 alignitem">
        <div className="simple-part">
          <h2>Simple UI & UX</h2>
          <br />
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
            corrupti, veniam commodi voluptate veritatis id officiis eius
            repudiandae assumenda nihil.
          </span>
        </div>
        <div className="mobile-img1"></div>
        <div className="absolute-con2"></div>
      </div>
      <div className="main-compart3 newcompart">
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              margin: "auto",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "blue",
            }}
          ></div>
          <br />
          <h3>Personal Finance</h3>
          <br />
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
            possimus
          </span>
        </div>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              margin: "auto",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "blue",
            }}
          ></div>
          <br />
          <h3>Banking & Coverage</h3>
          <br />
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
            possimus
          </span>
        </div>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              margin: "auto",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "blue",
            }}
          ></div>
          <br />
          <h3>Consumer Payments</h3>
          <br />
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
            possimus
          </span>
        </div>
      </div>
      {/* <div className="main-compart3">
        <div style={{ width: "50%" }}>
          <h2>Ready to start?</h2>
        </div>
        <div className="input-container">
          <input type="text" placeholder="Enter Email Address" />
          <div className="absolute-button">
            <div className="header-demo-btn">Schedule a Demo</div>
          </div>
        </div>
      </div> */}
    </>
  );
}
