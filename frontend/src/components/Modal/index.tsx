import classNames from "classnames/bind";
import styles from "./Modal.module.scss";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "~/redux/store/";
import { hideModalLogin } from "~/redux/features/modal.slice";
import firebase, { auth } from "~/services/firebase";
import { login } from "~/redux/features/auth.slice";

const cx = classNames.bind(styles);

const ModalLogin = () => {
  const [phone, setPhone] = useState("");
  const isVisible = useSelector(
    (state: RootState) => state.modal.isVisibleLogin
  );
  const dispatch = useDispatch();
  const modalRef = useRef<HTMLDivElement>(null);
  const fbProvider = new firebase.auth.FacebookAuthProvider();

  const handleFbLogin = () => {
    auth.signInWithPopup(fbProvider);
  };

  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = user;

        dispatch(
          login({
            displayName,
            email,
            uid,
            photoURL,
          })
        );
        dispatch(hideModalLogin());
      }
    });

    return () => {
      unsubscribed();
    };
  }, [dispatch]);

  const handlehideModalLogin = () => {
    dispatch(hideModalLogin());
    setPhone("");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isVisible &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        handlehideModalLogin();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  return (
    isVisible && (
      <div id="modal" className={cx("modal")}>
        <div className={cx("overlay")}>
          <div className={cx("content")}>
            <div ref={modalRef} className={cx("wrapper")}>
              <button
                onClick={handlehideModalLogin}
                className={cx("btn-close")}
              >
                <img
                  className={cx("close-img")}
                  src="../images/close.png"
                  alt="Close"
                />
              </button>
              <div className={cx("styles__left")}>
                <div className={cx("login")}>
                  <div className={cx("heading")}>
                    <h4>Xin chào,</h4>
                    <p>Đăng nhập hoặc Tạo tài khoản</p>
                  </div>

                  <form action="">
                    <div
                      className={
                        phone ? cx("input", "input-fill") : cx("input")
                      }
                    >
                      <input
                        onChange={handlePhoneChange}
                        type="tel"
                        name="tel"
                        placeholder="Số điện thoại"
                        maxLength={10}
                        value={phone}
                      />
                    </div>
                    <button>Tiếp Tục</button>
                  </form>
                  <p className={cx("login-with-email")}>Đăng nhập bằng email</p>

                  <div className={cx("social")}>
                    <p className={cx("social-heading")}>
                      <span>Hoặc tiếp tục bằng</span>
                    </p>
                    <ul className={cx("social-items")}>
                      <li onClick={handleFbLogin} className={cx("social-item")}>
                        <img
                          src="https://salt.tikicdn.com/ts/upload/3a/22/45/0f04dc6e4ed55fa62dcb305fd337db6c.png"
                          alt="Facebook"
                        />
                      </li>
                      <li className={cx("social-item")}>
                        <img
                          src="https://salt.tikicdn.com/ts/upload/1c/ac/e8/141c68302262747f5988df2aae7eb161.png"
                          alt="Google"
                        />
                      </li>
                    </ul>
                    <p className={cx("note")}>
                      {"Bằng việc tiếp tục, bạn đã đọc và đồng ý với "}
                      <a href="/">{"điều khoản sử dụng "}</a>
                      {" và "}
                      <a href="/">{"Chính sách bảo mật thông tin cá nhân "}</a>
                      {" của Tiki"}
                    </p>
                  </div>
                </div>
              </div>
              <div className={cx("styles__right")}>
                <img src="../images/login.png" alt="Login" />
                <div>
                  <h4>Mua sắm tại Tiki</h4>
                  <span>Siêu ưu đãi mỗi ngày</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

const ModalLocation = () => {
  const isVisible = useSelector(
    (state: RootState) => state.modal.isVisibleLocation
  );

  return (
    isVisible && (
      <div>
        <div className={cx("overlay")}>
          <div className={cx("modal-location-content")}>
            <div className={cx("modal-location-wrapper")}>
              <a className={cx("modal-location-close")}>
                <span className={cx("tiki-icon", "icon-circle-close")}></span>
              </a>
              <div className={cx("modal-location-header")}>
                <p className={cx("modal-location-title")}>Địa chỉ giao hàng</p>
              </div>
              <div className={cx("modal-location-body")}>
                <p className={cx("modal-location-description")}>
                  Hãy chọn địa chỉ nhận hàng để được dự báo thời gian giao hàng
                  cùng phí đóng gói, vận chuyển một cách chính xác nhất.
                </p>
                <div className={cx("modal-location-login")}>
                  <button>Đăng nhập để chọn địa chỉ giao hàng</button>
                  <div>
                    <p>hoặc</p>
                  </div>
                </div>
                <div className={cx("modal-location-picker")}>
                  <button className={cx("radio-button")}>
                    <span
                      className={cx("tiki-icon", "icon-radio-button")}
                    ></span>
                    <span className={cx("picker-text")}>
                      Phường Mai Dịch, Quận Cầu Giấy, Hà Nội
                    </span>
                  </button>
                </div>
                <div className={cx("modal-location-picker")}>
                  <button className={cx("radio-button")}>
                    <span
                      className={cx("tiki-icon", "icon-radio-button-off")}
                    ></span>
                    <span className={cx("picker-text")}>
                      Chọn khu vực giao hàng khác
                    </span>
                  </button>
                </div>
              </div>
              <div className={cx("modal-location-footer")}>
                <button className={cx("modal-location-picker-save")}>
                  GIAO ĐẾN ĐỊA CHỈ NÀY
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export { ModalLogin, ModalLocation };
