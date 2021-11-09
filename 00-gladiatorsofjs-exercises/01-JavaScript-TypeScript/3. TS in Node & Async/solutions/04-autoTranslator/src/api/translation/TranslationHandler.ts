import path from "path";
import fs from "fs";
import fetch from "node-fetch";
import queryString from "query-string";
import { mapDataToQuery, QueryKeys } from "../../utils/mapDataToQuery";
import { IGoogleTranslationsResponse, TranslationData } from "../../types";
import { dataToTranslate } from "../../utils/data";

class TranslationHandler {
  private readonly translationURL =
    "https://translation.googleapis.com/language/translate/v2";
  private readonly cachePath = path.resolve("cache");

  async translateData(language: string) {
    const translationFilePath = path.join(this.cachePath, language + ".json");

    if (fs.existsSync(translationFilePath)) {
      return this.readDataFromCache(translationFilePath);
    }

    try {
      const translationData = await this.fetchForTranslation(language);
      this.cacheTranslationData(translationFilePath, translationData);

      return translationData;
    } catch (err) {
      throw Error(err.message);
    }
  }

  private readDataFromCache(path: string) {
    const cache = fs.readFileSync(path, "utf-8");
    const response = JSON.parse(cache);

    return response;
  }

  private cacheTranslationData(filePath: string, data: TranslationData) {
    fs.writeFileSync(filePath, JSON.stringify(data));
    return;
  }

  private async fetchForTranslation(language: string) {
    const { queryURL, queryObjectsKeys } = this.prepareQueryURL(language);
    const response = await fetch(queryURL);
    const json: IGoogleTranslationsResponse = await response.json();

    const translatedObject = this.mapTranslatedDataToResponseObject(
      json,
      queryObjectsKeys
    );

    return translatedObject;
  }

  private mapTranslatedDataToResponseObject(
    data: IGoogleTranslationsResponse,
    queryObjectKeys: QueryKeys[]
  ) {
    const response: TranslationData = {};

    queryObjectKeys.forEach(({ key, index }) => {
      const obj = key.split(".");
      if (!response[obj[0]]) {
        response[obj[0]] = {};
      }
      response[obj[0]][obj[1]] = data.data.translations[index].translatedText;
    });

    return response;
  }

  private prepareQueryURL(language: string) {
    const { queryStrings, queryObjectsKeys } = mapDataToQuery(dataToTranslate);
    const queryURL = queryString.stringifyUrl({
      url: this.translationURL,
      query: {
        q: queryStrings,
        target: language,
        key: process.env.GOOGLE_API_KEY,
      },
    });

    return { queryURL, queryObjectsKeys };
  }
}

export const translationHandler = new TranslationHandler();
