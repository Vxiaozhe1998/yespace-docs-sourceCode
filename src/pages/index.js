import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
// import BrowserOnly from "@docusaurus/BrowserOnly";
// import HomepageFeatures from "../components/HomepageFeatures";
// import NewsModel from "../components/NewsModel";
import AboutUniversity from "../components/AboutUniversity";
import BusinessModel from "../components/BusinessModel";
import ContactModel from "../components/ContactModel";
import "animate.css";

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
            <b className={clsx(styles.heroTitle)}>{siteConfig.title}</b>
            <p className={clsx(styles.heroSubtitle)}>{siteConfig.tagline}</p>
            <div className={clsx("row", styles.buttons)}>
              <Link
                className="button button--secondary button--lg"
                to="/user/intro"
              >
                使用教程 ⏱️
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/business/intro"
              >
                商务合作 🤝
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
      <ContactModel />
      <HomepageHeader />
      <main className={clsx("animate__animated animate__fadeInUp")}>
        <AboutUniversity />
        <BusinessModel />
        {/* <NewsModel /> */}
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
