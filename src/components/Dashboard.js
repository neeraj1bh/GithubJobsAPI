import React, { useState } from "react";
import Job from "./Job";
import useFetchJobs from "./useFetchJobs";

import Pagination from "./Pagination";
import FormInput from "./FormInput";
import Error from "./Error";
import Spinner from "./Spinner";

export default function Dashboard() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);

  function handleParamChange(e) {
    const param = e.target.name;

    // if (param === "full_time") {

    // }
    const value = e.target.value;
    // console.log(param + value);
    setPage(1);
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
  }

  return (
    <div>
      <div className="App">
        <FormInput onParamChange={handleParamChange} />
        {hasNextPage && !error && (
          <div className="paginationApp">
            <Pagination
              page={page}
              setPage={setPage}
              hasNextPage={hasNextPage}
            />
          </div>
        )}
        {loading && <Spinner />}
        {error && <Error />}
        <div className="allJobs">
          {jobs.map((job) => {
            return <Job key={job.id} job={job} />;
          })}
        </div>
        {hasNextPage && !error && (
          <div className="paginationApp">
            <Pagination
              page={page}
              setPage={setPage}
              hasNextPage={hasNextPage}
            />
          </div>
        )}
      </div>
    </div>
  );
}
