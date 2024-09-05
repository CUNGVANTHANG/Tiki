import classNames from "classnames/bind";
import styles from "./Hotprice.module.scss";
import Sliders from "../Slider";
import { ProductOther } from "~/components/Product";

const cx = classNames.bind(styles);

const dataFake = (
  <>
    <ProductOther
      thumbnail="	https://salt.tikicdn.com/cache/280x280/ts/product/2d/8e/89/79c945760f32dd10947a13aecb7c4cba.png.webp"
      altThumbnail="Ga Giường Cotton Satin 1m8 x 2m Nhiều Màu bo chun Cao Cấp À Ơi Concept không xù lông trơn mượt thoáng mát Home Bedding"
      framebadge="https://salt.tikicdn.com/ts/upload/f7/9e/83/ab28365ea395893fe5abac88b5103444.png"
      altFramebadge="product_image_badge"
      name="Ga Giường Cotton Satin 1m8 x 2m Nhiều Màu bo chun Cao Cấp À Ơi Concept không xù lông trơn mượt thoáng mát Home Bedding"
      price="662000"
      stars="5"
      discount="26"
      delivery="Giao thứ 3, 03/09"
      location="Made in Korea"
    />
    <ProductOther
      thumbnail="	https://salt.tikicdn.com/cache/280x280/ts/product/2d/8e/89/79c945760f32dd10947a13aecb7c4cba.png.webp"
      altThumbnail="Ga Giường Cotton Satin 1m8 x 2m Nhiều Màu bo chun Cao Cấp À Ơi Concept không xù lông trơn mượt thoáng mát Home Bedding"
      framebadge="https://salt.tikicdn.com/ts/upload/f7/9e/83/ab28365ea395893fe5abac88b5103444.png"
      altFramebadge="product_image_badge"
      name="Ga Giường Cotton Satin 1m8 x 2m Nhiều Màu bo chun Cao Cấp À Ơi Concept không xù lông trơn mượt thoáng mát Home Bedding"
      price="662000"
      stars="5"
      discount="26"
      delivery="Giao thứ 3, 03/09"
      location="Made in Korea"
    />
    <ProductOther
      thumbnail="	https://salt.tikicdn.com/cache/280x280/ts/product/2d/8e/89/79c945760f32dd10947a13aecb7c4cba.png.webp"
      altThumbnail="Ga Giường Cotton Satin 1m8 x 2m Nhiều Màu bo chun Cao Cấp À Ơi Concept không xù lông trơn mượt thoáng mát Home Bedding"
      framebadge="https://salt.tikicdn.com/ts/upload/f7/9e/83/ab28365ea395893fe5abac88b5103444.png"
      altFramebadge="product_image_badge"
      name="Ga Giường Cotton Satin 1m8 x 2m Nhiều Màu bo chun Cao Cấp À Ơi Concept không xù lông trơn mượt thoáng mát Home Bedding"
      price="662000"
      stars="5"
      discount="26"
      delivery="Giao thứ 3, 03/09"
      location="Made in Korea"
    />
    <ProductOther
      thumbnail="	https://salt.tikicdn.com/cache/280x280/ts/product/2d/8e/89/79c945760f32dd10947a13aecb7c4cba.png.webp"
      altThumbnail="Ga Giường Cotton Satin 1m8 x 2m Nhiều Màu bo chun Cao Cấp À Ơi Concept không xù lông trơn mượt thoáng mát Home Bedding"
      framebadge="https://salt.tikicdn.com/ts/upload/f7/9e/83/ab28365ea395893fe5abac88b5103444.png"
      altFramebadge="product_image_badge"
      name="Ga Giường Cotton Satin 1m8 x 2m Nhiều Màu bo chun Cao Cấp À Ơi Concept không xù lông trơn mượt thoáng mát Home Bedding"
      price="662000"
      stars="5"
      discount="26"
      delivery="Giao thứ 3, 03/09"
      location="Made in Korea"
    />
    <ProductOther
      thumbnail="	https://salt.tikicdn.com/cache/280x280/ts/product/2d/8e/89/79c945760f32dd10947a13aecb7c4cba.png.webp"
      altThumbnail="Ga Giường Cotton Satin 1m8 x 2m Nhiều Màu bo chun Cao Cấp À Ơi Concept không xù lông trơn mượt thoáng mát Home Bedding"
      framebadge="https://salt.tikicdn.com/ts/upload/f7/9e/83/ab28365ea395893fe5abac88b5103444.png"
      altFramebadge="product_image_badge"
      name="Ga Giường Cotton Satin 1m8 x 2m Nhiều Màu bo chun Cao Cấp À Ơi Concept không xù lông trơn mượt thoáng mát Home Bedding"
      price="662000"
      stars="5"
      discount="26"
      delivery="Giao thứ 3, 03/09"
      location="Made in Korea"
    />
    <ProductOther
      thumbnail="	https://salt.tikicdn.com/cache/280x280/ts/product/2d/8e/89/79c945760f32dd10947a13aecb7c4cba.png.webp"
      altThumbnail="Ga Giường Cotton Satin 1m8 x 2m Nhiều Màu bo chun Cao Cấp À Ơi Concept không xù lông trơn mượt thoáng mát Home Bedding"
      framebadge="https://salt.tikicdn.com/ts/upload/f7/9e/83/ab28365ea395893fe5abac88b5103444.png"
      altFramebadge="product_image_badge"
      name="Ga Giường Cotton Satin 1m8 x 2m Nhiều Màu bo chun Cao Cấp À Ơi Concept không xù lông trơn mượt thoáng mát Home Bedding"
      price="662000"
      discount="0"
      stars="4.5"
      delivery="Giao thứ 3, 03/09"
      location="Made in Korea"
    />
  </>
);

interface HotpriceProps {
  products: any[];
}

const Hotprice = ({ products }: HotpriceProps) => {
  return (
    <div className={cx("hotprice")}>
      <div className={cx("header")}>
        <div className={cx("header-title")}>
          <div className={cx("header-wrap")}>
            <div className={cx("title")}>Hàng ngoại giá hot</div>
          </div>
          <a className={cx("view")} href="/">
            Xem tất cả
          </a>
        </div>
      </div>

      <Sliders>
        {products.length > 0
          ? products.map((product) => (
              <ProductOther
                key={product.id}
                thumbnail={product.thumbnail}
                altThumbnail={product.name}
                textbadge={product.textBadge}
                framebadge={product.frameBadge}
                name={product.name}
                stars={product.rating}
                price={product.price}
                discount={product.discount}
                delivery={product.deliveryInfo}
                carrier={product.carrier}
                location={product.origin}
              />
            ))
          : dataFake}
      </Sliders>
    </div>
  );
};

export default Hotprice;
