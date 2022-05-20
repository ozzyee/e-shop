import styles from "../../styles/pcard.module.css"


const PhotoCard = ({image, title, price}) => {
  return (
    <div className={styles.pcard}>
      <img src={image}/>
      <p>{title}</p>
      <p>{price}</p>
    </div>
  );
};

export default PhotoCard;
