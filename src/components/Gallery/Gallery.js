import React, { useState } from "react";

const Gallery = (props) => {
  const [scrollDiv, setScrollDiv] = useState();
  let mappedImages;

  props.galleryNode(scrollDiv);

  const imageArray = [
    "/images/galleryphotos/galleryimage (1).jpg",
    "/images/galleryphotos/galleryimage (2).jpg",
    "/images/galleryphotos/galleryimage (3).jpg",
    "/images/galleryphotos/galleryimage (4).jpg",
    "/images/galleryphotos/galleryimage (5).jpg",
    "/images/galleryphotos/galleryimage (6).jpg",
    "/images/galleryphotos/galleryimage (7).jpg",
    "/images/galleryphotos/galleryimage (8).jpg",
    "/images/galleryphotos/galleryimage (9).jpg",
    "/images/galleryphotos/galleryimage (10).jpg",
    "/images/galleryphotos/galleryimage (11).jpg",
    "/images/galleryphotos/galleryimage (12).jpg",
    "/images/galleryphotos/galleryimage (13).jpg",
    "/images/galleryphotos/galleryimage (14).jpg",
    "/images/galleryphotos/galleryimage (15).jpg",
    "/images/galleryphotos/galleryimage (16).jpg",
    "/images/galleryphotos/galleryimage (17).jpg",
    "/images/galleryphotos/galleryimage (18).jpg",
    "/images/galleryphotos/galleryimage (19).jpg",
    "/images/galleryphotos/galleryimage (20).jpg",
    "/images/galleryphotos/galleryimage (21).jpg",
    "/images/galleryphotos/galleryimage (22).jpg",
    "/images/galleryphotos/galleryimage (23).jpg",
    "/images/galleryphotos/galleryimage (24).jpg",
    "/images/galleryphotos/galleryimage (25).jpg",
    "/images/galleryphotos/galleryimage (26).jpg",
    "/images/galleryphotos/galleryimage (27).jpg",
    "/images/galleryphotos/galleryimage (28).jpg",
    "/images/galleryphotos/galleryimage (29).jpg",
    "/images/galleryphotos/galleryimage (30).jpg",
    "/images/galleryphotos/galleryimage (31).jpg",
    "/images/galleryphotos/galleryimage (32).jpg",
  ];
  return (
    <div className="gallery-container" ref={(node) => setScrollDiv(node)}>
      <h1 className="text-center py-4" id="unique">
        Gallery
      </h1>
      <div className="gallery-photos">
        <div className="row justify-content-center">
          {
            (mappedImages = imageArray.map((rows, index) => (
              <div
                className="col-sm-12 text-center col-md-4 shadow-sm p-3 border h-100"
                key={index}
              >
                <img src={rows} className="img-thumbnail" alt="Gallery" />
              </div>
            )))
          }
        </div>
      </div>
    </div>
  );
};

export default Gallery;
