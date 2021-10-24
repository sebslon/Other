import fs from "fs";
import path from "path";
import axios from "axios";
import nodeFetch from "node-fetch";

import { HTTPRequestsWrapper } from "./types";

class NodeFetch implements HTTPRequestsWrapper {
  async fetchURL(url: string) {
    try {
      const result = await nodeFetch(url);
      const response = await result.json();
      const status = result.ok;

      return { response, status };
    } catch (err) {
      console.log(err);
    }
  }
}

class AxiosFetch implements HTTPRequestsWrapper {
  async fetchURL(url: string) {
    try {
      const result = await axios(url);

      return { response: result.data, status: true }
    } catch(err) {
      console.log(err);
    }
  }
}