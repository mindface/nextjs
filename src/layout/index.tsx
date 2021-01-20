import Document, { Html, Head, Main, NextScript } from "next/document";
import React, { ReactNode } from "react";
import BaseNavi from '../components/BaseNavi'

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="wrapper">
      <BaseNavi />
      {children}
      <footer className="footer">
        <h3 className="inner">footer</h3>
      </footer>
    </div>
  );
};

export default Layout;
