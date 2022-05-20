import styles from "../styles/cart.module.css";
import CartItem from "../components/cart-item";

export default function footer() {
   return (
      <div>
         <h3 className={styles.title}>Your shopping</h3>
         <div>
            <CartItem />
         </div>
      </div>
   );
}
