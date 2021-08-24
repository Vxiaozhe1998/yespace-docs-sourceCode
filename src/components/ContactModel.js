import React from "react";
import clsx from "clsx";
import styles from "./ContactModel.module.css";
import "./icon/iconfont.css";

export default class ContactModel extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <section className={styles.ContactContainer}>
        <div className={clsx(styles.weChat)}>
          <i className={"yespace yyweixin"}></i>
        </div>
        <div className={clsx(styles.telePhone)}>
          <i className={"yespace yydianhua"}></i>
        </div>
      </section>
    );
  }
}
