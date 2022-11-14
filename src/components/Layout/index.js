import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Index = ({ props, children, headerBg }) => {
  return (
    <d>
      <Header headerBg={headerBg} />
      <div {...props}>{children}</div>
      <Footer />
    </d>
  );
};

export default Index;
