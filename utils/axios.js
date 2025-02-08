import axiosLib from "axios";

const axios = axiosLib.create({
  baseURL: "https://privu.fr/api",
  headers: {
    Accept: "application/json",
    "X-AppType": "docs",
    "X-AppApiToken": "Z2hFM2VNZ1NMQkFyQk5lNmxDc0xaSDlCdk1kODdaUXA=",
  },
});

export default axios;
