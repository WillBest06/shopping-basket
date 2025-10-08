import { useState } from "react";
import styles from "./ImageCarousel.module.css";

function ImageCarousel({ imgArr }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangeImage = (delta) => {
    if (imgArr.length === 1) return;

    if (currentIndex === imgArr.length - 1 && delta === 1) {
      setCurrentIndex(0);
    } else if (currentIndex === 0 && delta === -1) {
      setCurrentIndex(imgArr.length - 1);
    } else {
      setCurrentIndex((prev) => prev + delta);
    }
  };

  return (
    <div className={styles.carouselWrapper}>
      <button
        className={styles.carouselNavButton}
        onClick={() => handleChangeImage(-1)}
      >
        {"<"}
      </button>
      <div className={styles.carouselImageWrapper}>
        <img
          className={styles.carouselImage}
          src={imgArr[currentIndex]["url"]}
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
