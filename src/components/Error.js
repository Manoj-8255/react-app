import React from 'react';
import { useRouteError } from 'react-router-dom';

export const Error = () => {
  const error = useRouteError();
  console.log(error)
  return (
    <div>
        <h2>
            Oops!!
        </h2> 
        <h2>
            Something went wrong
        </h2>
        <h3>{error.statusText}</h3>
        <h3>{error.data}</h3>
    </div>
  )
}
