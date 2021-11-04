import { MapCreator } from "./MapCreator";

import { Coordinates } from "./types";

class UserTracker {
  watchId: number = 0;
  dataContainer: Element;
  startCoordinates: Coordinates | null = null;
  actualCoordinates: Coordinates | null = null;

  constructor() {
    const dataContainer = document.querySelector(".data");

    if (dataContainer == null) {
      throw new Error(
        "Data container should be in the document. (container with .data class)"
      );
    }

    this.dataContainer = dataContainer;
  }

  init() {
    const startButton = document.querySelector(".start");
    const stopButton = document.querySelector(".stop");

    if (startButton == null || stopButton == null) {
      throw new Error(
        "Start and stop buttons must be in the document (.start, .stop)"
      );
    }

    startButton.addEventListener("click", () => this.handleStart());
    stopButton.addEventListener("click", () => this.handleStop());
  }

  handleStart() {
    if (navigator.geolocation) {
      this.watchId = navigator.geolocation.watchPosition(
        (position) => this.onSuccess(position),
        (err) => this.onError(err),
        { enableHighAccuracy: true }
      );
    } else {
      console.error("Geolocation is not supported");
    }
  }

  handleStop() {
    const map = document.querySelector(".map");

    if (map == null) {
      throw new Error("Map container must be in the document (.map)");
    }

    this.startCoordinates = null;
    this.actualCoordinates = null;
    navigator.geolocation.clearWatch(this.watchId);

    map.innerHTML = "";
    this.dataContainer.innerHTML = "Tracking stopped.";
  }

  onSuccess(position: GeolocationPosition) {
    const { latitude, longitude } = position.coords;

    if (this.startCoordinates == null) {
      this.startCoordinates = { lat: latitude, lng: longitude };
    } else {
      this.actualCoordinates = { lat: latitude, lng: longitude };
    }

    MapCreator.initMaps(this.startCoordinates, this.actualCoordinates);

    this.dataContainer.innerHTML = JSON.stringify(
      { latitude, longitude },
      null,
      4
    );
  }

  onError(error: GeolocationPositionError) {
    this.dataContainer.innerHTML = JSON.stringify(error.message, null, 4);
  }
}

const tracking = new UserTracker();
tracking.init();
