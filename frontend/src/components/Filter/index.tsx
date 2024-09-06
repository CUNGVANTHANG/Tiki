import classNames from "classnames/bind";
import styles from "./Filter.module.scss";
import React from "react";

const cx = classNames.bind(styles);

const carrier = [
  {
    carrierImage:
      "	https://salt.tikicdn.com/ts/tka/a8/31/b6/802e2c99dcce64c67aa2648edb15dd25.png",
    carrierText: "Giao siêu tốc 2H",
  },
  {
    carrierImage:
      "https://salt.tikicdn.com/ts/upload/b5/aa/48/2305c5e08e536cfb840043df12818146.png",
    carrierText: "Siêu rẻ",
  },
  {
    carrierImage:
      "https://salt.tikicdn.com/ts/upload/2f/20/77/0f96cfafdf7855d5e7fe076dd4f34ce0.png",
    carrierText: "",
  },
];

const Filter = (props: any) => {
  const numberStar = 5;
  return (
    <div className={cx("filters")}>
      <div className={cx("wrap-filter")}>
        <div className={cx("filter-top")}>
          <div className={cx("slider")}>
            <div
              style={{ transform: "translateX(0px)" }}
              className={cx("content")}
            >
              {props.filter.map((item: any, index: number) => (
                <React.Fragment key={index}>
                  <div>
                    <div className={cx("name")}>{item.name}</div>
                    <div className={cx("list")}>
                      {item.options.map((option: string, index: number) => {
                        if (index < 4) {
                          return (
                            <button
                              style={{ marginRight: index === 3 ? "0" : "" }}
                              key={index}
                              className={cx("option", "filter-child")}
                            >
                              <div className={cx("text")}>{option}</div>
                            </button>
                          );
                        }
                      })}
                      <button className={cx("view-more")}>
                        <img
                          src="https://frontend.tikicdn.com/_desktop-next/static/img/catalog/arrow.svg"
                          alt="arrow icon"
                        />
                      </button>
                    </div>
                  </div>
                  {index !== props.filter.length - 1 && (
                    <div className={cx("divider")}></div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div style={{ display: "block" }} className={cx("next")}>
              <div className={cx("icon")}>
                <img
                  style={{ transform: "rotate(-90deg)" }}
                  className={cx("image-icon")}
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/catalog/arrow.svg"
                  alt="icon"
                />
              </div>
            </div>
            <div style={{ display: "none" }} className={cx("prev")}>
              <div className={cx("icon")}>
                <img
                  style={{ transform: "rotate(90deg)" }}
                  className={cx("image-icon")}
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/catalog/arrow.svg"
                  alt="icon"
                />
              </div>
            </div>
          </div>
          <div className={cx("filter-all")}>
            <div className={cx("divider")}></div>
            <button className={cx("button-all")}>
              <img
                className={cx("filter-icon")}
                src="../images/filter.png"
                alt="filter"
              />
              <div>Tất cả</div>
            </button>
          </div>
        </div>
        <div className={cx("filter-bottom")}>
          <div className={cx("slider")}>
            <div
              style={{ transform: "translateX(0px)" }}
              className={cx("content")}
            >
              {carrier.map((item, index) => (
                <React.Fragment key={index}>
                  <div className={cx("filter-checkbox")}>
                    <div className={cx("checkbox")}>
                      <span className={cx("box")}>
                        <img
                          className={cx("check-on")}
                          src="https://salt.tikicdn.com/ts/upload/3a/f3/e4/b9e681d6b71abcc05f6c00399361bb81.png"
                          alt="check-on"
                        />
                        <img
                          className={cx("check-off")}
                          src="https://salt.tikicdn.com/ts/upload/03/a5/2f/df8fb591920f048e53c88e18c84dd7d4.png"
                          alt="check-off"
                        />
                        <img
                          className={cx("check-hover")}
                          src="https://salt.tikicdn.com/ts/upload/d2/16/38/c83c70851f66b169788bda4732b496a1.png"
                          alt="check-hover"
                        />
                      </span>
                    </div>
                    <img
                      height={index === 0 ? "17" : "16"}
                      className={cx("carrier-image")}
                      src={item.carrierImage}
                      alt="carrier"
                    />
                    <div className={cx("carrier-text")}>
                      <span>{item.carrierText}</span>
                    </div>
                  </div>
                  <div style={{ height: 24 }} className={cx("divider")}></div>
                </React.Fragment>
              ))}
              <div className={cx("filter-checkbox")}>
                <div className={cx("checkbox")}>
                  <span className={cx("box")}>
                    <img
                      className={cx("check-on")}
                      src="https://salt.tikicdn.com/ts/upload/3a/f3/e4/b9e681d6b71abcc05f6c00399361bb81.png"
                      alt="check-on"
                    />
                    <img
                      className={cx("check-off")}
                      src="https://salt.tikicdn.com/ts/upload/03/a5/2f/df8fb591920f048e53c88e18c84dd7d4.png"
                      alt="check-off"
                    />
                    <img
                      className={cx("check-hover")}
                      src="https://salt.tikicdn.com/ts/upload/d2/16/38/c83c70851f66b169788bda4732b496a1.png"
                      alt="check-hover"
                    />
                  </span>
                </div>
                <div className={cx("stars")}>
                  <div className={cx("wrap-stars")}>
                    {Array.from({ length: numberStar - 1 }, (_, index) => {
                      return (
                        <svg
                          key={index}
                          width="12"
                          height="12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            width: "12px",
                            height: "12px",
                          }}
                        >
                          <g clipPath="url(#a)">
                            <path
                              d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z"
                              fill="#FFC400"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="a">
                              <path
                                fill="#fff"
                                transform="translate(1 1.5)"
                                d="M0 0h10v10H0z"
                              ></path>
                            </clipPath>
                          </defs>
                        </svg>
                      );
                    })}
                  </div>
                  {Array.from({ length: numberStar }, (_, index) => {
                    return (
                      <svg
                        key={index}
                        width="12"
                        height="12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#a)">
                          <path
                            d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z"
                            fill="#DDDDE3"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="a">
                            <path
                              fill="#fff"
                              transform="translate(1 1.5)"
                              d="M0 0h10v10H0z"
                            ></path>
                          </clipPath>
                        </defs>
                      </svg>
                    );
                  })}
                </div>
                <div className={cx("number-star")}>
                  <span>từ 4 sao</span>
                </div>
              </div>
            </div>
            <div style={{ display: "none" }} className={cx("next")}>
              <div className={cx("icon")}>
                <img
                  style={{ transform: "rotate(-90deg)" }}
                  className={cx("image-icon")}
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/catalog/arrow.svg"
                  alt="icon"
                />
              </div>
            </div>
            <div style={{ display: "none" }} className={cx("prev")}>
              <div className={cx("icon")}>
                <img
                  style={{ transform: "rotate(90deg)" }}
                  className={cx("image-icon")}
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/catalog/arrow.svg"
                  alt="icon"
                />
              </div>
            </div>
          </div>
          <div className={cx("filter-sort")}>
            <div style={{ marginLeft: "16px" }}>
              <div className={cx("sort")}>
                <div className={cx("title")}>Sắp xếp</div>
                <div className={cx("dropdown")}>
                  <div style={{ marginRight: "8px" }}>Phổ biến</div>
                  <img
                    className={cx("arrow-icon")}
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/catalog/arrow.svg"
                    alt="arrow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
