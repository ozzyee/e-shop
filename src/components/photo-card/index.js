import styles from "../../styles/pcard.module.css";

const PhotoCard = ({ image, price }) => {
  return (
    <div className={styles.pcard}>
      <img src={image} />
      <p>{price}</p>
    </div>
  );
};

export default PhotoCard;
