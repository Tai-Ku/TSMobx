import { action, computed, makeObservable, observable } from "mobx";
import { IRootStore } from "./RootStore";
import axios from "axios";

export interface IUserDetail {
  id: number;
  name: string;
  url: string;
  location: string;
}

export class GithubDetailStore {
  userDetail: IUserDetail = {} as IUserDetail;
  rootSore: IRootStore;
  constructor(rootSore: IRootStore) {
    makeObservable(this, {
      userDetail: observable,
      fetchData: action,
      getUserDetail: computed,
    });
    this.rootSore = rootSore;
  }
  async fetchData(userName: string) {
    const res = await axios.get(`https://api.github.com/users/${userName}`);
    this.userDetail = res?.data;
  }
  get getUserDetail() {
    return this.userDetail;
  }
}
