import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1 className="font-size-36 mb-2">Page not found</h1>
      <p className="mb-3">The page is deprecated, deleted, or does not exist at all</p>
      <h1 className="font-size-80 mb-4 font-weight-bold">404 —</h1>
      <Link to="/" className="btn">
        &larr; Go back to the home page
    </Link>
    </div>
  )
}
export default PageNotFound;