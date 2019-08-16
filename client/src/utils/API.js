import axios from "axios";

const instance = axios.create({
  headers: { token: localStorage.getItem("token") }
});

export default {
  getUserInfo: function () {
    return instance.get("/userInfo");
  },
  // Gets all jobs
  getJobs: function () {
    return instance.get("/view");
  },
  // Gets the jobs with the given id
  getHire: function (id) {
    return instance.get("/hire/" + id);
  },
  getAllHire: function () {
    return instance.get("/hire/");
  },
  findAllHireWithDetail: function () {
    return instance.get("/hire/findAllHireWithDetail");
  },
  saveHire: function (hireData) {
    return instance.post("/hire", hireData);
  },
  // Deletes the jobs with the given id
  deleteHire: function (id) {
    return instance.delete("/hire/" + id);
  },
  // Saves a job to the database
  saveJobs: function (jobData) {
    return instance.post("/jobs", jobData);
  },
  // get carpenters
  getHandyman: function () {
    return instance.get("/findHandyman")
  },
  getGroceries: function () {
    return instance.get("/findGroceries")
  },
  getCleaners: function () {
    return instance.get("/findCleaners")
  },
  getYardworkers: function () {
    return instance.get("/findYardworkers")
  }
};