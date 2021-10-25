import axios from "axios";
import nodeFetch from "node-fetch";

import { HTTPRequestsWrapper } from "./types";

export class NodeFetch implements HTTPRequestsWrapper {
  async fetchURL(url: string) {
    try {
      const result = await nodeFetch(url);
      const response = await result.json();
      const status = result.ok;

      return { response, status };
    } catch (err) {
      console.log(err.message);
      return { response: null, status: false }
    }
  }
}

export class AxiosFetch implements HTTPRequestsWrapper {
  async fetchURL(url: string) {
    try {
      const result = await axios(url);

      return { response: result.data, status: true }
    } catch(err) {
      console.log(err.message);
      return { response: null, status: false }
    }
  }
}