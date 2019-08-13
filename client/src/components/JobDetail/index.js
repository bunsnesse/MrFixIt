import React, { Component } from "react";

export default class extends Component {

    jobType(job) {
        var jobTitles = ""
        if (job.carpentry) {
            jobTitles += "Carpentry  "
        }
        if (job.plumbing) {
            jobTitles += "Plumbing  "
        }
        if (job.electrician) {
            jobTitles += "Electrician  "
        }
        if (job.yardwork) {
            jobTitles += "Yard Work  "
        }
        return jobTitles;
    }

    render() {
        let job = this.props.job;

        return (

            <div className="z-depth-1 grey lighten-4 row" key={job._id} >
                <strong>Skills: </strong> {this.jobType(job)}
                <br></br>
                <strong>Job Details:</strong> {job.jobDetails}
                <br></br>
                <strong>Location:</strong> {job.city}, {job.state}
                <br></br>
                <strong>Email:</strong> {job.email}
                <br />
                <strong>Price:</strong> {job.price}
                {this.props.handleApply && <div>
                    <button onClick={() => {
                        this.props.handleApply(job._id)
                    }} >Apply</button>
                </div>}
                {this.props.handleCancelJob && <div>
                    <button onClick={() => {
                        this.props.handleCancelJob(job.hireId)
                    }} >Cancel Job</button>
                </div>}
            </div>

        );
    }
}