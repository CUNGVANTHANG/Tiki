import classNames from "classnames/bind";

import styles from "./Account.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "~/redux/store/";
import { showModal } from "~/redux/features/modal.slice";
import { logout } from "~/redux/features/auth.slice";

const cx = classNames.bind(styles);

const Account = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  const handleShowModal = () => {
    if (isLoggedIn) {
      return;
    }
    dispatch(showModal());
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div onClick={handleShowModal} className={cx("header__account")}>
      <img src="../images/user.png" alt="User" />
      <span>Tài khoản</span>
      {isLoggedIn && (
        <div className={cx("user-dropdown")}>
          <a rel="nofollow" href="/">
            <p className={cx("item")} title="Thông tin tài khoản">
              Thông tin tài khoản
            </p>
          </a>
          <a rel="nofollow" href="/">
            <p className={cx("item")} title="Đơn hàng của tôi">
              Đơn hàng của tôi
            </p>
          </a>
          <a rel="nofollow" href="/">
            <p className={cx("item")} title="Thông tin tài khoản">
              Trung tâm hỗ trợ
            </p>
          </a>
          <a onClick={handleLogout} href="/">
            <p className={cx("item")}>Đăng xuất</p>
          </a>
        </div>
      )}
    </div>
  );
};

export default Account;
