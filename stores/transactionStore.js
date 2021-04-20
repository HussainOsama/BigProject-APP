//**** Dependencies ****//
import { makeAutoObservable } from "mobx";

//**** Imports ****//
import instance from "./instance";

//**** Code ****//

class TransactionStore {
  transactions = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchTransactions = async () => {
    try {
      const response = await instance.get("/transaction");
      this.transactions = response.data;
      this.loading = false;
    } catch (error) {
      console.error("TransactionStore --> fetchTransaction --> Error", error);
    }
  };
}

const transactionStore = new TransactionStore();
transactionStore.fetchTransactions();

export default transactionStore;
