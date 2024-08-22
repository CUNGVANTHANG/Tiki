import classNames from "classnames/bind";

import styles from "./Account.module.scss";
import { useDispatch } from "react-redux";
import { showModal } from "~/redux/modalSlice";

const cx = classNames.bind(styles);

const Account = () => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(showModal());
  };

  return (
    <div onClick={handleOnClick} className={cx("header__account")}>
      <img src="../images/user.png" alt="User" />
      <span>Tài khoản</span>
    </div>
  );
};

export default Account;
