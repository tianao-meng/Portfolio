import React, { Component } from "react";

const Work = () => {
  return (
    <div class="row  section">
      <div class="col-10 text-left">
        <h1 style={{ fontWeight: "bold" }}>Work Experience</h1>
      </div>
      <div class="col-10 text-left" style={{ paddingTop: 30 }}>
        <div>
          <h5 style={{ fontWeight: "bold" }}>
            Midea Group Intern at Washing Machine Department
            <span style={{ paddingLeft: 300, fontSize: 20 }}>
              Jan. 2017 – Mar. 2018
            </span>
          </h5>
          <ul>
            <li>
              Collecting sales data of all Midea Group and Haier washing
              machines models on Tao Bao and JD.
            </li>
            <li>
              Processed collected sales data of different price range using
              Excel.
            </li>
          </ul>
        </div>
      </div>

      <div class="col-10 text-left" style={{ paddingTop: 30 }}>
        <div>
          <h5 style={{ fontWeight: "bold" }}>
            Project Assistant at Herrenknecht AG
            <span style={{ paddingLeft: 434, fontSize: 20 }}>
              Sept. 2017 – Dec. 2018
            </span>
          </h5>
          <ul>
            <li>
              Organized the project data, collected and sorted all kinds of
              documents formed in the project process (sort out parts list,
              delivery list, contract printing, signature and seal, etc.), and
              filed them
            </li>
            <li>
              Coordinated with the project engineer or project manager to clean
              up the material and cargo delivery. Tracking software AS4008 and
              ACCPPAC
            </li>
            <li>
              Other project related affairs assigned by project manager or
              project engineer
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Work;