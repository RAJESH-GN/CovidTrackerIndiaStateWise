import axios from "axios";

function getData(url) {
  return axios.get(url);
}

export default { getData };
