/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import DetailContentCondo from "../components/detailContentCondo";
import { fetchHome } from "../contentfulApi";
import { GetStaticPropsContext } from "next";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import Detail from "./condo/[detail]";

const DetailCondo = (detailPage) => {
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
    setPageDetail(detailPage?.detailPage[0]);
  }, []);
  console.log("detailPage", detailPage);
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
};

export default DetailCondo;

export async function getStaticProps(context) {
  const detailPage = await fetchHome(context.locale, "detailCondo");
  return {
    props: {
      detailPage,
    },
  };
}
