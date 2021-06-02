import React, { Component } from "react";

const Experience = () => {
  return (
    <div class="row  section">
      <div class="col-10 text-left">
        <h1 style={{ fontWeight: "bold" }}>Project Experience</h1>
      </div>
      <div class="col-10 text-left" style={{ paddingTop: 30 }}>
        <div>
          <h5 style={{ fontWeight: "bold" }}>
            Movie Rental Web Application, Waterloo, Canada
            <span style={{ paddingLeft: 320, fontSize: 20 }}>
              Jan. 2021 – Apr. 2020
            </span>
          </h5>
          <ul>
            <li>
              Implemented Restful API in Express.js to process HTTP requests,
              achieving CRUD operations for MongoDB.
            </li>
            <li>
              Implemented front end part in React, achieving showing list of
              movies, filtering movies, searching and sorting movies,
              registering and loging in/out functions.
            </li>
          </ul>
        </div>
      </div>

      <div class="col-10 text-left" style={{ paddingTop: 30 }}>
        <div>
          <h5 style={{ fontWeight: "bold" }}>
            Student Management System, Waterloo, Canada
            <span style={{ paddingLeft: 360, fontSize: 20 }}>
              Jan. 2021 – Apr. 2020
            </span>
          </h5>
          <ul>
            <li>
              Building Restful API using SpringBoot and Use Spring Data JPA to
              implement data access layer (MySQL).
            </li>
            <li>Design and built the student list page in React.</li>
            <li>
              Implement the same web application using different java
              technologies.
            </li>
            <li>
              MVC and JDBC: JSP-Servlet-JDBC SpringMVC and Spring Data JPA
              SpringMVC and Hibernate
            </li>
          </ul>
        </div>
      </div>

      <div class="col-10 text-left" style={{ paddingTop: 30 }}>
        <div>
          <h5 style={{ fontWeight: "bold" }}>
            Monopoly Game Development , Waterloo, Canada
            <span style={{ paddingLeft: 340, fontSize: 20 }}>
              Sept. 2020 – Dec. 2020
            </span>
          </h5>
          <ul>
            <li>
              Designed board, player and different kinds of building classes
              based on design pattern and oo concept.
            </li>
            <li>
              Implemented required methods for above classes to achieve the
              rules of the Monopoly Game in C++.
            </li>
          </ul>
        </div>
      </div>

      <div class="col-10 text-left" style={{ paddingTop: 30 }}>
        <div>
          <h5 style={{ fontWeight: "bold" }}>
            Human Activity Recognition, Waterloo, Canada
            <span style={{ paddingLeft: 350, fontSize: 20 }}>
              Jan. 2020 – Mar. 2020
            </span>
          </h5>
          <ul>
            <li>Preprocessed the dataset using PCA.</li>
            <li>
              Constructed the PSO-KNN model with best parameters to classify the
              HAR dataset and compared the results with KNN algorithm.
            </li>
            <li>Improved the accuracy from 98.7% to 100% for HAR dataset.</li>
          </ul>
        </div>
      </div>
      <div class="col-10 text-left" style={{ paddingTop: 30 }}>
        <div>
          <h5 style={{ fontWeight: "bold" }}>
            IoT Traffic Anomalies Detection System, Waterloo, Canada
            <span style={{ paddingLeft: 350, fontSize: 20 }}>
              Apr. 2020 – Aug. 2020
            </span>
          </h5>
          <ul>
            <li>
              Performed dimension reduction and normalization on
              SimpleHome_XCS7_Security_Camera dataset (BASHLITE, Mirai, no
              infection).
            </li>
            <li>
              Tuned parameters for DBSCAN and Kmeans to visualize the results on
              the dataset and explored the principles differences between these
              two algorithms.
            </li>
            <li>Calculated error rate and drew confusion matrix.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
