import { GetStaticPropsContext } from "next";
import Layout from "../components/Layout";
import HomePage from "../components/HomePage/index.js";
import { fetchHome } from "../contentfulApi";
import { useEffect, useState } from "react";

export default function Home(homePage) {
  console.log(homePage);
  const[homeData,setHomeData]=useState([])
  useEffect(()=>{
    setHomeData(homePage.homePage)
  },[homePage])
  return (
    <Layout>
      <HomePage data={homeData[1]}/>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const homePage = await fetchHome(context.locale,"home");

  return {
    props: {
      homePage,
    },
  };
}
