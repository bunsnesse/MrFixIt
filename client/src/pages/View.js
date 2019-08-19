import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row } from "../components/Grid";
import Nav from "../components/Nav";
import API from "../utils/API";
import Post from "./Post";
import JobDetail from '../components/JobDetail';
import { withAlert } from 'react-alert';

class View extends Component {
  state = {
    jobs: []
  };

  componentDidMount() {
    this.jobImport();
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


  jobImport = event => {
    API.getJobs()
      .then(res => {
        console.log(res)
        this.setState({ jobs: res.data })
      })
      .catch(err => console.log(err))
  }

  applyForPosition = (id, jobDate) => {
    //We need to hit a route on our express server that modifieds the appropriate ID in our data base and changes hired to true
    var hireData = {
      offerId: id,
      jobDate
    };
    API.saveHire(hireData)
      .then(res => {
        this.props.history.push("/hire");
        this.props.alert.show('Job Hired!', { type: 'success' })
        console.log('THis job is being applied for ' + id);
      })
      .catch(async (err) => {
        console.log(err);
        this.props.alert.show("Error! Job cannot be applied on this date.", {type: "error"})
      })

  }

  render() {
    return (
      <div>
        <Nav />
        <Col size="md-12">
          <Jumbotron>
            <h1>HelpGods!</h1>
          </Jumbotron>

          <center>
            <h5 className="black-text"> <strong>All Current Job Listings</strong></h5>
            <div className="container">
              {this.state.jobs.length ? (
                <div className="z-depth-1 grey lighten-2 row">
                  {this.state.jobs.map(job => {
                    const { hired, _id, city, state, email, price, jobDetails } = job;
                    if (!hired) {
                      return (

                        <JobDetail
                          key={job._id}
                          job={job}
                          handleApply={(id, jobDate) => {
                            this.applyForPosition(id, jobDate);
                          }}
                        />
                      )
                    }

                  })}
                </div>
              ) : (
                  <h3></h3>
                )}

            </div>
          </center>
          <div className="section"></div>
        </Col>
      </div>
    );
  }
}

export default withAlert()(View);