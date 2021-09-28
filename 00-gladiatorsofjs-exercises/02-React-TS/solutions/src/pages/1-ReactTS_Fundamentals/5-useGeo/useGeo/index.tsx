import { TrackingData, UseGeoContainer } from "./styles";
import { useGeo } from "./useGeo";

export const useGeoVisualization = () => {
  const [geoData, toggleListening] = useGeo();

  return (
    <UseGeoContainer>
      <button onClick={toggleListening}>
        {geoData ? "Stop tracking" : "Start tracking"}
      </button>
      <TrackingData>
        {geoData ? (
          <>
            {geoData.error ? (
              <p>{geoData.error}</p>
            ) : (
              <>
                <p>Latitude: {geoData?.latitude}</p>
                <p>Longitude: {geoData?.longitude}</p>
              </>
            )}
          </>
        ) : (
          <p>If you want to check your coordinates - start tracking.</p>
        )}
      </TrackingData>
    </UseGeoContainer>
  );
};
