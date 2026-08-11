import React, { forwardRef, useCallback, useEffect, useState } from "react";

const imageArray = Array.from(
  { length: 32 },
  (_, i) => `/images/galleryphotos/galleryimage (${i + 1}).jpg`
);

const Gallery = forwardRef(function Gallery(_props, ref) {
  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;

  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(() => {
    setActiveIndex((current) =>
      current === null
        ? null
        : (current - 1 + imageArray.length) % imageArray.length
    );
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % imageArray.length
    );
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, closeLightbox, showPrev, showNext]);

  return (
    <section className="section gallery" ref={ref} id="gallery">
      <div className="section__intro">
        <h2>Gallery</h2>
        <p>A look inside our Del Paso location.</p>
      </div>
      <div className="gallery__grid">
        {imageArray.map((src, index) => (
          <button
            type="button"
            className="gallery__item"
            key={src}
            onClick={() => setActiveIndex(index)}
            aria-label={`View larger photo ${index + 1}`}
          >
            <img
              src={src}
              alt={`Super Wash n Dry facility photo ${index + 1}`}
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {isOpen && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Gallery photo ${activeIndex + 1} of ${imageArray.length}`}
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="lightbox__close"
            onClick={closeLightbox}
            aria-label="Close gallery"
          >
            ×
          </button>

          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            onClick={(event) => {
              event.stopPropagation();
              showPrev();
            }}
            aria-label="Previous photo"
          >
            ‹
          </button>

          <figure
            className="lightbox__figure"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={imageArray[activeIndex]}
              alt={`Super Wash n Dry facility photo ${activeIndex + 1}`}
            />
            <figcaption>
              {activeIndex + 1} / {imageArray.length}
            </figcaption>
          </figure>

          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next photo"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
});

export default Gallery;
