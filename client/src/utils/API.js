import axios from "axios";

export default {
  // Gets all jobs
  getJobs: function() {
    return axios.get("/view");
  },
  // Gets the jobs with the given id
  getHire: function(id) {
    return axios.get("/hire/" + id);
  },
  getAllHire: function() {
    return axios.get("/hire/");
  },
  findAllHireWithDetail: function() {
    return axios.get("/hire/findAllHireWithDetail");
  },
  saveHire: function(hireData) {
    return axios.post("/hire", hireData);
  },
  // Deletes the jobs with the given id
  deleteJobs: function(id) {
    return axios.delete("/jobs/" + id);
  },
  // Saves a job to the database
  saveJobs: function(jobData) {
    return axios.post("/jobs", jobData);
  },
  // get carpenters
  getCarpenters: function() {
    return axios.get("/getCarpenters")
  },
  getElectricians: function() {
    return axios.get("/getElectricians")
  },
  getPlumbers: function() {
    return axios.get("/getPlumbers")
  },
  getYardworkers: function() {
    return axios.get("/getYardworkers")
  }
};