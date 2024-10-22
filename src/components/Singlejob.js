import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "../styles/Singlejob.css";

export default function Singlejob(props) {
  const { job } = props.location.state;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [job]);
  return (
    <div className="jobDContainer">
      {/* {console.log(job)} */}
      <div className="headerJob">
        <div className="cLContainer">
          <img
            className="companyLogo"
            src={job.company_logo}
            alt="Company Logo"
          />
        </div>
        <h2>{job.title}</h2>

        <h3>{job.company}</h3>
        <a
          href={job.company_url}
          target="_blank"
          rel="noopener noreferrer"
          className="detailButton"
        >
          Apply Now
        </a>
      </div>
      <ReactMarkdown className="description" source={job.description} />
    </div>
  );
}
