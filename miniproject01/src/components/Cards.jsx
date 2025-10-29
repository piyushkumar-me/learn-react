import React from 'react'

function Cards(props) {
  return (

    <div className="job-card">
      <div className="job-card-header">
        <img
          src={props.companyLogo}
          alt=""
          className="job-card-logo"
        />
        <div>
          <h2 className="job-role">{props.jobRole}</h2>
          <p className="company-name"> {props.location}</p>
        </div>
      </div>

      <div className="job-card-content">
        <p className="job-info"><span className="label"></span>{props.location}</p>
        <p className="job-info"><span className="label"></span> {props.jobType}</p>
        <p className="job-info"><span className="label"></span> Salary: {props.salary}</p>
      </div>

      <div className="job-card-footer">
        <button className="apply-button">Apply Now</button>
      </div>
    </div>

  )
}

export default Cards