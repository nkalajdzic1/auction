import React, { useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./Page.css";

const Page = ({ children }: any) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page content">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Page;
