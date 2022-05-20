import PhotoCard from "../components/photo-card";
import styles from "../styles/women.module.css";

export async function getServerSideProps(context) {
	const res = await fetch("https://fakestoreapi.com/products");
	const data = await res.json();
	return { props: { data: data } };
}

export default function Women({ data }) {
	console.log(data);
	return (
		<div className={styles.women}>
			{data?.map((item, index) => {
				if (item.category === "women's clothing") {
					return (
						<div className={styles.product}>
							<PhotoCard image={item.image} price={item.price} />
							<button>Add to cart</button>
						</div>
					);
				}
			})}
		</div>
	);
}
