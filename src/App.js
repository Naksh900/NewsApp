// import logo from './logo.svg';
import "./App.css";

import Navbar from "./components/Navbar.js";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

// import React, { Component } from "react";
import News from "./components/News.js";

const App = (props) => {
  const apiKey = process.env.REACT_APP_NEWS_API;

  const myStyle = {
    color: "white",
    backgroundColor: "#532920",
    padding: "10px",
    fontFamily: "'sans-serif"
  }

  

  return (
    <div style={myStyle}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            exact
            path="/general"
            element={
              <News
                key="general"
                pageSize={9}
                country="us"
                apiKey={apiKey}
                category="general"
                style={myStyle}
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                key="business"
                pageSize={9}
                country="us"
                apiKey={apiKey}
                category="business"
                style={myStyle}
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="entertainment"
                pageSize={9}
                country="us"
                apiKey={apiKey}
                category="entertainment"
                style={myStyle}
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                key="health"
                pageSize={9}
                country="us"
                apiKey={apiKey}
                category="health"
                style={myStyle}
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                key="science"
                pageSize={9}
                country="us"
                apiKey={apiKey}
                category="science"
                style={myStyle}
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                key="sports"
                pageSize={9}
                country="us"
                apiKey={apiKey}
                category="sports"
                style={myStyle}
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                key="technology"
                pageSize={9}
                country="us"
                apiKey={apiKey}
                category="technology"
                style={myStyle}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
