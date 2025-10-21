import { Link } from "react-router";
import ImageCarousel from "./ImageCarousel/ImageCarousel";
import styles from "./Home.module.css";

function Home() {
  const carouselImgs = [
    {
      url: "/autumn-comfort.png",
    },
    {
      url: "/orange-outerwear.png",
    },
  ];

  return (
    <main className={styles.homeWrapper}>
      <h1>Welcome to TKWill!</h1>
      <section className={styles.newStockWrapper}>
        <ImageCarousel images={carouselImgs}></ImageCarousel>
        <h2>Autumn comforts are calling</h2>
        <Link to={"/shop"}>Shop now</Link>
      </section>
    </main>
  );
}

export default Home;
