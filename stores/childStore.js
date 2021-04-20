//I know the plural of child is children, but meh -.-'

//**** Dependencies ****//
import { makeAutoObservable } from "mobx";

//**** Imports ****//
import instance from "./instance";

//**** Code ****//

class ChildStore {
  childs = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchChilds = async () => {
    try {
      const response = await instance.get("/child");
      this.childs = response.data;
      this.loading = false;
    } catch (error) {
      console.error("ChildStore --> fetchChild --> Error", error);
    }
  };
}

const childStore = new ChildStore();
childStore.fetchChilds();

export default childStore;
