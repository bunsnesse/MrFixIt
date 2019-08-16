import React, { Component } from "react";
import moment from 'moment';

export default class extends Component {

    state = {
        date: ""
    }

    jobType(job) {
        var jobTitles = ""
        if (job.handyman) {
            jobTitles += "Handyman  "
        }
        if (job.cleaners) {
            jobTitles += "Cleaners  "
        }
        if (job.groceries) {
            jobTitles += "Groceries "
        }
        if (job.yardwork) {
            jobTitles += "Yard Work  "
        }
        return jobTitles;
    }

    render() {
        let job = this.props.job;
        let usDate = moment(job.jobDate).format("L");

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
                <br />
                <strong>Date:</strong>
                {job.jobDate && <div>{usDate}</div>}
                {!job.jobDate && <input type="date" name="date"
                    onChange={(e) => {
                        let jobDate = e.target.value;
                        this.setState({jobDate});
                    }}
                
                />}
                {this.props.handleApply && <div>
                    <button onClick={() => {
                        this.props.handleApply(job._id, this.state.jobDate)
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