import classNames from "classnames/bind";
import styles from "./Location.module.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showModalLocation } from "~/redux/features/modal.slice";
import { RootState } from "~/redux/store";

const cx = classNames.bind(styles);

const Location = () => {
  const [address, setAddress] = useState("Bạn vui lòng nhập địa chỉ giao hàng");
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      const savedAddress = localStorage.getItem("location");
      if (savedAddress) {
        const parts = savedAddress?.split(",");
        const ward = parts[0]?.trim().replace(/^(Phường|Xã)\s/, (match) => {
          return match === "Phường " ? "P. " : "X. ";
        });
        const district = parts[1]
          ?.trim()
          .replace(/^(Quận|Huyện)\s/, (match) => {
            return match === "Quận " ? "Q. " : "H. ";
          });
        setAddress(`${district}, ${ward}, ${parts[2]}`);
      }
    }
  }, [isLoggedIn]);

  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(showModalLocation());
  };
  return (
    <div onClick={handleOnClick} className={cx("header__location")}>
      <div className={cx("wrapper")}>
        <img src="../images/location.png" alt="Location" />
        <h4 className={cx("title")}>Giao đến:</h4>
        <div className={cx("address")}>{address}</div>
      </div>
    </div>
  );
};

export default Location;
