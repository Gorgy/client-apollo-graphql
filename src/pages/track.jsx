import { gql, useQuery } from '@apollo/client';

import { Layout, QueryResult } from '../components';
import TrackDetail from '../components/track-detail';

export const GET_TRACK = gql`
  query getTrack($trackId: ID!) {
    track(id: $trackId) {
      title
      author {
        name
        photo
      }
      description
      id
      thumbnail
      durationInSecond
      modulesCount
      numberOfViews
      modules {
        id
        title
        durationInSecond
      }
    }
  }
`;

const Track = ({ trackId }) => {
  const { data, error, loading } = useQuery(GET_TRACK, {
    variables: { trackId },
  });
  return (
    <Layout>
      <QueryResult data={data} error={error} loading={loading}>
        <TrackDetail track={data?.track} />
      </QueryResult>
    </Layout>
  );
};

export default Track;
