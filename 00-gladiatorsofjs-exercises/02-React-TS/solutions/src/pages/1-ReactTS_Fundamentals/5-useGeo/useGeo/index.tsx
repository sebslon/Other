import { TrackingData, UseGeoContainer } from "./styles";
import { useGeo } from "./useGeo";

export const useGeoVisualization = () => {
  const [geoData, toggleListening] = useGeo();

  return (
    <UseGeoContainer>
      <button onClick={toggleListening}>
        {geoData.coords ? "Stop tracking" : "Start tracking"}
      </button>
      <TrackingData>
        {!geoData.error && !geoData.coords && (
          <p>If you want to check your coordinates - start tracking.</p>
        )}

        {geoData.error && <p>{geoData.error}</p>}

        {geoData.coords && (
          <>
            <p>Latitude: {geoData?.coords?.latitude}</p>
            <p>Longitude: {geoData?.coords?.longitude}</p>
          </>
        )}
      </TrackingData>
    </UseGeoContainer>
  );
};
