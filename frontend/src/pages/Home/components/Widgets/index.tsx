import classNames from "classnames/bind";
import styles from "./Widgets.module.scss";
import Banner from "./components/Banner";
import Quicklink from "./components/Quicklink";
import Topdeal from "./components/Topdeal";

const cx = classNames.bind(styles);

const Widgets = () => {
  return (
    <div className={cx("widgets")}>
      <Banner />
      <Quicklink />
      <Topdeal />
    </div>
  );
};

export default Widgets;
