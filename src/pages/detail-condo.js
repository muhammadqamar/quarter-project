import React, { useEffect, useState } from 'react';
import { fetchHome } from '../contentfulApi';
import { GetStaticPropsContext } from 'next';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
const DetailCondo = (detailPage) => {
  const [pageDetail, setPageDetail] = useState('');
  const sectionRendererOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const { file } = node.data.target.fields;
        const url = file?.url;
        return <img src={url} />;
      }
    }
  };

  useEffect(() => {
    setPageDetail(detailPage?.detailPage[0]);
  }, []);
  console.log('detailPage', detailPage);
  return (
    <div>
      <div>{pageDetail && documentToReactComponents(pageDetail.detail,sectionRendererOptions)}</div>
    </div>
  );
};

export default DetailCondo;

export async function getStaticProps(context) {
  const detailPage = await fetchHome(context.locale, 'detailCondo');
  return {
    props: {
      detailPage,
    },
  };
}
