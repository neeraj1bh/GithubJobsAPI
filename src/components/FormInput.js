import React from "react";
import "../styles/FormInput.css";

export default function FormInput({ params, onParamChange }) {
  return (
    <div className="formInput">
      <input
        className="textInput"
        type="text"
        name="description"
        onChange={onParamChange}
        placeholder="Description [ eg: Senior React Developer ]"
      />
      <input
        className="textInput"
        type="text"
        name="location"
        onChange={onParamChange}
        placeholder="Location [ eg: New York ]"
      />
      <div className="checkInput">
        <label for="full_time">Only Full-Time Roles </label>
        <input
          type="checkbox"
          name="full_time"
          onChange={onParamChange}
          id="full-time"
          label="Only Full Time"
        />
      </div>
    </div>
  );
}
