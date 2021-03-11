// @flow
import React, { useEffect, useState } from 'react';
import Header from './components/header';
import ImageList from './components/imagesList';

function App() {
  const [imageSearch, saveImageSearch] = useState('');
  const [images, saveImages] = useState([]);
  const [currentPage, saveCurrentPage] = useState(1);
  const [totalPages, saveTotalPages] = useState(0);

  const nextPage = () => {
    if (currentPage < totalPages) {
      let pagew = currentPage;
      pagew += 1;
      saveCurrentPage(pagew);
    }
  };
  const previousPage = () => {
    if (currentPage > 1) {
      let pagew = currentPage;
      pagew += 1;
      saveCurrentPage(pagew);
    }
  };
  const searchApi = async () => {
    const key = process.env.REACT_APP_PIXABAY_KEY;
    const amountPages = 28;
    const url = `https://pixabay.com/api/?key=${key}&q=${imageSearch}&per_page=${amountPages}&image_type=photo&page=${currentPage}`;
    const results = await fetch(url);
    const response = await results.json();
    const pages = Math.round(response.totalHits / amountPages);
    saveImages(response.hits);
    saveTotalPages(pages);
  };
  useEffect(() => {
    if (imageSearch !== '') {
      searchApi();
    }
  }, [imageSearch, currentPage]);

  return (
    <div className="App ">
      <div id="imageFrame" className="container-fluid">
        <Header
          saveImageSearch={saveImageSearch}
        />
        <ImageList
          images={images}
        />
        <section>
          <div className="row my-3">
            <div className="col-12 d-flex justify-content-center">
              <button onClick={previousPage} className="btn button mx-2" type="button">Prev</button>
              <button onClick={nextPage} className="btn button mx-2" type="button">Next</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
