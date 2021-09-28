import { useCallback, useEffect, useRef, useState } from "react";

import { GeoData, useGeoReturnType } from "./types";

export const useGeo = (): useGeoReturnType => {
  const [geoData, setGeoData] = useState<GeoData>(null);
  const [listening, setListening] = useState<boolean>(false);
  const geoId = useRef<number>(0);

  const geo = navigator.geolocation;

  const toggleListening = useCallback(
    () => setListening((listening) => !listening),
    []
  );

  const onSuccess = (position: GeolocationPosition) => {
    const { latitude, longitude } = position.coords;

    setGeoData({ latitude: latitude, longitude: longitude, error: "" });
  };

  const onError = (err: GeolocationPositionError) => setGeoData({ latitude: 0, longitude: 0, error: err.message });

  useEffect(() => {
    if (!geo) throw new Error("Geolocation is not supported!");

    if (listening) {
      geoId.current = geo.watchPosition(onSuccess, onError, {
        enableHighAccuracy: true,
      });
    } else {
      geo.clearWatch(geoId.current);
      setGeoData(null);
    }

    return () => geo.clearWatch(geoId.current);
  }, [listening, geo]);

  return [geoData, toggleListening];
};
