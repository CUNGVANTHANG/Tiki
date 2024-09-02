import classNames from "classnames/bind";
import styles from "./Ads.module.scss";

const cx = classNames.bind(styles);

const Ads = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("slick-slider")}>
          <img
            style={{ display: "block" }}
            className={cx("slick-arrow", "slick-prev")}
            src="../images/arrow.png"
            alt="arrow"
          />
          <div className={cx("slick-list")}>
            <div
              style={{ transform: "translate3d(-3420px, 0px, 0px)" }}
              className={cx("slick-track")}
            ></div>
          </div>
          <img
            style={{ display: "block" }}
            className={cx("slick-arrow", "slick-next")}
            src="../images/arrow.png"
            alt="arrow"
          />
          <div className={cx("slick-dots")}></div>
        </div>
      </div>
    </div>
  );
};

export default Ads;
