import classNames from "classnames/bind";
import styles from "./Flashsale.module.scss";
import { useEffect, useState } from "react";
import { ProductFlashSale } from "~/components/Product";
import Sliders from "../Slider";

const cx = classNames.bind(styles);

interface FlashsaleProps {
  products: any[];
  startTime: Date;
  endTime: Date;
}

const dataFake = (
  <>
    <ProductFlashSale
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/4f/90/b9/57e1f7ac85daa186ca745eb3597c7daf.jpg.webp"
      altThumbnail="Áo thun nam cổ tròn"
      discount={21}
      price={112000}
      progress={25}
    />
    <ProductFlashSale
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/4f/90/b9/57e1f7ac85daa186ca745eb3597c7daf.jpg.webp"
      altThumbnail="Áo thun nam cổ tròn"
      discount={21}
      price={112000}
      progress={25}
    />
    <ProductFlashSale
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/4f/90/b9/57e1f7ac85daa186ca745eb3597c7daf.jpg.webp"
      altThumbnail="Áo thun nam cổ tròn"
      discount={21}
      price={112000}
      progress={25}
    />
    <ProductFlashSale
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/4f/90/b9/57e1f7ac85daa186ca745eb3597c7daf.jpg.webp"
      altThumbnail="Áo thun nam cổ tròn"
      discount={21}
      price={112000}
      progress={25}
    />
    <ProductFlashSale
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/4f/90/b9/57e1f7ac85daa186ca745eb3597c7daf.jpg.webp"
      altThumbnail="Áo thun nam cổ tròn"
      discount={21}
      price={112000}
      progress={25}
    />
    <ProductFlashSale
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/4f/90/b9/57e1f7ac85daa186ca745eb3597c7daf.jpg.webp"
      altThumbnail="Áo thun nam cổ tròn"
      discount={21}
      price={112000}
      progress={25}
    />
  </>
);

const Flashsale: React.FC<FlashsaleProps> = ({
  products,
  startTime,
  endTime,
}) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = +endTime - +now;
    let timeLeft = {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [startTime, endTime]);

  return (
    <div className={cx("flashsale")}>
      <div className={cx("header")}>
        <div className={cx("header-left")}>
          <div className={cx("title")}>Flash Sale</div>
          <div>
            <a href="/" title="Xem tất cả Deal Hot">
              <div className={cx("count-down")}>
                <span>{String(timeLeft.hours).padStart(2, "0")}</span>
                <img src="../svg/dot_divider.svg" alt="Dot Divider" />
                <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
                <img src="../svg/dot_divider.svg" alt="Dot Divider" />
                <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
              </div>
            </a>
          </div>
        </div>
        <div className={cx("navigation")}>
          <a href="/" title="Xem tất cả Deal Hot">
            Xem tất cả
          </a>
        </div>
      </div>
      <div className={cx("body")}>
        <Sliders gap="16px">
          {products.length > 0
            ? products.map((product) => (
                <ProductFlashSale
                  key={product.id}
                  thumbnail={product.thumbnail}
                  altThumbnail={product.name}
                  discount={product.discount}
                  price={product.price}
                  progress={product.sold}
                />
              ))
            : dataFake}
        </Sliders>
      </div>
    </div>
  );
};

export default Flashsale;
