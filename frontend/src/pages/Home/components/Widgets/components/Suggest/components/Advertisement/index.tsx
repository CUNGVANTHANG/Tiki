import classNames from "classnames/bind";
import styles from "./Advertisement.module.scss";

const cx = classNames.bind(styles);

const Advertisement = (props: any) => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <a className={cx("brand")} href={props.hrefBrand}>
          <picture>
            <img
              className={cx("banner-image")}
              src={props.brand}
              alt={props.altBrand}
            />
          </picture>
          <span className={cx("see-more")}>
            Xem thêm
            <img src="../svg/icon_next.svg" alt="Xem thêm" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Advertisement;
