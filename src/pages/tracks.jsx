import React from 'react';
import { gql, useQuery } from '@apollo/client';

import { Layout, QueryResult } from '../components';
import TrackCard from '../containers/track-card';

export const TRACKS = gql`
  query getTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { data, loading, error } = useQuery(TRACKS);

  return (
    <Layout grid>
      <QueryResult data={data} error={error} loading={loading}>
        {data?.tracksForHome.map((item, index) => (
          <TrackCard key={`${item.id}_${index}`} track={item} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
