import classNames from "classnames/bind";

import styles from "./Account.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "~/redux/store/";
import { showModalLogin } from "~/redux/features/modal.slice";
import { logout } from "~/redux/features/auth.slice";
import { auth } from "~/services/firebase";

const cx = classNames.bind(styles);

const Account = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  const handleshowModalLogin = () => {
    if (isLoggedIn) {
      return;
    }
    dispatch(showModalLogin());
  };

  const handleLogout = async () => {
    await auth.signOut();
    dispatch(logout());
  };

  return (
    <div onClick={handleshowModalLogin} className={cx("header__account")}>
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
