import React from 'react';
import PropTypes from 'prop-types';
import Search from './search';

function Header({saveImageSearch}){
  return(
    <header>
    <div className="row m-0">
      <div className="col-12  p-0 ">
        <nav className="navbar d-flex justify-content-around">
          <h1>Gallery</h1>
          <Search
            saveImageSearch={saveImageSearch}
          />
        </nav>

      </div>
    </div>
  </header>
  );

};

export default Header;
Header.propTypes ={
  saveImageSearch: PropTypes.func,
}
