import React, { useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./Page.css";

const Page = ({ children }: any) => {
  return (
    <div className="page_content">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Page;
