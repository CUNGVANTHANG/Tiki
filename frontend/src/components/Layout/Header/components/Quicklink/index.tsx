import classNames from "classnames/bind";
import styles from "./Quicklink.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);

const Quicklink = () => {
  const [quicklinks, __] = useState([
    "điện gia dụng",
    "xe cộ",
    "mẹ & bé",
    "khỏe đẹp",
    "nhà cửa",
    "sách",
    "thể thao",
  ]);

  return (
    <div className={cx("header__quicklink-container")}>
      {quicklinks.map((quicklink, index) => (
        <a key={index}>{quicklink}</a>
      ))}
    </div>
  );
};

export default Quicklink;
