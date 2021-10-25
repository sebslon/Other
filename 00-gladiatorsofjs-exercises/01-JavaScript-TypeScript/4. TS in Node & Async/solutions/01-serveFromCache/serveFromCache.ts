import fs from "fs";
import path from "path";

import { DataFromCache, DataFromGoogleAPI, HTTPRequestsWrapper } from "./types";

const API_URL = "https://www.googleapis.com/books/v1/volumes";

abstract class CacheHandler {
  protected absolutePath: string = path.join(__dirname, "/cache");
  protected urlLink: string = API_URL;

  protected getDataFromCache(filepath: string): DataFromCache {
    if (fs.existsSync(filepath)) {
      const responseFromCache = fs.readFileSync(filepath, "utf-8");

      return responseFromCache
        ? { cacheExists: true, data: JSON.parse(responseFromCache) }
        : { cacheExists: false };
    } else {
      return { cacheExists: false };
    }
  }

  protected cacheAndReturnData(jsonResponse: any, filepath: string) {
    const APIData = this.parseData(jsonResponse);
    this.writeToFile(filepath, APIData);

    return APIData;
  }

  protected parseData(jsonResponse: any): DataFromGoogleAPI {
    const { response } = jsonResponse;

    const recordData = {
      _id: response.items[0].id,
      selfLink: response.items[0].selfLink,
      description: response.items[0].volumeInfo.title,
    };

    return recordData;
  }

  protected writeToFile(filepath: string, APIData: DataFromGoogleAPI) {
    fs.writeFile(filepath, JSON.stringify(APIData), (err) => {
      if (err) {
        throw new Error("Problem with caching data.");
      }
    });
  }

  protected trimQuery(query: string) {
    return query.replace(/\s/g, "");
  }
}

export class ServeFromCache extends CacheHandler {
  private requestsWrapper: HTTPRequestsWrapper;

  constructor(wrapper: HTTPRequestsWrapper) {
    super();
    this.requestsWrapper = wrapper;
  }

  fetchAPIWithQueryString(queryString: string) {
    const query = this.trimQuery(queryString);
    const filepath = path.join(this.absolutePath, query + ".json");

    const cacheData = this.getDataFromCache(filepath);

    if (cacheData.cacheExists) {
      return cacheData.data;
    } else {
      return this.APIRequest(queryString, filepath);
    }
  }

  private async APIRequest(queryString: string, filepath: string) {
    const urlParams = `?q=${queryString}&maxResults=1`;
    const urlToFetch = this.urlLink + urlParams;

    return this.requestsWrapper
      .fetchURL(urlToFetch)
      .then((response) => {
        return this.cacheAndReturnData(response, filepath);
      })
      .catch((err) => {
        throw err;
      });
  }
}
