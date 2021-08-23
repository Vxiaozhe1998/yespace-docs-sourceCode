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
        <div className="container">
          <div className={clsx("row")}>
            <div className="col col--8">
              <h1 className={clsx(styles.headline)}>合作方案</h1>
              <div className={clsx("row")}>
                <div className="col col--7">
                  <p className={clsx(styles.subtitle)}>
                    悠悦<strong>免费提供</strong>
                  </p>
                  {itemList.map((props, idx) => (
                    <Item key={idx} {...props} />
                  ))}
                  <div className={clsx(styles.charge)}>
                    <p>&nbsp;仅对隔夜使用行为收取费用&nbsp;</p>
                  </div>
                </div>
                <div className={clsx("col col--5"),styles.subFlex}>
                  <p className={clsx(styles.subtitle)}>馆方提供</p>
                  <div className={clsx(styles.tagSub)}>一般照明电源</div>
                  <div className={clsx(styles.tagSub)}>产品部署场地</div>
                </div>
              </div>
            </div>
            <div className={clsx("col col--4")}>
              <img
                src="../../static/img/index/project.png"
                className={clsx(styles.image)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
