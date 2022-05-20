import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";

import styles from "../../styles/footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.icons}>
        <AiFillInstagram />
        <AiOutlineTwitter />
        <BsYoutube />
        <AiFillPhone />
        <MdEmail />
      </div>
    </div>
  );
}
