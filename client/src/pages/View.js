import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row } from "../components/Grid";
import Nav from "../components/Nav";
import API from "../utils/API";
import Post from "./Post";
import JobDetail from '../components/JobDetail';
import {withAlert} from 'react-alert';

class View extends Component {
  state = {
    jobs: []
  };

  componentDidMount() {
    this.jobImport();
  }

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


  jobImport = event => {
    API.getJobs()
      .then(res => {
        console.log(res)
        this.setState({ jobs: res.data })
      })
      .catch(err => console.log(err))
  }

  applYForPosition = id => {
    console.log('THis job is being applied for ' + id);
    //We need to hit a route on our express server that modifieds the appropriate ID in our data base and changes hired to true
    var hireData = {
      offerId: id
    };
    API.saveHire(hireData)
      .then(res => {
        // res.redirect
        //console.log(res)
        //console.log(this.props.history.push("/view"))
        //this.props.history.push("/view")

        this.props.history.push("/hire");
        this.props.alert.show('Job Hired!', {type: 'success'})

      })
      .catch(err => console.log(err))
    





  }

  render() {
    return (
      <div>
        <Nav />
        <Col size="md-12">
          <Jumbotron>
            <h1>UBERHELP!</h1>
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
                          
                          job={job}
                          handleApply={(id) => {
                            this.applYForPosition(id);
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