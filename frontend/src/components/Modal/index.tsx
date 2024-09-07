import classNames from "classnames/bind";
import styles from "./Modal.module.scss";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "~/redux/store/";
import {
  hideModalLocation,
  hideModalLogin,
  showModalLogin,
} from "~/redux/features/modal.slice";
import firebase, { auth } from "~/services/firebase";
import { login } from "~/redux/features/auth.slice";
import { getDistrict, getProvince, getWard } from "~/services/location";

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
  const [valueProvince, setValueProvince] = useState("");
  const [valueDistrict, setValueDistrict] = useState("");
  const [valueWard, setValueWard] = useState("");
  const [location, setLocation] = useState("");
  const [province, setProvince] = useState<any[]>([]);
  const [ward, setWard] = useState<any[]>([]);
  const [district, setDistrict] = useState<any[]>([]);
  const [isOptionProvince, setOptionProvince] = useState(false);
  const [isOptionWard, setOptionWard] = useState(false);
  const [isOptionDistrict, setOptionDistrict] = useState(false);
  const [isForm, setForm] = useState(false);
  const [idProvince, setIdProvince] = useState("");
  const [idDistrict, setIdDistrict] = useState("");
  const [isPicker, setPicker] = useState(false);
  const isVisible = useSelector(
    (state: RootState) => state.modal.isVisibleLocation
  );
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const modalRef = useRef<HTMLDivElement>(null);
  const refProvince = useRef<HTMLDivElement>(null);
  const refDictrict = useRef<HTMLDivElement>(null);
  const refWard = useRef<HTMLDivElement>(null);
  const svg = (
    <svg
      height="20"
      width="20"
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
      className={cx("control-icon-svg")}
    >
      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
    </svg>
  );

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      refProvince.current &&
      !refProvince.current.contains(event.target as Node)
    ) {
      setOptionProvince(false);
    }

    if (
      refDictrict.current &&
      !refDictrict.current.contains(event.target as Node)
    ) {
      setOptionDistrict(false);
    }

    if (refWard.current && !refWard.current.contains(event.target as Node)) {
      setOptionWard(false);
    }

    if (
      isVisible &&
      modalRef.current &&
      !modalRef.current.contains(event.target as Node)
    ) {
      handleOnClose();
    }
  }, []);

  const handleOnClose = () => {
    dispatch(hideModalLocation());
  };

  const handleOnLogin = () => {
    dispatch(hideModalLocation());
    dispatch(showModalLogin());
  };

  const handleSaveLocation = () => {
    if (!isLoggedIn) {
      let locationText = "";
      if (valueWard && valueDistrict && valueProvince) {
        locationText = `${valueWard}, ${valueDistrict}, ${valueProvince}`;
      } else if (location) {
        locationText = location;
      }
      setLocation(locationText);
      localStorage.setItem("location", locationText);
      handleOnClose();
      window.location.reload();
    }
  };

  useEffect(() => {
    if (!isLoggedIn) {
      const savedLocation = localStorage.getItem("location");
      savedLocation && setLocation(savedLocation);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const fetchProvince = async () => {
      try {
        const province = await getProvince();
        setProvince(province);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProvince();
  }, []);

  useEffect(() => {
    const fetchWard = async () => {
      try {
        const ward = await getWard(idDistrict);
        setWard(ward);
      } catch (error) {
        console.error("Failed to fetch ward:", error);
      }
    };

    fetchWard();
  }, [idDistrict]);

  useEffect(() => {
    const fetchDistrict = async () => {
      try {
        const district = await getDistrict(idProvince);
        setDistrict(district);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchDistrict();
  }, [idProvince]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    isVisible && (
      <div>
        <div className={cx("overlay")}>
          <div ref={modalRef} className={cx("modal-location-content")}>
            <div className={cx("modal-location-wrapper")}>
              <a onClick={handleOnClose} className={cx("modal-location-close")}>
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
                {!isLoggedIn && (
                  <div className={cx("modal-location-login")}>
                    <button onClick={handleOnLogin}>
                      Đăng nhập để chọn địa chỉ giao hàng
                    </button>
                    <div>
                      <p>hoặc</p>
                    </div>
                  </div>
                )}
                <div className={cx("modal-location-picker")}>
                  <button
                    onClick={() => {
                      if (isPicker || isForm) {
                        setPicker(!isPicker);
                        setForm(!isForm);
                      }
                    }}
                    className={cx("radio-button")}
                  >
                    <span
                      className={cx(
                        "tiki-icon",
                        !isPicker
                          ? "icon-radio-button"
                          : "icon-radio-button-off"
                      )}
                    ></span>
                    <span className={cx("picker-text")}>
                      {location
                        ? location
                        : "Phường Hàng Trống, Quận Hoàn Kiếm, Hà Nội"}
                    </span>
                  </button>
                </div>
                <div className={cx("modal-location-picker")}>
                  <button
                    onClick={() => {
                      if (!isPicker || !isForm) {
                        setPicker(!isPicker);
                        setForm(!isForm);
                      }
                    }}
                    className={cx("radio-button")}
                  >
                    <span
                      className={cx(
                        "tiki-icon",
                        isPicker ? "icon-radio-button" : "icon-radio-button-off"
                      )}
                    ></span>
                    <span className={cx("picker-text")}>
                      Chọn khu vực giao hàng khác
                    </span>
                  </button>
                </div>

                {isForm && (
                  <div className={cx("modal-location-form")}>
                    <div className={cx("row")}>
                      <p className={cx("location-type")}>Tỉnh/Thành phố</p>
                      <div
                        onClick={() => {
                          setOptionProvince(!isOptionProvince);
                        }}
                        className={cx("location-option")}
                      >
                        <div
                          style={
                            isOptionProvince
                              ? {
                                  borderColor: "rgb(24, 158, 255)",
                                  boxShadow:
                                    "rgb(24, 158, 255) 0px 0px 0px 1px",
                                }
                              : {}
                          }
                          className={cx("location-control")}
                        >
                          <div className={cx("location-control-text")}>
                            <div className={cx("location-control-value")}>
                              {valueProvince
                                ? valueProvince
                                : "Vui lòng chọn tỉnh/thành phố"}
                            </div>
                            <div className={cx("location-control-brick")}>
                              <div style={{ display: "inline-block" }}>
                                <input
                                  style={
                                    isOptionProvince
                                      ? { opacity: "1" }
                                      : { opacity: "0" }
                                  }
                                  className={cx("brick")}
                                />
                                <div className={cx("brick-value")}></div>
                              </div>
                            </div>
                          </div>
                          <div className={cx("location-control-icon")}>
                            <span className={cx("separator")}></span>
                            <div className={cx("control-icon")}>{svg}</div>
                          </div>
                        </div>
                        {isOptionProvince && (
                          <div
                            ref={refProvince}
                            className={cx("location-menu")}
                          >
                            <div className={cx("menu-wrapper")}>
                              {province.map((item, index) => (
                                <div
                                  onClick={() => {
                                    setValueProvince(item.name);
                                    setIdProvince(item.id);
                                    setOptionProvince(!isOptionProvince);
                                  }}
                                  key={index}
                                  className={cx("menu-option")}
                                >
                                  {item.name}
                                </div>
                              ))}
                              {province.length === 0 && (
                                <div className={cx("no-value")}>
                                  Không có dữ liệu
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className={cx("row")}>
                      <p className={cx("location-type")}>Quận/Huyện</p>
                      <div
                        onClick={() => setOptionDistrict(!isOptionDistrict)}
                        style={!valueProvince ? { pointerEvents: "none" } : {}}
                        className={cx("location-option")}
                      >
                        <div
                          style={
                            !valueProvince
                              ? {
                                  backgroundColor: "rgb(242, 242, 242)",
                                  borderColor: "rgb(230, 230, 230)",
                                }
                              : {} && isOptionDistrict
                              ? {
                                  borderColor: "rgb(24, 158, 255)",
                                  boxShadow:
                                    "rgb(24, 158, 255) 0px 0px 0px 1px",
                                }
                              : {}
                          }
                          className={cx("location-control")}
                        >
                          <div className={cx("location-control-text")}>
                            <div
                              style={
                                !valueProvince
                                  ? { color: "rgb(153, 153, 153)" }
                                  : {}
                              }
                              className={cx("location-control-value")}
                            >
                              {valueDistrict
                                ? valueDistrict
                                : "Vui lòng chọn quận/huyện"}
                            </div>
                            <div className="location-control-brick">
                              <div style={{ display: "inline-block" }}>
                                <input
                                  style={{ opacity: "0" }}
                                  className={cx("brick")}
                                />
                              </div>
                            </div>
                          </div>
                          <div className={cx("location-control-icon")}>
                            <span
                              style={
                                !valueProvince
                                  ? { backgroundColor: "rgb(230, 230, 230)" }
                                  : {}
                              }
                              className={cx("separator")}
                            ></span>
                            <div className={cx("control-icon")}>{svg}</div>
                          </div>
                        </div>
                        {isOptionDistrict && (
                          <div
                            ref={refDictrict}
                            className={cx("location-menu")}
                          >
                            <div className={cx("menu-wrapper")}>
                              {district.map((item, index) => (
                                <div
                                  onClick={() => {
                                    setValueDistrict(item.full_name);
                                    setIdDistrict(item.id);
                                    setOptionDistrict(!isOptionDistrict);
                                  }}
                                  key={index}
                                  className={cx("menu-option")}
                                >
                                  {item.full_name}
                                </div>
                              ))}
                              {district.length === 0 && (
                                <div className={cx("no-value")}>
                                  Không có dữ liệu
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className={cx("row")}>
                      <p className={cx("location-type")}>Phường/Xã</p>
                      <div
                        onClick={() => setOptionWard(!isOptionWard)}
                        style={!valueDistrict ? { pointerEvents: "none" } : {}}
                        className={cx("location-option")}
                      >
                        <div
                          style={
                            !valueDistrict
                              ? {
                                  backgroundColor: "rgb(242, 242, 242)",
                                  borderColor: "rgb(230, 230, 230)",
                                }
                              : {} && isOptionWard
                              ? {
                                  borderColor: "rgb(24, 158, 255)",
                                  boxShadow:
                                    "rgb(24, 158, 255) 0px 0px 0px 1px",
                                }
                              : {}
                          }
                          className={cx("location-control")}
                        >
                          <div className={cx("location-control-text")}>
                            <div
                              style={
                                !valueDistrict
                                  ? { color: "rgb(153, 153, 153)" }
                                  : {}
                              }
                              className={cx("location-control-value")}
                            >
                              {valueWard
                                ? valueWard
                                : "Vui lòng chọn phường xá/xã"}
                            </div>
                            <div className="location-control-brick">
                              <div style={{ display: "inline-block" }}>
                                <input
                                  style={{ opacity: "0" }}
                                  className={cx("brick")}
                                />
                              </div>
                            </div>
                          </div>
                          <div className={cx("location-control-icon")}>
                            <span
                              style={
                                !valueDistrict
                                  ? { backgroundColor: "rgb(230, 230, 230)" }
                                  : {}
                              }
                              className={cx("separator")}
                            ></span>
                            <div className={cx("control-icon")}>{svg}</div>
                          </div>
                        </div>
                        {isOptionWard && (
                          <div ref={refWard} className={cx("location-menu")}>
                            <div className={cx("menu-wrapper")}>
                              {ward.map((item, index) => (
                                <div
                                  onClick={() => {
                                    setValueWard(item.full_name);
                                    setOptionWard(!isOptionWard);
                                  }}
                                  key={index}
                                  className={cx("menu-option")}
                                >
                                  {item.full_name}
                                </div>
                              ))}
                              {ward.length === 0 && (
                                <div className={cx("no-value")}>
                                  Không có dữ liệu
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div
                onClick={handleSaveLocation}
                className={cx("modal-location-footer")}
              >
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
