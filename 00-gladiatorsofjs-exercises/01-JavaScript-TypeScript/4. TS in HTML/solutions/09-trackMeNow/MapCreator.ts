import { Loader } from "@googlemaps/js-api-loader";
import "regenerator-runtime/runtime"; // fix: https://flaviocopes.com/parcel-regeneratorruntime-not-defined/

import { Coordinates } from "./types";

export class MapCreator {
  static async initMaps(
    startingPosition: Coordinates,
    actualPosition: Coordinates | null
  ) {
    const mapContainer = document.querySelector<HTMLElement>(".map");

    if (mapContainer == null) {
      throw new Error("There is no container for map (.map)");
    }

    const actualCoords = actualPosition ? actualPosition : startingPosition;
    const coords = actualPosition
      ? [startingPosition, actualPosition]
      : [startingPosition];

    if (process.env.GOOGLE_API_KEY == undefined) {
      throw new Error("GOOGLE_API_KEY is not defined.");
    }

    const loader = new Loader({
      apiKey: process.env.GOOGLE_API_KEY,
    });

    try {
      await loader.load();
      const map = new google.maps.Map(mapContainer, {
        center: actualCoords,
        zoom: 17,
      });

      coords.forEach((coord: Coordinates) => {
        new google.maps.Marker({
          position: coord,
          map,
        });
      });
    } catch (err) {
      console.error(err.message);
    }
  }
}
