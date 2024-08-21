import { Layout } from "antd";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Search from "./components/Search";
import Account from "./components/Account";
import Cart from "./components/Cart";
import Quicklink from "./components/Quicklink";
import Location from "./components/Location";

const { Header } = Layout;

const cx = classNames.bind(styles);

const CustomHeader = () => {
  return (
    <Header className={cx("header")}>
      <div className="breakpoint">
        <div className={cx("header-layout")}>
          <div className={cx("header__logo")}>
            <a href="/">
              <img src="../images/logo.png" alt="header__logo" />
              <span>Tốt & Nhanh</span>
            </a>
          </div>

          <div className={cx("home__search")}>
            <div className={cx("middle__wrap")}>
              <div className={cx("middle__left")}>
                <Search />
              </div>
              <div className={cx("middle__right")}>
                <div className={cx("header__home")}>
                  <img src="../images/home.png" alt="Home" />
                  <a href="/">Trang chủ</a>
                </div>
                <Account />
                <Cart />
              </div>
            </div>
            <div className={cx("bottom__root")}>
              <Quicklink />
              <Location />
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default CustomHeader;
