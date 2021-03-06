// @flow
import React, { useState } from 'react';
import ProptTypes from 'prop-types';
import view from '../img/view.png';

function Image({ image, imageHD, saveImageHD }) {
  const [mouse, saveMouse] = useState([]);
  const [mouseOver, saveMouseOver] = useState(false);
  const mouseIn = (e) => {
    const element = e.target;
    saveMouse(element);
    const fullImage = element.getAttribute('data-image');
    saveImageHD(fullImage);
    const firstChildren = element.children[0];
    const info = firstChildren.children[0];
    if (firstChildren && info) {
      const parent = element.parentElement;
      const firstParentChildren = parent.children[0];
      firstParentChildren.classList.add('image-blur');
      info.style.visibility = 'initial';
      saveMouseOver(true);
    }
  };
  const mouseOut = () => {
    const element = mouse;
    if (element && mouseOver) {
      const firstChildren = element.children[0];
      const info = firstChildren.children[0];
      const parent = element.parentElement;
      const firstParentChildren = parent.children[0];
      firstParentChildren.classList.remove('image-blur');
      info.style.visibility = 'hidden';
      saveMouse([]);
      saveMouseOver(false);
    }
  };
  return (
    <div className="col-3 d-flex  align-self-start justify-content-center my-4">
      <div className="card rounded images">
        <img src={image.previewURL} className="   img-fluid img-thumbnail" alt="img-thumbnail" />
        <div onMouseEnter={mouseIn} onMouseLeave={mouseOut} className="  prueba  rounded card-img-overlay d-flex justify-content-center align-items-center" data-image={image.webformatURL}>

          <div className="info card-text text-white d-text justify-content-center">

            <img className="imageHD" src={view} data-toggle="modal" data-target="#exampleModal" alt="imageHD" />

          </div>

        </div>

        <div className="modal fade " id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">

              <div className="modal-body d-flex justify-content-center">

                <img src={imageHD} className="  img-fluid " alt="imageHD" />
              </div>

            </div>
          </div>
        </div>

      </div>

    </div>

  );
}

export default Image;
Image.defaultProps = {
  image: null,
  imageHD: null,
  saveImageHD: null,
};
Image.propTypes = {
  image: ProptTypes.shape({}),
  imageHD: ProptTypes.string,
  saveImageHD: ProptTypes.func,
};
