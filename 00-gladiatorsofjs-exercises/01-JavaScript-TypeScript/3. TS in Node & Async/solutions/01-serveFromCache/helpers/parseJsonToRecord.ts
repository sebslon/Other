import { DataFromGoogleAPI } from "../types";

export function parseJsonToRecord(response: any): DataFromGoogleAPI {
  const recordDataToReturn: DataFromGoogleAPI = {
    _id: response.items[0].id,
    selfLink: response.items[0].selfLink,
    description: response.items[0].volumeInfo.title,
  };

  return recordDataToReturn;
}
