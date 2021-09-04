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
          <div className={styles.contactArea}>
            <p>扫码添加微信客服</p>
            <img
              src="/yespace-docs/img/contact.png"
              className={styles.contactImg}
            />
            <p>发起在线聊天</p>
            <a href="https://work.weixin.qq.com/kfid/kfc1577b6d1b6dd6405">
            在线聊天
          </a>
          </div>
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
