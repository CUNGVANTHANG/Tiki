import classNames from "classnames/bind";
import styles from "./Maylike.module.scss";
import Sliders from "../Slider";
import { ProductOther } from "~/components/Product";

const cx = classNames.bind(styles);

const dataFake = (
  <>
    <ProductOther
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/8e/5d/2d/c2a6038dd7f55a9295164e88c152f424.jpg.webp"
      altThumbnail="Thợ Xăm Ở Auschwitz"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Thợ Xăm Ở Auschwitz"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
      carrier="https://salt.tikicdn.com/ts/tka/a8/31/b6/802e2c99dcce64c67aa2648edb15dd25.png"
    />
    <ProductOther
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/8e/5d/2d/c2a6038dd7f55a9295164e88c152f424.jpg.webp"
      altThumbnail="Thợ Xăm Ở Auschwitz"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Thợ Xăm Ở Auschwitz"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
      carrier="https://salt.tikicdn.com/ts/tka/a8/31/b6/802e2c99dcce64c67aa2648edb15dd25.png"
    />
    <ProductOther
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/8e/5d/2d/c2a6038dd7f55a9295164e88c152f424.jpg.webp"
      altThumbnail="Thợ Xăm Ở Auschwitz"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Thợ Xăm Ở Auschwitz"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
      carrier="https://salt.tikicdn.com/ts/tka/a8/31/b6/802e2c99dcce64c67aa2648edb15dd25.png"
    />
    <ProductOther
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/8e/5d/2d/c2a6038dd7f55a9295164e88c152f424.jpg.webp"
      altThumbnail="Thợ Xăm Ở Auschwitz"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Thợ Xăm Ở Auschwitz"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
      carrier="https://salt.tikicdn.com/ts/tka/a8/31/b6/802e2c99dcce64c67aa2648edb15dd25.png"
    />
    <ProductOther
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/8e/5d/2d/c2a6038dd7f55a9295164e88c152f424.jpg.webp"
      altThumbnail="Thợ Xăm Ở Auschwitz"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Thợ Xăm Ở Auschwitz"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
      carrier="https://salt.tikicdn.com/ts/tka/a8/31/b6/802e2c99dcce64c67aa2648edb15dd25.png"
    />
    <ProductOther
      thumbnail="https://salt.tikicdn.com/cache/280x280/ts/product/8e/5d/2d/c2a6038dd7f55a9295164e88c152f424.jpg.webp"
      altThumbnail="Thợ Xăm Ở Auschwitz"
      framebadge="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
      altFramebadge="product_image_badge"
      name="Thợ Xăm Ở Auschwitz"
      stars="5"
      price="2699000"
      discount="10"
      delivery="Giao thứ 7, 31/08"
      carrier="https://salt.tikicdn.com/ts/tka/a8/31/b6/802e2c99dcce64c67aa2648edb15dd25.png"
    />
  </>
);

interface MaylikeProps {
  products: any[];
}

const Maylike = ({ products }: MaylikeProps) => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <div className={cx("header-title")}>
          <div className={cx("text")}>
            <div className={cx("title")}>Bạn có thể thích</div>
          </div>
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

export default Maylike;
