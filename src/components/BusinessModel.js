import React from "react";
import clsx from "clsx";
import styles from "./BusinessModel.module.css";

export default class BusinessModel extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className={clsx(styles.BusinessModel)}>
        <div className="container">
          <div className="row">
            <div className="col col--8">
              <h1>Hello World!</h1>
            </div>
            <div className="col col--4">
              <h2>hi</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
