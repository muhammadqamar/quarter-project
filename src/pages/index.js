import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import HomePage from "../components/HomePage/index.js";

export default function Home() {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}
