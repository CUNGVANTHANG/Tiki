import classNames from "classnames/bind";
import styles from "./Ads.module.scss";

const cx = classNames.bind(styles);

const AdsType_1 = (props: any) => {
  return (
    <div>
      <a>
        <picture>
          <img className={cx("ads-image")} src={props.image} />
        </picture>
      </a>
    </div>
  );
};

const AdsType_2 = (props: any) => {
  const numberStar: number = 5;
  const price = Number(props.price);
  const dicount = Number(props.discount ? props.discount : 0) / 100;
  let decreasedPrice = price * (1 - dicount);
  decreasedPrice = Math.round(decreasedPrice / 1000) * 1000;

  return (
    <div style={{ backgroundColor: "rgb(245, 245, 250)" }}>
      <a className={cx("ads-wrapper")}>
        <picture>
          <img className={cx("ads-image-version2")} src={props.image} />
        </picture>
        <div className={cx("info")}>
          <div className={cx("product-name")}>{props.name}</div>
          {(props.numberRating || props.sold) && (
            <div className={cx("product-rating")}>
              {props.numberRating && (
                <>
                  <p className={cx("wrap-star")}>
                    {Array.from({ length: numberStar }, (_, index) => {
                      return (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          className={cx("star-icon")}
                        >
                          <g fill="none" fill-rule="evenodd">
                            <path
                              fill="#fdd835"
                              transform="matrix(-1 0 0 1 11 1)"
                              d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"
                            ></path>
                            <path
                              fill="#fdd835"
                              transform="translate(1 1)"
                              d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"
                            ></path>
                          </g>
                        </svg>
                      );
                    })}
                  </p>
                  <div className={cx("total-rating")}>
                    ({props.numberRating})
                  </div>
                </>
              )}
              {props.numberRating && props.sold && (
                <div className={cx("separator")}></div>
              )}
              {props.sold && <div>Đã bán {props.sold}</div>}
            </div>
          )}
          <div className={cx("product-seller")}>
            <div className={cx("seller-text")}>Tài trợ bởi</div>
            <div className={cx("seller-name")}>{props.seller}</div>
          </div>
          <div className={cx("product-price")}>
            <div className={cx("price")}>
              {decreasedPrice.toLocaleString("vi-VN")} <sup>đ</sup>
            </div>
            {Number(props.discount) > 0 && (
              <div className={cx("discount")}>-{props.discount}%</div>
            )}
          </div>
          <div className={cx("view-more")}>Xem thêm</div>
        </div>
      </a>
    </div>
  );
};

const AdsType_3 = (props: any) => {
  return (
    <div className={cx("square-banner")}>
      <div>
        <a className={cx("listing-banner-ads")} target="_blank">
          <img className={cx("listing-banner-image")} src={props.image} />
        </a>
      </div>
    </div>
  );
};

const AdsType_4 = (props: any) => {
  <div className={cx("square-container")}>
    <div style={{ height: "100%" }}>
      <a className={cx("square-container-wrap")} target="_blank">
        <div className={cx("square-logo")}>
          <div className={cx("thumbnail-container")}>
            <img className={cx("thumbnail-logo")} src={props.thumbnail} />
          </div>
        </div>
        <div className={cx("square-bottom")}></div>
      </a>
    </div>
  </div>;
};

export { AdsType_1, AdsType_2, AdsType_3 };
