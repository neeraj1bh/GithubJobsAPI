import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import moment from "moment";
import "../styles/Job.css";

export default function Job({ job }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="container">
      <div className="mainContent">
        <div className="subContent1">
          <h4>{job.title}</h4>
          <div>{job.location}</div>
        </div>
        <div className="subContent2">
          <div className="company">{job.company}</div>
          <div className="datePosted">
            <span className="text-green-600">{job.type}</span>
            {moment(job.created_at).startOf("hour").fromNow()}
          </div>
        </div>
      </div>
      <div className="detailButtons">
        <button
          className="detailButton"
          onClick={() => {
            setOpen((prevState) => !prevState);
          }}
        >
          {open ? "Hide Details" : "View Details"}
        </button>

        <a
          href={job.company_url}
          target="_blank"
          rel="noopener noreferrer"
          className="applyButton"
        >
          Apply Now
        </a>
      </div>

      {open ? (
        <div>
          <ReactMarkdown className="description" source={job.description} />
        </div>
      ) : null}
    </div>
  );
}
