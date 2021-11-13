import { gql, useQuery } from "@apollo/client";

import TrackCard from "../containers/track-card";
import { Layout, QueryResult } from "../components";

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */

export const TRACKS = gql`
  query getTracks {
    tracksForHome {
      id
      title
      thumbnail
      durationInSeconds
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`;

const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  return (
    <QueryResult error={error} loading={loading} data={data}>
      <Layout grid>
        {data?.tracksForHome?.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </Layout>
    </QueryResult>
  );
};

export default Tracks;
