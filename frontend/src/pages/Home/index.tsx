import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Sidebar from "./components/Sidebar";
import Widgets from "./components/Widgets";

const cx = classNames.bind(styles);

const Home = () => {
  return (
    <div className={cx("content")}>
      <Sidebar />
      <Widgets />
    </div>
  );
};

export default Home;
