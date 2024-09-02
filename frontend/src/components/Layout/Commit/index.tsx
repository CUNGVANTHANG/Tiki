import classNames from "classnames/bind";
import styles from "./Commit.module.scss";
import React from "react";
import { RootState } from "~/redux/store/";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);

const details = [
  { image: "../images/authentic-product.png", text: "100% hàng thật" },
  {
    image: "../images/discount.png",
    text: "Hoàn 200% nếu hàng giả",
  },
  {
    image: "../images/return.png",
    text: "30 ngày đổi trả",
  },
  {
    image: "../images/shipping.png",
    text: "Giao nhanh 2h",
  },
  {
    image: "../images/cheap-price.png",
    text: "Giá siêu rẻ",
  },
  {
    image: "../images/freeship.png",
    text: "Freeship mọi đơn",
  },
];

const Commit = () => {
  const isVisible = useSelector((state: RootState) => state.search.isVisible);

  return (
    <>
      <div className={cx("free-shipping")}>
        <a className={cx("wrapper")} href="">
          <div className={cx("commit")}>Cam kết</div>
          <div className={cx("commit-details")}>
            {details.map((detail, index) => (
              <React.Fragment key={index}>
                <div key={index} className={cx("commit-detail")}>
                  <picture>
                    <img
                      className={cx("commit-detail-icon")}
                      src={detail.image}
                      alt={detail.text}
                    />
                  </picture>
                  <div className={cx("commit-detail-text")}>{detail.text}</div>
                </div>

                <div className={cx("line")}></div>
              </React.Fragment>
            ))}
          </div>
        </a>
      </div>
      {isVisible && <div className={cx("overlay")}></div>}
    </>
  );
};

export default Commit;
