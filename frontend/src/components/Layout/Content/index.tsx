import { Layout } from "antd";
import classNames from "classnames/bind";
import styles from "./Content.module.scss";
import Sidebar from "./components/Sidebar";
import Widgets from "./components/Widgets";

const { Content } = Layout;

const cx = classNames.bind(styles);

const CustomContent = () => {
  return (
    <Content>
      <div className="breakpoint">
        <div className={cx("content")}>
          <Sidebar />
          <Widgets />
        </div>
      </div>
    </Content>
  );
};

export default CustomContent;
