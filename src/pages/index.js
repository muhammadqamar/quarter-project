import { GetStaticPropsContext } from "next";
import Layout from "../components/Layout";
import HomePage from "../components/HomePage/index.js";
import { fetchHome } from "../contentfulApi";

export default function Home(homePage) {
  console.log(homePage);
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}

export async function getStaticProps(context) {
  const homePage = await fetchHome(context.locale);

  return {
    props: {
      homePage,
    },
  };
}
