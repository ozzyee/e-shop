import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Carousel from "../components/carousel";
import PhotoCard from "../components/photo-card";

<<<<<<< HEAD
const fakeData = [
	"/alyssa-strohmann-TS--uNw-JqE-unsplash.jpg",
	"atikh-bana-_KaMTEmJnxY-unsplash.jpg",
	"cesar-la-rosa-HbAddptme1Q-unsplash.jpg",
	"tamara-bellis-68csPWTnafo-unsplash.jpg",
=======
const images = [
   "/alyssa-strohmann-TS--uNw-JqE-unsplash.jpg",
   "atikh-bana-_KaMTEmJnxY-unsplash.jpg",
   "cesar-la-rosa-HbAddptme1Q-unsplash.jpg",
   "tamara-bellis-68csPWTnafo-unsplash.jpg",
>>>>>>> 9c0c5c45ee4bea56a734d773596f2c79fc36b0d3
];

export async function getServerSideProps(context) {
	const res = await fetch("https://fakestoreapi.com/products");
	const data = await res.json();
	return { props: { data: data } };
}

export default function Home({ data }) {
	const price1 = data[15].price;
	const image1 = data[15].image;
	const price2 = data[17].price;
	const image2 = data[17].image;
	const price3 = data[6].price;
	const image3 = data[6].image;

	return (
		<div>
			<Carousel data={fakeData} />
			<div className={styles.best}>
				<PhotoCard price={price1} image={image1} />
				<PhotoCard price={price2} image={image2} />
				<PhotoCard price={price3} image={image3} />
			</div>
		</div>
	);
}
