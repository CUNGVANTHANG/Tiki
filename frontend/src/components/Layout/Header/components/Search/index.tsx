import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

const Search = () => {
  const [placeholder, setPlaceholder] = useState("Bạn tìm gì hôm nay");
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    const placeholders = [
      "Bạn tìm gì hôm nay",
      "Giao nhanh 2H & đúng khung giờ",
      "100% Hàng tuyển chọn",
    ];

    let index = 0;

    const interval = setInterval(() => {
      index == 2 ? (index = 0) : (index = (index + 1) % placeholders.length);
      setPlaceholder(placeholders[index]);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cx("header__search")}>
      <div className={cx("search-form")}>
        <img
          className={cx("icon-search")}
          src="../images/search.png"
          alt="header__search"
        />
        <input
          type="text"
          onChange={handleInputChange}
          placeholder={placeholder}
          value={inputValue}
          className={cx("search-input")}
        />
        <button className={cx("search-btn")}>Tìm kiếm</button>

        {/* <div className={cx("search-quick")}>
          <div className={cx("top-widgets")}>
            <div className={cx("item promo")}>
              <a href="/">Sách Mới Tháng 8</a>
              <div className={cx("keyword")}>Sách Mới Tháng 8</div>
              <picture className={cx("webpimg-container")}>
                <img
                  className={cx("WebpImg__StyledImg-sc-h3ozu8-0 fWjUGo banner")}
                  src="../images/30%off.png"
                ></img>
              </picture>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Search;
