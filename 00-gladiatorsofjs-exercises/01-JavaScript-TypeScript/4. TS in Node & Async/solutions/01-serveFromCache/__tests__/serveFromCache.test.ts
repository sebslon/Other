import fs from "fs";
import path from "path";
import fetch from "node-fetch";

import { trimQuery } from "../helpers/trimQuery";

import { ServeFromCache } from "../serveFromCache";
import { AxiosFetch, NodeFetch } from "../fetch";
import { parseJsonToRecord } from "../helpers/parseJsonToRecord";

const API_URL = "https://www.googleapis.com/books/v1/volumes";

describe("ServeFromCache with Node/Axios", () => {
  const nodeFetchWrapper = new NodeFetch();
  const axiosFetchWrapper = new AxiosFetch();

  const nodeFetcher = new ServeFromCache(nodeFetchWrapper);
  const axiosFetcher = new ServeFromCache(axiosFetchWrapper);

  const queries = ["book", "title"];
  const absolutePath = path.join(__dirname, "../cache");

  function clearFiles() {
    queries.forEach((query) => {
      const queryWithoutSpaces = trimQuery(query);
      const filepath = `${absolutePath}/${queryWithoutSpaces}.json`;

      if (fs.existsSync(filepath)) {
        fs.unlinkSync(filepath);
      }
    });
  }

  // ACTUAL TESTS

  it("Handles fetching correctly - as native only fetching function", async () => {
    for (const query of queries) {
      const queryWithoutSpaces = trimQuery(query);
      const urlParams = `?q=${queryWithoutSpaces}&maxResults=1`;
      const urlToFetch = API_URL + urlParams;

      const raw = await fetch(urlToFetch);
      const expectedJSON = await raw.json();
      const expectedResult = parseJsonToRecord(expectedJSON);

      const nodeFetchResult = await nodeFetcher.fetchAPIWithQueryString(
        queryWithoutSpaces
      );
      const axiosFetchResult = await axiosFetcher.fetchAPIWithQueryString(
        queryWithoutSpaces
      );

      expect(nodeFetchResult!.description).toEqual(expectedResult.description);
      expect(axiosFetchResult!.description).toEqual(expectedResult.description);

      clearFiles();
    }
  });

  it("Returns from cache if it exists", async () => {
    const spy = jest.spyOn(fs, "readFileSync");
    const queryString = "test-cache";
    const filepath = path.join(absolutePath, queryString + ".json");

    const axiosFetchResult = await axiosFetcher.fetchAPIWithQueryString(
      queryString
    );

    expect(spy).toBeCalledWith(filepath, "utf-8");
    expect(axiosFetchResult!.description).toBe("test");

    clearFiles();
    spy.mockClear();
  });
});
