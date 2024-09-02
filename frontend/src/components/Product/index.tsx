import classNames from "classnames/bind";
import styles from "./Product.module.scss";
import { memo } from "react";

const cx = classNames.bind(styles);

const Product = (props: any) => {
  const star = (
    <svg
      width="12"
      height="12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "12px", height: "12px" }}
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

  const noStar = (
    <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
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

  const price = Number(props.price);
  const dicount = Number(props.discount) / 100;
  let decreasedPrice = price * (1 - dicount);
  decreasedPrice = Math.round(decreasedPrice / 1000) * 1000;

  return (
    <div style={{ width: props.width }} className={cx("wrapper")}>
      <div className={cx("wrap-product")}>
        <a className={cx("product-list")} href="/">
          <span className={cx("product-item")}>
            <div className={cx("product-info")}>
              <div className={cx("thumbnail")}>
                <div className={cx("wrap-image")}>
                  <picture>
                    <img
                      className={cx("image")}
                      src={props.thumbnail}
                      alt={props.altThumbnail}
                    />
                  </picture>
                </div>
              </div>
              {props.adsbadge && <p className={cx("ads-badge")}>AD</p>}
              {props.textbadge && (
                <div className={cx("textbadge")}>{props.textbadge}</div>
              )}
              <div className={cx("framebadge")}>
                <picture>
                  <img
                    className={cx("image")}
                    src={props.framebadge}
                    alt={props.altFramebadge}
                  />
                </picture>
              </div>
            </div>
            <div className={cx("wrap-text")}>
              <div className={cx("wrap-info")}>
                <div className={cx("info")}>
                  <div className={cx("name-wrapper")}>
                    <h3 className={cx("product-name")}>{props.name}</h3>
                    <div className={cx("product-rating")}>
                      {props.stars > 0 && (
                        <div className={cx("stars")}>
                          <div className={cx("wrap-stars")}>
                            {star}
                            {star}
                            {star}
                            {star}
                            {star}
                          </div>
                          {noStar}
                          {noStar}
                          {noStar}
                          {noStar}
                          {noStar}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className={cx("price-discount-wrapper")}>
                    <div className={cx("wrap-price")}>
                      {props.discount > 0 ? (
                        <div className={cx("price")}>
                          {decreasedPrice.toLocaleString("vi-VN")}
                          <sup>₫</sup>
                        </div>
                      ) : (
                        <div
                          style={{ color: "rgb(39, 39, 42)" }}
                          className={cx("price")}
                        >
                          {decreasedPrice.toLocaleString("vi-VN")}
                          <sup>₫</sup>
                        </div>
                      )}
                    </div>

                    {props.discount > 0 && (
                      <div className={cx("wrap-discount")}>
                        <div className={cx("discount")}>-{props.discount}%</div>
                        <div className={cx("original-price")}>
                          {price.toLocaleString("vi-VN")}
                          <sup>₫</sup>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className={cx("delivery-date")}>
                <div className={cx("wrap-delivery")}>
                  <div className={cx("location")}>{props.location}</div>
                  <div className={cx("delivery-info")}>
                    {props.carrier && (
                      <img
                        src={props.carrier}
                        height="16"
                        width="32"
                        alt={props.altCarrier}
                      />
                    )}
                    <span>{props.delivery}</span>
                  </div>
                </div>
              </div>
            </div>
          </span>
        </a>
      </div>
    </div>
  );
};

const FlashSale = (props: any) => {
  const price = Number(props.price);
  const dicount = Number(props.discount) / 100;
  let decreasedPrice = price * (1 - dicount);
  decreasedPrice = Math.round(decreasedPrice / 1000) * 1000;
  return (
    <div className={cx("productLine")}>
      <div className={cx("wrapLine")}>
        <a className={cx("product_items")}>
          <div className={cx("product_thumbnail")}>
            <div className={cx("thumbnail-wrapper")}>
              <picture>
                <img src={props.thumbnail} alt={props.altThumbnail} />
              </picture>
            </div>
          </div>
          <span className={cx("price-discount")}>-{props.discount}%</span>
          <div className={cx("has-discount")}>
            <span>
              {price.toLocaleString("vi-VN")}
              <sup>₫</sup>
            </span>
          </div>
          <div className={cx("sales")}>
            <div
              style={{ width: `${(props.sold * 100) / props.quantity}%` }}
              className={cx("progress")}
            ></div>
            <span>
              {props.sold > 0 ? `Đã bán được ${props.sold}` : `Vừa mở bán`}
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export const ProductFlashSale = memo(FlashSale);

export const ProductOther = memo(Product);
