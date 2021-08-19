import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
// import BrowserOnly from "@docusaurus/BrowserOnly";
import HomepageFeatures from "../components/HomepageFeatures";
import AboutUniversity from "../components/AboutUniversity";
import BusinessModel from "../components/BusinessModel";

// var AboutUniversity = React.lazy(() => import("../components/AboutUniversity"));

const SvgList = [
  {
    title: "悠悦易存",
    Svg: require("../../static/img/logo.svg").default,
  },
];
function SvgRoom({ title, Svg }) {
  return (
    <div className={clsx("col col--2", styles.logo)}>
      <Svg alt={title} />
    </div>
  );
}
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--10">
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={clsx("row",styles.buttons)}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro"
              >
                使用教程 ⏱️
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro"
              >
                商务咨询 ☎️
              </Link>
            </div>
          </div>
          {SvgList.map((props, idx) => (
            <SvgRoom key={idx} {...props} />
          ))}
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={``}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />

      <main>
        <AboutUniversity />
        <BusinessModel />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
