import fetch from "node-fetch";

import { IGoogleLanguagesResponse } from "../../types";

class LanguagesHandler {
  private languagesURL: string =
    "https://translation.googleapis.com/language/translate/v2/languages";
  private supportedLanguages: string[] = [];

  async isLanguageSupported(language: string) {
    if (!this.supportedLanguages.length) {
      await this.getListOfSupportedLanguages();
    }

    return this.supportedLanguages.includes(language);
  }

  private async getListOfSupportedLanguages() {
    const data = await fetch(
      this.languagesURL + `?key=${process.env.GOOGLE_API_KEY}`
    );
    const json: IGoogleLanguagesResponse = await data.json();

    const languages = this.mapLanguagesResponseToArray(json);

    this.supportedLanguages = languages;
  }

  private mapLanguagesResponseToArray(data: IGoogleLanguagesResponse) {
    const languages: string[] = [];

    data?.data.languages.forEach(({ language }) => {
      languages.push(language);
    });

    return languages;
  }
}

export const languagesHandler = new LanguagesHandler();