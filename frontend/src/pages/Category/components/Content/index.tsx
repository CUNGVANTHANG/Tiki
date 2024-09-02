import classNames from "classnames/bind";
import styles from "./Content.module.scss";
import Sidebar from "./components/Sidebar";
import Ads from "./components/Ads";

const cx = classNames.bind(styles);

const Layout = (props: any) => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("left")}>
        <div className={cx("category")}>
          <div className={cx("category-title")}>Khám phá theo danh mục</div>
          <Sidebar category={props.category} />
        </div>
      </div>
      <div className={cx("right")}>
        <div className={cx("title")}>
          <h2>{props.route}</h2>
        </div>
        <Ads />
      </div>
    </div>
  );
};

export default Layout;
