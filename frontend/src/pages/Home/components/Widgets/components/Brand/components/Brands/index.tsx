import classNames from "classnames/bind";
import styles from "./Brands.module.scss";

const cx = classNames.bind(styles);

const Brands = (props: any) => {
  return (
    <div className={cx("brand")}>
      <div>
        <a className={cx("brand-image")} href="/">
          <picture>
            <img
              className={cx("brand-icon")}
              src={props.brandImage}
              alt={props.altBrandImage}
            />
          </picture>
        </a>
      </div>
    </div>
  );
};

export default Brands;
