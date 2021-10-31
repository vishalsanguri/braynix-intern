import React from "react";
import "./Main.css";
import Mobilemessage from "../Assets/mobileMessage.PNG";
import Google from "../Assets/Google-Logo.wine.svg";
import Hp from "../Assets/hewlett-packard-2.svg";
import Microsoft from "../Assets/Microsoft-Logo.wine.svg";
import Nvidia from "../Assets/nvidia.svg";
import Oracle from "../Assets/oracle-2.svg";
import Snippit from "../Assets/Capture.PNG";
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
      {/* <div className="main-compart2">
        <div className="absolute-con1"></div>
        <div className="desc">
          <h1>Who we work with</h1>
          <br />
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Distinctio, sed ut laboriosam eius amet fugiat labore architecto
            tenetur quia dignissimos est harum hic ratione perferendis sint
            error at ipsam maxime.
          </span>
          <br />
          <br />
          <br />
          <br />
          <span className="button">About us</span>
        </div>
        <div className="compant-logo">
          <div>
            <img src={Google} alt="google" width="100px" height="50px" />
            <img src={Hp} alt="google" width="100px" height="50px" />
            <img src={Microsoft} alt="google" width="100px" height="50px" />
          </div>
          <div>
            <img src={Nvidia} alt="google" width="100px" height="50px" />
            <img src={Oracle} alt="google" width="100px" height="50px" />
            <img src={Tesla} alt="google" width="100px" height="50px" />
          </div>
        </div>
      </div>
      <div className="main-compart3">
        <img
          src={Snippit}
          alt="image"
          width="50%"
          style={{ borderRadius: "20px" }}
        />
        <div>
          <h2>Easy to Implement</h2>
          <br />
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            illo, voluptatum iusto eaque voluptas dignissimos itaque temporibus
            illum reprehenderit facere.
          </span>
        </div>
      </div>
      <div className="main-compart3">
        <div style={{ width: "40%" }}>
          <h2>Simple UI & UX</h2>
          <br />
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
            corrupti, veniam commodi voluptate veritatis id officiis eius
            repudiandae assumenda nihil. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Explicabo sint, accusamus culpa nesciunt sequi
            perspiciatis optio atque accusantium libero voluptatum error nam
            fuga ex repellat autem quos id dolorum maxime. Neque vitae quae
            inventore unde odio voluptas quam optio, minus porro et vel quia
            incidunt maxime veniam error nam libero quod, alias nemo! Assumenda,
            perferendis sunt voluptatum cumque eum nemo hic! Eum ut dolorem,
            asperiores error harum praesentium. Quis quisquam incidunt rerum,
            neque rem totam hic iste dolores vel, porro maiores laborum quod
            sunt culpa magnam itaque vitae sint nihil ex accusantium tempora
            exercitationem sequi? Hic quibusdam reiciendis aut itaque?
          </span>
        </div>
        <div className="mobile-img"></div>
        <div className="absolute-con"></div>
      </div>
      <div className="main-compart3">
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
      <div className="main-compart3">
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
