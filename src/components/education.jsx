import React, { Component } from "react";

const Education = () => {
  return (
    <div class="row  section">
      <div class="col-8 text-left">
        <h1 style={{ fontWeight: "bold" }}>Education</h1>
      </div>
      <div class="col-8 text-left" style={{ paddingTop: 100 }}>
        <div>
          <h2 style={{ fontWeight: "bold" }}>
            Sichuan University
            <span style={{ paddingLeft: 230, fontSize: 20 }}>
              Jul 2013 - Jul 2017
            </span>
          </h2>
        </div>

        <p style={{ fontSize: 20, paddingTop: 5 }}>
          Bachelor of Engineering in Process Equipment and Control Engineering
        </p>
      </div>

      <div class="col-8 text-left" style={{ paddingTop: 30 }}>
        <div>
          <h2 style={{ fontWeight: "bold" }}>
            University of Waterloo
            <span style={{ paddingLeft: 159, fontSize: 20 }}>
              May 2019 - Dec 2020
            </span>
          </h2>
        </div>

        <p style={{ fontSize: 20, paddingTop: 5 }}>
          Master of Engineering in Mechanical and Mechatronics Engineering
        </p>
      </div>
    </div>
  );
};

export default Education;
