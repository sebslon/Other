import fs from "fs";
import path from "path";

import { DataFromCache, DataFromGoogleAPI, HTTPRequestsWrapper } from "./types";

const apiUrl = "https://www.googleapis.com/books/v1/volumes";

export abstract class ServeFromCacheHandler {
  protected absolutePath: string = path.join(__dirname, "/cache");
  protected urlLink: string = apiUrl;

  protected getDataFromCache(filepath: string): DataFromCache {
    if (fs.existsSync(filepath)) {
      const responseFromCache = fs.readFileSync(filepath, "utf8");
      const response: DataFromGoogleAPI = JSON.parse(responseFromCache);

      return { cacheExists: true, data: response };
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
    const recordData = {
      _id: jsonResponse.items[0].id,
      selfLink: jsonResponse.items[0].selfLink,
      description: jsonResponse.items[0].description,
    };

    return recordData;
  }

  protected writeToFile(filepath: string, APIData: DataFromGoogleAPI) {
    fs.writeFile(filepath, JSON.stringify(APIData), (err) => {
      if (err) throw "Problem with caching data.";
    });
  }

  protected trimQuery(query: string) {
    return query.replace(/\s/g, "");
  }
}

class FetchServeFromCache extends ServeFromCacheHandler {
  private fetchWrapper: HTTPRequestsWrapper;

  constructor(fetchWrapper: HTTPRequestsWrapper) {
    super();
    this.fetchWrapper = fetchWrapper;
  }

  fetchAPIWithQueryString(queryString: string) {
    const query = this.trimQuery(queryString);
    const filepath = path.join(this.absolutePath, query + ".json");

    const cacheData = this.getDataFromCache(filepath);

    if (cacheData.cacheExists) {
      return cacheData.data;
    } else {
      this.APIRequest(queryString, filepath);
    }
  }

  private APIRequest(queryString: string, filepath: string) {
    const urlParams = `?g=${queryString}&maxResults=1`;
    const urlToFetch = this.urlLink + urlParams;

    const errConnectionProblem = "Problem with connection.";

    return this.fetchWrapper
      .fetchURL(urlToFetch)
      .then((response) => {
        if (!response) {
          throw new Error(errConnectionProblem);
        }
        return this.cacheAndReturnData(response, filepath);
      })
      .catch((err) => {
        if (err.message !== errConnectionProblem) {
          throw new Error("Unexpected problem with fetching data.");
        }
        throw err;
      });
  }
}
