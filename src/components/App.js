import React, { useState } from "react";
import useFetchJobs from "./useFetchJobs";
import Job from "./Job";
import Pagination from "./Pagination";
import FormInput from "./FormInput";
import "../styles/App.css";

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);

  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
  }
  return (
    <div className="App">
      <h1>Dev Jobs</h1>
      <FormInput params={params} onParamChange={handleParamChange} />
      <div className="containerAll">
        <Pagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
        {loading && <h2>Loading...</h2>}
        {error && <h2>Error Try Refresh</h2>}
        {jobs.map((job) => {
          return <Job key={job.id} job={job} />;
        })}
        <Pagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      </div>
    </div>
  );
}

export default App;
