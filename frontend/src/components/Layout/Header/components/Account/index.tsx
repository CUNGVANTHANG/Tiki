import classNames from "classnames/bind";

import styles from "./Account.module.scss";

const cx = classNames.bind(styles);

const Account = () => {
  return (
    <div className={cx("header__account")}>
      <img src="../images/user.png" alt="User" />
      <span>Tài khoản</span>
    </div>
  );
};

export default Account;
