// @flow
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Error from './error';

function Search({ saveImageSearch }) {
  const [search, saveSearch] = useState('');
  const [error, setError] = useState(false);
  const processForm = (e) => {
    e.preventDefault();
    if (search === '') {
      setError(true);
      return;
    }
    setError(false);
    saveImageSearch(search);
  };
  return (
    <form onSubmit={processForm} className="d-flex justify-content-center ">
      <input
        id="search"
        name="search"
        onChange={(e) => saveSearch(e.target.value)}
        type="text"
        className="form-control"
      />
      <input
        type="submit"
        className="btn button"
      />
      {(error) ? <Error /> : null }

    </form>
  );
}
Search.defaultProps = {
  saveImageSearch: null,
};

Search.propTypes = {
  saveImageSearch: PropTypes.func,
};

export default Search;
