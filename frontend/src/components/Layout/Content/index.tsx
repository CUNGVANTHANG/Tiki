import { Layout } from "antd";
import classNames from "classnames/bind";
import styles from "./Content.module.scss";
import Home from "~/pages/Home";

const { Content } = Layout;

const cx = classNames.bind(styles);

const CustomContent = () => {
  return (
    <Content>
      <div className="breakpoint">
        <div className={cx("content")}>
          <Home />
        </div>
      </div>
    </Content>
  );
};

export default CustomContent;
