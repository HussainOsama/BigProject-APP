import { makeAutoObservable, observable } from "mobx";
// import slugify from "react-slugify";
import axios from "axios";
import users from "../Data";

class User {
  users = users;

  //   users = [];

  constructor() {
    makeAutoObservable(this);
  }

  //   fetchData = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:8000/products");
  //       this.products = res.data;
  //     } catch {
  //       console.error("404 Page Not Found");
  //     }
  //   };
}

const user = new User();

export default user;
