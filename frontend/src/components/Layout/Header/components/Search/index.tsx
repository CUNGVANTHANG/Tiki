import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideSearch, showSearch } from "~/redux/features/search.slice";
import { RootState } from "~/redux/store/";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

const Search = () => {
  const [placeholder, setPlaceholder] = useState("Bạn tìm gì hôm nay");
  const [inputValue, setInputValue] = useState("");
  const [suggestions, _] = useState([
    "phiếu quà tặng",
    "tư duy ngược",
    "thẻ cào viettel",
    "iphone 15 pro max",
    "apple watch",
    "tai nghe bluetooth",
    "iphone 13",
    "tư duy ngược tư duy mở",
    "bánh trung thu",
    "iphone",
  ]);
  const [popularSearches, __] = useState([
    {
      title: "tablet",
      image:
        "https://salt.tikicdn.com/cache/280x280/media/catalog/producttmp/bd/5d/bb/251bd5e19f207e9a572fbc65cb4df588.jpg",
    },
    {
      title: "muôn kiếp nhân sinh",
      image:
        "https://salt.tikicdn.com/cache/280x280/ts/product/30/ee/5a/e2aed009bb558b5d2cfbbe157b428ba4.jpg",
    },
    {
      title: "áo len trẻ trung nữ",
      image:
        "https://salt.tikicdn.com/cache/280x280/ts/product/fa/be/11/5c23de6156b26130c306b0ca9d9a93a6.jpg",
    },
    {
      title: "dép thái lan",
      image:
        "https://salt.tikicdn.com/cache/280x280/ts/product/a6/32/94/d22e523300ae5f99979774104199076e.jpg",
    },
    {
      title: "st ives",
      image:
        "https://salt.tikicdn.com/cache/280x280/ts/product/f8/68/1b/7c02ea154061ae9962ad94eee5e52392.jpg",
    },
    {
      title: "anessa official store",
      image:
        "https://salt.tikicdn.com/cache/280x280/ts/product/f0/0a/44/1db210b3332da33c457f63869857588d.jpg",
    },
  ]);
  const [featuredCategories, ___] = useState([
    {
      title: "Nhà Sách Tiki",
      image:
        "https://salt.tikicdn.com/ts/category/ed/20/60/afa9b3b474bf7ad70f10dd6443211d5f.png",
    },
    {
      title: "Sữa rửa mặt",
      image:
        "https://salt.tikicdn.com/ts/category/b0/f8/22/03bfb3ceccc1a96eba96492d762f0f20.png",
    },
    {
      title: "Điện Gia Dụng",
      image:
        "https://salt.tikicdn.com/ts/category/61/d4/ea/e6ea3ffc1fcde3b6224d2bb691ea16a2.png",
    },
    {
      title: "Máy tính bảng",
      image:
        "https://salt.tikicdn.com/ts/category/f5/e0/74/753fb4a026262e4c1464e3a403ee405e.png",
    },
    {
      title: "Bộ ga, ra, drap",
      image:
        "https://salt.tikicdn.com/cache/280x280/ts/product/68/f3/5e/b5a535b9ed86f9289fcdf34000afb28e.jpg",
    },
    {
      title: "Thời trang nữ",
      image:
        "https://salt.tikicdn.com/ts/category/55/5b/80/48cbaafe144c25d5065786ecace86d38.png",
    },
    {
      title: "Đồ chơi - Mẹ & Bé",
      image:
        "https://salt.tikicdn.com/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png",
    },
    {
      title: "Nhà Cửa - Đời Sống",
      image:
        "https://salt.tikicdn.com/ts/category/f6/22/46/7e2185d2cf1bca72d5aeac385a865b2b.png",
    },
  ]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const isVisible = useSelector((state: RootState) => state.search.isVisible);
  const searchRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleShowSuggestions = () => {
    setShowSuggestions(!showSuggestions);
  };

  const handleShowSearch = () => {
    dispatch(showSearch());
  };

  const handleHideSearch = () => {
    dispatch(hideSearch());
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isVisible &&
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        handleHideSearch();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);

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

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    dispatch(hideSearch());
    const query = inputValue.trim();

    if (query) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      handleFormSubmit(event);
    }
  };

  return (
    <form
      ref={searchRef}
      onSubmit={handleFormSubmit}
      className={cx("header__search")}
    >
      <div className={cx("search-form")}>
        <img
          className={cx("icon-search")}
          src="../images/search.png"
          alt="header__search"
        />
        <input
          onMouseDown={handleShowSearch}
          type="text"
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          value={inputValue}
          className={cx("search-input")}
        />
        <button type="submit" className={cx("search-btn")}>
          Tìm kiếm
        </button>

        {isVisible && (
          <div className={cx("search-quick")}>
            {!inputValue && (
              <div className={cx("top-widgets")}>
                <div className={cx("promo")}>
                  <a href="/">Đồ Dùng Gia Đình</a>
                  <div className={cx("keyword")}>Đồ Dùng Gia Đình</div>
                  <picture className={cx("webpimg-container")}>
                    <img
                      className={cx("banner")}
                      src="https://salt.tikicdn.com/cache/140x28/ts/tikimsp/3f/09/c1/4d05c720738c1af6e234c4bd6d40c260.jpg.webp"
                    ></img>
                  </picture>
                </div>
              </div>
            )}

            <div className={cx("suggestion")}>
              {suggestions.map((suggestion, index) =>
                index < 3 || showSuggestions || inputValue ? (
                  <a key={index} className={cx("suggestion-item")}>
                    <img
                      className={cx("item-icon")}
                      src="../images/suggestion.png"
                      alt="Search"
                    />
                    <div className={cx("keyword")}>{suggestion}</div>
                  </a>
                ) : null
              )}
              <div onClick={handleShowSuggestions} className={cx("show-more")}>
                <div>
                  {!inputValue && (
                    <>
                      {showSuggestions ? "Thu gọn" : "Xem thêm"}
                      <svg
                        width="6"
                        height="11"
                        viewBox="0 0 6 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={
                          showSuggestions
                            ? cx("show-more__icon-top", "right-icon")
                            : cx("show-more__icon-bottom", "right-icon")
                        }
                      >
                        <path
                          fill="rgb(13,92,182)"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L6.35355 5.64645C6.54882 5.84171 6.54882 6.15829 6.35355 6.35355L1.35355 11.3536C1.15829 11.5488 0.841709 11.5488 0.646447 11.3536C0.451184 11.1583 0.451184 10.8417 0.646447 10.6464L5.29289 6L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z"
                        ></path>
                      </svg>
                    </>
                  )}
                </div>
              </div>
            </div>

            {!inputValue && (
              <div className={cx("bottom-widgets")}>
                <div className={cx("hot-keyword")}>
                  <div className={cx("wrap-heading")}>
                    <img
                      className={cx("trending")}
                      src="https://salt.tikicdn.com/ts/upload/4f/03/a0/2455cd7c0f3aef0c4fd58aa7ff93545a.png"
                      alt="Hot Keyword"
                    />
                    <div>Tìm Kiếm Phổ Biến</div>
                  </div>
                  <div className={cx("inner")}>
                    {popularSearches.map((search, index) => (
                      <a className={cx("item")} key={index}>
                        <img className={cx("thumb")} src={search.image} />
                        <span className={cx("title")}>{search.title}</span>
                      </a>
                    ))}
                  </div>
                </div>
                <div className={cx("hot-categories")}>
                  <div className={cx("wrap-heading")}>
                    <div>Danh Mục Nổi Bật</div>
                  </div>
                  <div className={cx("inner")}>
                    {featuredCategories.map((category, index) => (
                      <a key={index} className={cx("item-categories")} href="/">
                        <div className={cx("thumb-wrap")}>
                          <div className={cx("thumb")}>
                            <img src={category.image} alt="Categories" />
                          </div>
                        </div>
                        <span className={cx("title")}>{category.title}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </form>
  );
};

export default Search;
