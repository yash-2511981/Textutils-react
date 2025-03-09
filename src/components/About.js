import React from "react";

function About({mode}) {
  return (
    <div>
      <div className={`container my-4 rounded rounded-4 shadow-lg p-3 bg-${mode} text-${mode === "light" ? "black" : "light"}`}>
        <h1 className="mb-4">About TextUtils</h1>

        <div className={`card mb-4 rounded-4 shadow-lg bg-${mode} text-${mode === "light" ? "black" : "light"}`}>
          <div className="card-body">
            <h2 className="card-title">What is TextUtils?</h2>
            <p className="card-text">
              TextUtils is a word counter and character manipulation utility
              which can be used to manipulate your text in the way you want. You
              can remove extra spaces, copy the manipulated text, convert to
              uppercase or lowercase, and much more.
            </p>
          </div>
        </div>

        <div className={`card mb-4 rounded-4 shadow-lg bg-${mode} text-${mode === "light" ? "black" : "light"}`}>
          <div className="card-body">
            <h2 className="card-title">Features</h2>
            <ul className={`list-group list-group-flush ps-5 bg-${mode} text-${mode === "light" ? "black" : "light"}`}>
              <li>Convert text to UPPERCASE</li>
              <li>Convert text to lowercase</li>
              <li>Remove extra spaces</li>
              <li>Copy text to clipboard</li>
              <li>Clear text</li>
              <li>Character and word counter</li>
              <li>Reading time estimator</li>
            </ul>
          </div>
        </div>

        <div className={`card mb-4 rounded-4 shadow-lg bg-${mode} text-${mode === "light" ? "black" : "light"}`}>
          <div className="card-body">
            <h2 className="card-title">How to Use</h2>
            <p className="card-text">
              Simply enter your text in the text area on the home page and use
              the buttons to perform various operations on your text. The
              statistics section below the text area will show you the word
              count, character count, and estimated reading time.
            </p>
          </div>
        </div>

        <div className={`card rounded-4 shadow-lg bg-${mode} text-${mode === "light" ? "black" : "light"}`}>
          <div className="card-body">
            <h2 className="card-title">Privacy</h2>
            <p className="card-text">
              TextUtils is a browser-based application. Your text is processed
              entirely in your browser and is never sent to any server. We don't
              store any of your data, ensuring complete privacy for all your
              text operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
