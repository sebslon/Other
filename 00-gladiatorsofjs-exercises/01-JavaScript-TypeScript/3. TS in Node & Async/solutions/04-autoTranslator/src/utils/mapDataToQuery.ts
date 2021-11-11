import { TranslationData } from "../types";

export interface QueryKeys {
  key: string;
  index: number;
}

export function mapDataToQuery(data: TranslationData) {
  const queryStrings: string[] = [];
  const queryObjectsKeys: QueryKeys[] = [];

  const nonTranslatedProperties: any[] = [];

  let i = 0;

  //create query strings and assigned properties to them
  const mapData = (data: any, prop = "") => {
    if (typeof data === "string") {
      queryStrings.push(data);
      queryObjectsKeys.push({
        key: prop,
        index: i,
      })
      i++;
    } else {
      Object.keys(data).forEach((key) => {
        let objProperty;

        if(prop.length === 0) {
          objProperty = key;
        } else {
          objProperty = prop.concat("." + key);
        }

        if(!nonTranslatedProperties.includes(key)) {
          mapData(data[key], objProperty);
        }
      })
    }
  }

  mapData(data);

  return { queryStrings, queryObjectsKeys };
}