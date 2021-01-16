import React, { useState, useEffect } from "react";

import "../styles/FormInput.css";

export default function FormInput({ onParamChange }) {
  const [fulltime, setFulltime] = useState(getStoredState());
  function getStoredState() {
    //Default off becauseserver returns Fulltime and Part time
    let fulltime = "off";
    if (localStorage.getItem("fulltime")) {
      fulltime = localStorage.getItem("fulltime");
    }
    return fulltime;
  }

  const toggleFullTime = () => {
    if (fulltime === "on") {
      setFulltime("off");
    } else {
      setFulltime("on");
    }
  };

  useEffect(() => {
    localStorage.setItem("fulltime", fulltime);
  }, [fulltime]);

  const handleClick = (e) => {
    onParamChange(e);
    toggleFullTime();
  };
  return (
    <>
      <div className="formInput">
        <input
          className="textInput"
          type="text"
          name="description"
          onChange={onParamChange}
          placeholder="Description [ eg: Senior React Developer ]"
        />

        <button
          className="buttonInput"
          onClick={handleClick}
          label="Only Full Time"
        >
          {localStorage.getItem("fulltime") === "off"
            ? "Full Time & Part Time"
            : "Full Time"}
        </button>
        <input
          className="textInput"
          type="text"
          name="location"
          onChange={onParamChange}
          placeholder="Location [ eg: New York ]"
        />
      </div>
    </>
  );
}
