/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useShow } from '../misc/custom-hooks';

import ShowMainData from '../components/show/ShowMainData';
import Details from '../components/show/Details';
import Cast from '../components/show/Cast';
import Seasons from '../components/show/Seasons';

const Show = () => {
  const { id } = useParams();

  const { show, isLoading, error } = useShow(id);

  if (isLoading) {
    return <div>Data is being loaded</div>;
  }

  if (error) {
    return <div>Error occured: {error}</div>;
  }

  return (
    <div>
      <ShowMainData
        image={show.image}
        name={show.name}
        rating={show.rating}
        summary={show.summary}
        tags={show.genres}
      />

      <div>
        <h2>Details</h2>
        <Details
          status={show.status}
          network={show.network}
          premiered={show.premiered}
        />
      </div>

      <div>
        <h2>Seasons</h2>
        <Seasons seasons={show._embedded.seasons} />
      </div>

      <div>
        <h2>Cast</h2>
        <Cast cast={show._embedded.cast} />
      </div>
    </div>
  );
};

export default Show;
