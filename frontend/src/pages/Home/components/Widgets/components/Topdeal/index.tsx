import classNames from "classnames/bind";
import styles from "./Topdeal.module.scss";

const cx = classNames.bind(styles);

const Topdeal = () => {
  return (
    <div className={cx("topdeal")}>
      <div className={cx("header")}>
        <div className={cx("title")}>
          <div className={cx("content")}>
            <img
              src="https://salt.tikicdn.com/ts/upload/f8/77/0b/0923990ed377f50c3796f9e6ce0dddde.png"
              alt="badge"
            />
          </div>
          <a className={cx("view")} href="/">
            Xem tất cả
          </a>
        </div>
      </div>
      <div className={cx("sliders")}></div>
    </div>
  );
};

export default Topdeal;
