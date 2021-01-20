import React, { FC } from "react";
import  { NextPage } from "next";
import Head from "next/head";
import Layout from "../layout/index";
import "../styles/style.sass";

const About:NextPage = () => {
  return (
    <Layout>
      <div className="index">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <p>about</p>
      </div>
    </Layout>
  );
};

export default About;
