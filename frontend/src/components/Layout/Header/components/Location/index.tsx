import classNames from "classnames/bind";
import styles from "./Location.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { showModalLocation } from "~/redux/features/modal.slice";

const cx = classNames.bind(styles);

const Loction = () => {
  const [address, _] = useState("Q. Hoàn Kiếm, P. Hàng Trống, Hà Nội");
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

export default Loction;
