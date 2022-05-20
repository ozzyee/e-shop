import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Carousel from "../components/carousel";

const fakeData = ["1", "2", "3", "4"];

export default function Home() {
   return <Carousel data={fakeData}/>;
}
