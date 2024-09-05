import classNames from "classnames/bind";
import styles from "./Banner.module.scss";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cx = classNames.bind(styles);

const sliders = [
  {
    href: "/",
    title: "TikiNow",
    image:
      "https://salt.tikicdn.com/cache/w750/ts/tikimsp/16/73/39/11655022811c275fcd38b8299503d9c5.png.webp",
  },
  {
    href: "/",
    title: "TikiNow",
    image:
      "https://salt.tikicdn.com/cache/w750/ts/tikimsp/fb/02/3f/d2ce94e72c862a6e32628cb40a55f343.png.webp",
  },
  {
    href: "/",
    title: "TikiNow",
    image:
      "https://salt.tikicdn.com/cache/w750/ts/tikimsp/d9/6a/3d/3ded0fa479a6ef34e5ecbf619fc1d1c1.png.webp",
  },
  {
    href: "/",
    title: "TikiNow",
    image:
      "https://salt.tikicdn.com/cache/w750/ts/tikimsp/5b/92/a2/a73084d2475812331957e75a29fb6ef0.png.webp",
  },
  {
    href: "/",
    title: "TikiNow",
    image:
      "https://salt.tikicdn.com/cache/w750/ts/tikimsp/f6/91/90/a31b6764924077a3f37cda83c29769d0.jpg.webp",
  },
  {
    href: "/",
    title: "TikiNow",
    image:
      "https://salt.tikicdn.com/cache/w750/ts/tikimsp/2b/2a/13/dcdc8e1160229bb504d7becdb34b5718.png.webp",
  },
];

interface BannerProps {
  banners: any[];
}

const Banner = ({ banners }: BannerProps) => {
  const [activeDot, setActiveDot] = useState(0);

  const totalSlides =
    (banners.length > 0 ? banners.length : sliders.length) / 2;

  let sliderRef = useRef<Slider | null>(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    afterChange: (current: number) => {
      setActiveDot(current % totalSlides);
    },
  };

  return (
    <div>
      <div className={cx("banners")}>
        <div className={cx("sliders")}>
          <span onClick={next} className={cx("icon", "icon-next")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.91107 3.41107C6.23651 3.08563 6.76414 3.08563 7.08958 3.41107L12.0896 8.41107C12.415 8.73651 12.415 9.26415 12.0896 9.58958L7.08958 14.5896C6.76414 14.915 6.23651 14.915 5.91107 14.5896C5.58563 14.2641 5.58563 13.7365 5.91107 13.4111L10.3218 9.00033L5.91107 4.58958C5.58563 4.26414 5.58563 3.73651 5.91107 3.41107Z"
                fill="#0A68FF"
              ></path>
            </svg>
          </span>
          <div className={cx("content")}>
            <div style={{ paddingBottom: "2px" }} className="slider-container">
              <Slider
                ref={(slider) => {
                  sliderRef.current = slider;
                }}
                {...settings}
              >
                {banners.length > 0
                  ? banners.map((_, index, array) => {
                      if (index % 2 === 0 && index < array.length - 1) {
                        return (
                          <React.Fragment key={index}>
                            <div className={cx("slider")}>
                              <div className={cx("product")}>
                                <div>
                                  <a className={cx("item")}>
                                    <picture>
                                      <img
                                        className={cx("item-icon")}
                                        src={array[index].thumbnail}
                                      />
                                    </picture>
                                  </a>
                                </div>
                                <div>
                                  <a className={cx("item")}>
                                    <picture>
                                      <img
                                        className={cx("item-icon")}
                                        src={array[index + 1].thumbnail}
                                      />
                                    </picture>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </React.Fragment>
                        );
                      }
                      return null;
                    })
                  : sliders
                      .map((_, index, array) => {
                        if (index % 2 === 0 && index < array.length - 1) {
                          return (
                            <React.Fragment key={index}>
                              <div className={cx("slider")}>
                                <div className={cx("product")}>
                                  <div>
                                    <a
                                      className={cx("item")}
                                      href={array[index].href}
                                    >
                                      <picture>
                                        <img
                                          className={cx("item-icon")}
                                          src={array[index].image}
                                          alt={array[index].title}
                                        />
                                      </picture>
                                    </a>
                                  </div>
                                  <div>
                                    <a
                                      className={cx("item")}
                                      href={array[index + 1].href}
                                    >
                                      <picture>
                                        <img
                                          className={cx("item-icon")}
                                          src={array[index + 1].image}
                                          alt={array[index + 1].title}
                                        />
                                      </picture>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </React.Fragment>
                          );
                        }
                        return null;
                      })
                      .filter(Boolean)}{" "}
              </Slider>
            </div>

            <div className={cx("pagination")}>
              {Array.from({ length: totalSlides }, (_, index) => (
                <div
                  key={index}
                  className={cx("line", { active: index === activeDot })}
                ></div>
              ))}
            </div>
          </div>

          <span onClick={previous} className={cx("icon", "icon-prev")}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.0899 14.5899C11.7645 14.9153 11.2368 14.9153 10.9114 14.5899L5.91139 9.58991C5.58596 9.26447 5.58596 8.73683 5.91139 8.4114L10.9114 3.41139C11.2368 3.08596 11.7645 3.08596 12.0899 3.41139C12.4153 3.73683 12.4153 4.26447 12.0899 4.58991L7.67916 9.00065L12.0899 13.4114C12.4153 13.7368 12.4153 14.2645 12.0899 14.5899Z"
                fill="#0A68FF"
              ></path>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
