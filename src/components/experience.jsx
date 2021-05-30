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
              Implement Restful API with Express.js and MongoDB to process HTTP
              request.
            </li>
            <li>
              Achieve the implementation of the movie page with the filtering,
              searching and sorting functionality in React.
            </li>
            <li>
              Achieve the implementation of register page, login page and logout
              page in React and call the Restful API by using axios library.
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
              Design board, player and different kinds of square classes using
              design pattern and oo concept.
            </li>
            <li>
              Implement different methods for different classes to meet the
              rules of the Game based on the designed API in C++.
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
            <li>Preprocess the dataset using PCA.</li>
            <li>
              Construct the PSO-KNN model with best parameters, classify the HAR
              dataset and compare the results with KNN algorithm.
            </li>
            <li>Improve the accuracy from 98.7% to 100% for HAR dataset.</li>
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
            <li>
              Write python script to parse graph input and implement BFS to find
              shortest path using C++.
            </li>
            <li>
              Achieve multi-process calling fork() and inter-process
              communication calling pipe(), dup2() to connect python script to
              C++ file.
            </li>
            <li>
              Implement different algorithms to solve vertex cover problem in a
              multi-thread way and compare the running time and accuracy.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
