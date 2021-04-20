//**** Dependencies ****//
import axios from "axios";

//**** Code ****//

const instance = axios.create({ baseURL: "http://localhost:8000" });

export default instance;
