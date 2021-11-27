import React from 'react';
import { Helmet } from 'react-helmet';

export const Metatags = () => {
  return (
    <Helmet>
      <title>Mahady Manana - Javascript Developer</title>
      <meta
        name="description"
        content="Mahady Manana is a Javascript & Typescript & React & Nodejs Developer. Create Taylor-made website, CRM for your company, Web Application..."
      />
      <meta name="google-site-verification" content="JeoPzwGYNNbq7o0RQKORdF4kaaQSgFXUF4xQZq8PfFY" />
      <link rel="cannonical" href="https://mahady-manana.github.io" />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="portfolio" />
      <meta
        property="og:title"
        content="Mahady Manana - Fullstack Javascript Developer"
      />
      <meta
        property="og:description"
        content="Mahady Manana is a Fullstack javascript Developer work with Javascript, Typescript, Nodejs, Reactjs"
      />
      <meta
        property="og:image"
        content="https://mahady-manana.github.io/Mahady-Manana.png"
      />
      <meta property="og:url" content="/" />
      <meta property="og:site_name" content="MAHADY MANANA" />
      <meta
        name="twitter:title"
        content="Mahady Manana - Fullstack Javascript Developer"
      />
      <meta
        name="twitter:description"
        content="Technology & Digitalization. Fullstack Developer with JS/TS, React, Nodejs, NoSQL Database..."
      />
      <meta
        name="twitter:image"
        content="https://mahady-manana.github.io/Mahady-Manana.png"
      />
      <meta name="twitter:site" content="@MahadyManana" />
      <meta name="twitter:creator" content="@MahadyManana" />
    </Helmet>
  );
};
