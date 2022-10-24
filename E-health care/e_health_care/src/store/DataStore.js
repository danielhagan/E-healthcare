import {makeAutoObservable} from 'mobx';
class DataStore {
  constructor() {
    makeAutoObservable(this);
  }

  //definition of store states
  token = null;

  user = null;

  state = 0;
  Messages = [];
  doctors = [];
  humidity = 38.89;
  gas_value = 1.89;
  temperature = 40.18;
  nofication = true;

  // definition of action store
  getToken = () => this.token; //token
  getUser = () => this.user; //token

  setToken = payload => {
    this.token = payload;
  };
  setUser = payload => {
    this.user = payload;
  };
}

const store = new DataStore();

export default store;
