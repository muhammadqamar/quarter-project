import React, { useEffect, useState } from "react";
import { fetchEntries } from "../../contentfulApi";
import Layout from "../../components/Layout";
import DetailContentCondo from "../../components/detailContentCondo";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

export default function Detail({ condo }) {
  const [pageDetail, setPageDetail] = useState("");
  const sectionRendererOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { file } = node.data.target.fields;
        const url = file?.url;
        return <img src={url} />;
      },
    },
  };

  useEffect(() => {
    setPageDetail(condo?.[0]?.fields);
  }, [condo]);

  return (
    <Layout headerBg={"#071c1f"}>
      <div className="main_content">
        <div className="container condo_content_detail">
          <div className="row content_row">
            <div className="col-md-8 left_col">
              {pageDetail &&
                documentToReactComponents(
                  pageDetail.detail,
                  sectionRendererOptions
                )}
            </div>
            <DetailContentCondo />
          </div>
        </div>
      </div>
    </Layout>
  );
}

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths(context) {
  const detailPage = await fetchEntries("detailCondo");
  const paths = detailPage.filter((condo) => {
    if (condo.pageUrl) {
      return { params: { detail: condo.pageUrl } };
    }
  });

  // { fallback: false } means other routes should 404
  return {
    paths,
    fallback: true,
  };
}
// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params }) {
  const detailPage = await fetchEntries("detailCondo");
  return {
    // Passed to the page component as props
    props: {
      condo: detailPage.filter((condo) => {
        if (condo.fields?.pageUrl === params.detail) {
          return condo.fields;
        }
      }),
    },
  };
}
