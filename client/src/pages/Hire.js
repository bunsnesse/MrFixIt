import React, { Component } from 'react';
import API from '../utils/API';
import Jumbotron from '../components/Jumbotron';
import Nav from "../components/Nav";
import JobDetail from '../components/JobDetail';
import { withAlert } from 'react-alert';

class Hire extends Component {
  state = { allHire: [] }

  // Method to Query the API/Database to GET all the books in the database.
  handleFormSubmit = event => {
    event.preventDefault();
    var hireData = this.state
    console.log(hireData)
    API.getHire()
      .then(res => this.setState({ jobs: res.data }))
    // res.redirect

    console.log(this.props.history.push("/view"))
    this.props.history.push("/view")

      .catch(err => console.log(err))
  }

  // Method to DELETE a particular job from the database.
  deleteHire = id => {
    return API.deleteHire(id)
      .then(res => { })
      .catch(err => console.log(err))

  };


  componentDidMount() {
    this.getAllHire();
  }

  getAllHire = async () => {
    API.findAllHireWithDetail().then((res) => {
      let allHire = res.data;
      //console.log(allHire);
      this.setState({ allHire });
    })
  }

  render() {
    return (
     
     <div className="container">
        <Jumbotron
          title="Job"
          lead="All of your job in one place"
          
        />
        <Nav />
        <div>
          {this.state.allHire.map((hire, i) => {
            //console.log(hire);

            return <JobDetail
              key={hire._id + i}
              job={hire}
              handleCancelJob={async (hireId) => {
                // await fetch("/hire/" + hireId, {method: "DELETE"});
                await this.deleteHire(hireId);
                this.getAllHire();
                this.props.alert.show('Job Canceled!', { type: 'success' })

              }}

            />
          })}
        </div>

      </div>
    )
  }
}

export default withAlert()(Hire);