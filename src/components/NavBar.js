import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [theme, setTheme] = useState(getStoredTheme());

  function getStoredTheme() {
    let theme = "dark-theme";
    if (localStorage.getItem("theme")) {
      theme = localStorage.getItem("theme");
    }
    return theme;
  }

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="navContainer">
      <nav className="navHead">
        <div className="logoTitle">
          <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
            <h1>Git Jobs</h1>
          </Link>
        </div>
        <div className="switch-wrapper">
          <div className="sun"></div>
          <div className="toggle-wrapper">
            <input
              id="switch"
              type="checkbox"
              checked={theme === "dark-theme" ? true : false}
              onChange={toggleTheme}
            />
            <label htmlFor="switch" id="toggle">
              Toggle
            </label>
          </div>
          <div className="moon"></div>
        </div>
      </nav>
    </div>
  );
}
