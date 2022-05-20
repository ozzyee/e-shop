import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Carousel from "../components/carousel";
import { useShoppingListContent } from "../context/shoping-list";

const images = [
   "/alyssa-strohmann-TS--uNw-JqE-unsplash.jpg",
   "atikh-bana-_KaMTEmJnxY-unsplash.jpg",
   "cesar-la-rosa-HbAddptme1Q-unsplash.jpg",
   "tamara-bellis-68csPWTnafo-unsplash.jpg",
];

export default function Home() {
   const { addItem, deleteItem } = useShoppingListContent();

   return (
      <>
         <Carousel data={images} />
      </>
   );
}
