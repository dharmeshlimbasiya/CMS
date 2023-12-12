import React from "react";
import Header from "./header/Header";
import Footer from "../pages/Footer";

const Layout = ({ children, showFooter }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      {/* {showFooter ? null : <Footer />} */}
    </>
  );
};

export default Layout;
