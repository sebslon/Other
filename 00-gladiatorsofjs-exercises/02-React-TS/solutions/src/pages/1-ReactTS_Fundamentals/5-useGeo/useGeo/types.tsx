export type GeoData = {
  coords: {
    latitude: number | null;
    longitude: number | null;
  } | null;
  error: string | null;
};

export type useGeoReturnType = [GeoData, () => void];
