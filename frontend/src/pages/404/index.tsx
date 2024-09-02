import classNames from "classnames/bind";
import styles from "./404.module.scss";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

const NotFound = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/");
  };
  return (
    <div className={cx("breakpoint")}>
      <div className={cx("wrapper")}>
        <div className={cx("icon")}>
          <img
            width={200}
            height={200}
            src="https://salt.tikicdn.com/ts/brickv2og/3c/7c/9b/1d101c4757843340d812828590283374.png"
            alt="icon-not-found"
          />
        </div>
        <div className={cx("text")}>Trang bạn đang tìm kiếm không tồn tại</div>
        <div onClick={handleOnClick} className={cx("button")}>
          Tiếp Tục Mua Sắm
        </div>
      </div>
    </div>
  );
};

export default NotFound;
