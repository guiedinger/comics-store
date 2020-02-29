import React from 'react';
import { useParams } from 'react-router-dom';

export default (props) => {
  const { id } = useParams();
  return (
    <div>Comic {id}</div>
  );
}
