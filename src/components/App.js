import React, { useState, useEffect } from "react";
import useFetchJobs from "./useFetchJobs";
import Job from "./Job";
import Pagination from "./Pagination";
import FormInput from "./FormInput";
import "../styles/App.css";

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);
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

  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
  }

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <div className="navContainer">
        <nav className="navHead">
          <div className="logoTitle">
            <h1>Dev Jobs</h1>
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
      <div className="App">
        <FormInput params={params} onParamChange={handleParamChange} />
        {hasNextPage && !error && (
          <Pagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
        )}
        <div className="allJobs">
          {loading && <h2>Loading...</h2>}
          {error && <h2>Error Try Refresh</h2>}
          {jobs.map((job) => {
            return <Job key={job.id} job={job} theme={theme} />;
          })}
        </div>
        {hasNextPage && !error && (
          <Pagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
        )}
      </div>
    </>
  );
}

export default App;
