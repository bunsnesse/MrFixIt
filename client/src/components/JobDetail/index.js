import React, { Component } from "react";
import moment from 'moment';
import { withAlert } from 'react-alert';

class JobDetail extends Component {

    state = {
        jobDate: ""
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
        let usDate = moment.utc(job.jobDate).format("MM-DD-YY");

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
                <strong>Price$:</strong> {job.price}
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
                        const dateTodayOrInFuture = moment(this.state.jobDate).diff(moment.utc(moment()), 'days') >= 0;
            
                        if(dateTodayOrInFuture){
                        this.props.handleApply(job._id, this.state.jobDate)
                        }
                        else {
                            this.props.alert.show("Please Enter The Valid Date", {type: "error"})
                        }
                        //this.props.alert.show("Error! Job cannot be applied on this date.", {type: "error"})
                        //To show an error occurred
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

export default withAlert()(JobDetail);