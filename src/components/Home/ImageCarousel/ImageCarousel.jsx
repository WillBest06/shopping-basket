import { useState } from "react";
import styles from "./ImageCarousel.module.css";

function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangeImage = (delta) => {
    if (images.length === 1) return;

    if (currentIndex === images.length - 1 && delta === 1) {
      setCurrentIndex(0);
    } else if (currentIndex === 0 && delta === -1) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex((prev) => prev + delta);
    }
  };

  return (
    <div data-testid="image_carousel" className={styles.carouselWrapper}>
      <button
        className={styles.carouselNavButton}
        onClick={() => handleChangeImage(-1)}
      >
        {"<"}
      </button>
      <div className={styles.carouselImageWrapper}>
        <img
          data-testid="image_element"
          className={styles.carouselImage}
          src={images[currentIndex]["url"]}
          alt=""
        />
      </div>
      <button
        className={styles.carouselNavButton}
        onClick={() => handleChangeImage(1)}
      >
        {">"}
      </button>
    </div>
  );
}

export default ImageCarousel;
