export type GeoData =
  | {
      latitude: number;
      longitude: number;
      error: string;
    }
  | null;

export type useGeoReturnType = [GeoData, () => void];
