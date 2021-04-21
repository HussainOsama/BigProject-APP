import { observable, makeAutoObservable } from "mobx";
import axios from "axios";
import decode from "jwt-decode";

class AuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  signup = async (userData) => {
    try {
      const res = await axios.post("http://localhost:8000/signup", userData);
      this.user = decode(res.data.token);
      console.log(decode(res.data.token));
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };

  signin = async (userData) => {
    try {
      const res = await axios.post("http://localhost:8000/signin", userData);
      this.user = decode(res.data.token);
      console.log(decode(res.data.token));
      // console.log("authStore -> signin -> res.data", res.data);
    } catch (error) {
      console.log("AuthStore -> signin -> error", error);
    }
  };
}

const authStore = new AuthStore();

export default authStore;
