import React from "react";
import moment from "moment";
import "../styles/Job.css";
import { Link } from "react-router-dom";

export default function Job({ job }) {
  return (
    <div className="container darkToggle">
      <div className="mainContent">
        <div className="datePosted">
          <span className="text-grey-600">{job.type}</span>
          <span className="text-grey">
            {/* {console.log(new Date(job.created_at))}
            {console.log(job.created_at)} */}

            {moment(new Date(job.created_at)).startOf("hour").fromNow()}
          </span>
        </div>
        <Link
          to={{
            pathname: `/job/${job.id}`,
            state: {
              job: job,
            },
          }}
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <h3>{job.title}</h3>
        </Link>
        <div className="company">{job.company}</div>
      </div>
      <div className="jLocation">{job.location}</div>
    </div>
  );
}
