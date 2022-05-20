import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Carousel from "../components/carousel";
import PhotoCard from "../components/photo-card";

const images = [
   "/alyssa-strohmann-TS--uNw-JqE-unsplash.jpg",
   "atikh-bana-_KaMTEmJnxY-unsplash.jpg",
   "cesar-la-rosa-HbAddptme1Q-unsplash.jpg",
   "tamara-bellis-68csPWTnafo-unsplash.jpg",
];
export async function getServerSideProps (context) {
   const res = await fetch ("https://fakestoreapi.com/products")
   const data = await res.json()
   return {props: {data:data}}
}



export default function Home({data}) {
   
function getTopSellers() {
   // const randomOne = data[Math.floor(Math.random() * 20)]
   // const randomTwo = data[Math.floor(Math.random() * 20)]
   // if (randomOne === randomTwo) {
   //    randomTwo = Math.floor(Math.random() * 20)  
   // } 
   // const randomThree = 
}


   return (
   <div>
   <Carousel data={fakeData} />;
   <PhotoCard price={data[Math.floor(Math.random() * 20)].price} image={data[Math.floor(Math.random() * 20)].image} />
   </div>
   )}
