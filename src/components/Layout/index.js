import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Index = ({ props, children, headerBg }) => {
  return (
    <div>
      <Header headerBg={headerBg} />
      <div {...props}>{children}</div>
      <Footer />
    </div>
  );
};

export default Index;
