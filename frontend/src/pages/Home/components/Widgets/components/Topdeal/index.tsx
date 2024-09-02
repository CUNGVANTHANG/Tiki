import classNames from "classnames/bind";
import styles from "./Topdeal.module.scss";
import { ProductOther } from "~/components/Product";
import Sliders from "../Slider";

const cx = classNames.bind(styles);

const dataFake = (
  <>
    <ProductOther
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
    <ProductOther
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/20/8a/2f/ac19c0e7a49db2c071960a7b9d3b81b2.jpg.webp"
      altThumbnail="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      textbadge="25.08"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Loa Bluetooth JBL Flip 6 JBLFLIP6 - Hàng chính hãng"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
    />
  </>
);

interface TopdealProps {
  products: any[];
}

const Topdeal = ({ products }: TopdealProps) => {
  return (
    <div className={cx("topdeal")}>
      <div className={cx("header")}>
        <div className={cx("title")}>
          <div className={cx("content")}>
            <img
              src="https://salt.tikicdn.com/ts/upload/f8/77/0b/0923990ed377f50c3796f9e6ce0dddde.png"
              alt="badge"
            />
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
              />
            ))
          : dataFake}
      </Sliders>
    </div>
  );
};

export default Topdeal;
