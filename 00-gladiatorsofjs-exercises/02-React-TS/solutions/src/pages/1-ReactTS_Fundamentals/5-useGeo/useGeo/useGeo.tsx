import { useCallback, useEffect, useRef, useState } from "react";

import { GeoData, useGeoReturnType } from "./types";

export const useGeo = (): useGeoReturnType => {
  const [geoData, setGeoData] = useState<GeoData>({
    coords: {
      latitude: null,
      longitude: null,
    },
    error: null,
  });
  const [listening, setListening] = useState<boolean>(false);
  const geoId = useRef<number>(0);

  const geo = navigator.geolocation;

  const toggleListening = useCallback(
    () => setListening((listening) => !listening),
    []
  );

  const onSuccess = (position: GeolocationPosition) => {
    setGeoData({ coords: position.coords, error: null });
  };

  const onError = (err: GeolocationPositionError) => {
    setGeoData({ coords: null, error: err.message });
  };

  useEffect(() => {
    if (!geo) {
      setGeoData({
        coords: null,
        error: "Geolocation is not supported",
      });
    }

    if (listening) {
      geoId.current = geo.watchPosition(onSuccess, onError, {
        enableHighAccuracy: true,
      });
    } else {
      geo.clearWatch(geoId.current);
      setGeoData({ coords: null, error: null });
    }

    return () => geo.clearWatch(geoId.current);
  }, [listening, geo]);

  return [geoData, toggleListening];
};
