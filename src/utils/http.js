import axios from "axios";
class Http {
  instance;
  constructor() {
    this.instance = axios.create({
      baseURL: "http://localhost:4000/",
      timeout: 10000,
    });
  }
  getIntance = () => {
    return this.instance;
  };
}
const http = new Http().getIntance();
export default http;
