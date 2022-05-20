import { Carousel } from "antd";
import styles from "../../styles/carousel.module.css";
function CarouselComponent({ data }) {
  return (
    <Carousel autoplay>
      {data.map((item, key) => {
        return (
          <div key={key}>
            <div className={styles.wrapper}>
              <img src={item} alt="stockImages"/>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}
export default CarouselComponent;