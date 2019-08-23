import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row } from "../components/Grid";
import Nav from "../components/Nav";
import API from '../utils/API';
import JobDetail from '../components/JobDetail';
import { withAlert } from 'react-alert';


class Search extends Component {
  state = {
    yardwork: false,
    handyman: false,
    cleaning: false,
    groceries: false,
    jobs: []
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  find = event => {
    this.setState({
      jobs: []
    })
    event.preventDefault();

    if (this.state.yardwork === true) {

      API.getYardworkers()
        .then(res => {
          console.log(res)
          this.setState({
            jobs: res.data
          })
        })
    }
    if (this.state.handyman === true) {
      // console.log(API.getHandyman());
      API.getHandyman()
        .then(res => {
          console.log(res)
          this.setState({
            jobs: res.data
          })
        })
    }
    if (this.state.cleaners === true) {
      API.getCleaners()
        .then(res => {
          this.setState({
            jobs: res.data
          })
        })
    }
    if (this.state.groceries === true) {
      API.getGroceries()
        .then(res => {
          this.setState({
            jobs: res.data
          })
        })
    }
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

  applYForPosition = (id, jobDate) => {
    console.log('THis job is being applied for ' + id);
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
            <h1>UBERHELP!</h1>
          </Jumbotron>

          <center>
            <h5 className="black-text">Search for a job</h5>
            <div className="container">
              <div className="z-depth-1 grey lighten-4 row" >
                <form className="col s12">
                  <a href="/view" className="indigo-text"> Or view all jobs available</a>
                  <div className='row'>
                    <div className='input-field col s12'>
                      <span className="input-group-text"> Select the type of work you're seeking below</span>
                    </div>
                  </div>
                  <div className='row'>
                    <label>
                      <input type="checkbox" ref="handyman" name="handyman" checked={this.state.handyman} onChange={this.handleInputChange} />
                      <span>Handyman</span>
                    </label>
                  </div>
                  <div className='row'>
                    <label>
                      <input type="checkbox" ref="yardwork" name="yardwork" checked={this.state.yardwork} onChange={this.handleInputChange} />
                      <span>Yardwork</span>
                    </label>
                  </div>
                  <div className='row'>
                    <label>
                      <input type="checkbox" ref="groceries" name="groceries" checked={this.state.groceries} onChange={this.handleInputChange} />
                      <span>Grocery Shopper</span>
                    </label>
                  </div>
                  <div className='row'>
                    <label>
                      <input type="checkbox" ref="cleaning" name="cleaning" checked={this.state.cleaners} onChange={this.handleInputChange} />
                      <span>Cleaning</span>
                    </label>
                  </div>

                  <div className='row'>
                    <button type="submit" onClick={this.find} name='btn_login' className='col s12 btn btn-large waves-effect indigo'>Find!</button>
                  </div>
                </form>
              </div>
            </div>
          </center>
          <center>
            <div className="section">

              {this.state.jobs.length ? (
                <div className="container">
                  {this.state.jobs.length ? (
                    <div className="z-depth-1 grey lighten-2 row">
                      {this.state.jobs.map(job => {
                        const { hired, _id, city, state, email, price, jobDetails } = job;
                        if (!hired) {
                          return (

                            <JobDetail
                              key={_id}
                              job={job}
                              handleApply={(id, jobDate) => {
                                this.applYForPosition(id, jobDate);

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
              ) : (
                  <h3> No jobs yet</h3>
                )}
            </div>
          </center>
        </Col>
      </div>
    );
  }
}
export default withAlert()(Search);