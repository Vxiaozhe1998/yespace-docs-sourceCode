import React from "react";
import clsx from "clsx";
import styles from "./ContactModel.module.css";
import "./icon/iconfont.css";
// import { Link } from "react-router-dom";
export default class ContactModel extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <section className={styles.ContactContainer}>
        {/* <a href="" className={styles.contactTel}> */}
        <div className={clsx(styles.weChat)}>
          <img
            src="/yespace-docs/img/contact.png"
            className={styles.contactImg}
          />
          <i className={"yespace yyweixin"}></i>
        </div>
        {/* </a> */}
        <div className={clsx(styles.telContainer)}>
          <a href="tel:4009687598" className={styles.contactTel}>
            400-968-7598
          </a>
          <div className={clsx(styles.telePhone)}>
            <i className={"yespace yydianhua"}></i>
          </div>
        </div>
      </section>
    );
  }
}
