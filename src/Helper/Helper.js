import axios from "axios";
import config from "../Config/index";

const tokenVerify =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOGQ4OWFjNDUzM2YyM2FiN2Y1Yjg4MzM0NmJiZDM2YyIsInN1YiI6IjY2MTRlY2JkNmM4NDkyMDEyZmZjMjJmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H1--GV6CAu2az0n-U603YOenI-dwbHytU-XwaYf0fo0";
const customHeader = () => ({
  "Content-Type": "application/json",
  Accept: "application/json, text/plain, /",
  Authorization: tokenVerify,
});

export function api() {
  let opts = {
    baseURL: config.api.trim(),
    headers: customHeader(),
  };
  return axios.create(opts);
}
