import { CountStore } from "./CountStore";
import { GithubDetailStore } from "./GithubUserDetailStore";

export interface IRootStore {
  countStore: CountStore;
  githubDetailStore: GithubDetailStore;
}

export class RootStore implements IRootStore {
  countStore: CountStore;
  githubDetailStore: GithubDetailStore;

  constructor() {
    this.countStore = new CountStore(this);
    this.githubDetailStore = new GithubDetailStore(this);
  }
}
