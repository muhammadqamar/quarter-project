import Layout from "../components/Layout";
import HomePage from "../components/HomePage/index.js";
import { fetchEntries } from "../contentfulApi";

export default function Home({ homePage }) {
  return (
    <Layout>
      <HomePage data={homePage?.fields} />
    </Layout>
  );
}

export async function getStaticProps() {
  const homePage = await fetchEntries("home");

  return {
    props: {
      homePage: homePage[0],
    },
  };
}
