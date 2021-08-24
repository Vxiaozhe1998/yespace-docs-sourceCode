import React from "react";
import clsx from "clsx";
import styles from "./BusinessModel.module.css";
const itemList = [
  {
    tag: "物料",
    description: "存包柜及所有相关硬件",
  },
  {
    tag: "安装",
    description: "产品部署所产生人工费",
  },
  {
    tag: "使用",
    description: "白天开馆时间读者使用",
  },
  {
    tag: "售后",
    description: "后期产品维护以及运营",
  },
];
function Item({ tag, description }) {
  return (
    <div className={clsx(styles.item)}>
      <strong className={clsx(styles.tag)}>{tag}</strong>
      <strong className={clsx(styles.description)}>{description}</strong>
    </div>
  );
}
export default class BusinessModel extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className={clsx(styles.BusinessModel)}>
        <div className={clsx("container", styles.mainCard)}>
          <div className={clsx(styles.headline)}>
            <h1>合作方案</h1>
          </div>
          <div className={clsx(styles.yespaceCard)}>
            <p className={clsx(styles.subtitle)}>
              悠悦<strong>免费提供</strong>
            </p>
            {itemList.map((props, idx) => (
              <Item key={idx} {...props} />
            ))}
          </div>
          <div className={clsx(styles.libraryCard)}>
            <p className={clsx(styles.subtitle)}>馆方仅需提供</p>
            <p className={clsx(styles.tagSub)}>一般照明电源</p>
            <p className={clsx(styles.tagSub)}>产品部署场地</p>
          </div>
          <div className={clsx(styles.charge)}>
            <p>&nbsp;仅对隔夜使用行为收取费用&nbsp;</p>
          </div>
          <div className={clsx(styles.more)}>
            <a href="business/case/qfnu">查看更多方案</a>
          </div>
        </div>
      </div>
    );
  }
}
