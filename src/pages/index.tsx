import React, { FC } from "react";
import  { NextPage } from "next";
import Head from "next/head";
import "../styles/style.sass";
import Layout from "../layout/index";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="index">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <p>index</p>
    </Layout>
  );
};

export default Home;
