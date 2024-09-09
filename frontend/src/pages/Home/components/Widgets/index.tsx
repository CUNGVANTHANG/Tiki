import classNames from "classnames/bind";
import styles from "./Widgets.module.scss";
import Banner from "./components/Banner";
import Quicklink from "./components/Quicklink";
import Topdeal from "./components/Topdeal";
import Flashsale from "./components/Flashsale";
import { useEffect, useState } from "react";
import CustomFooter from "~/components/Layout/Footer";
import Brand from "./components/Brand";
import Hotprice from "./components/Hotprice";
import Suggest from "./components/Suggest";
import Maylike from "./components/Maylike";
import { getAllProducts } from "~/services/products";
import { getAllBrands } from "~/services/brands";
import GridBanner from "./components/GridBanner";
import { RootState } from "~/redux/store";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);

const Widgets = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [brands, setBrands] = useState<any[]>([]);
  const banners = useSelector((state: RootState) => state.banners.items);
  const [isFlashsaleVisible, setIsFlashsaleVisible] = useState(true);
  const startTime = new Date("2024-09-09T14:17:00");
  const endTime = new Date("2024-09-09T18:00:00");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getAllProducts();
        setProducts(products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const brands = await getAllBrands();
        setBrands(brands);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchBrands();
  }, []);

  useEffect(() => {
    const checkVisibility = () => {
      const now = new Date();
      if (now >= endTime) {
        setIsFlashsaleVisible(false);
      }
    };

    const intervalId = setInterval(checkVisibility, 1000);

    checkVisibility();
    return () => clearInterval(intervalId);
  }, [endTime]);

  const flashsale = products.filter((product) => product.flashSale == 1);
  const topdeal = products.filter(
    (product) => product.discount >= 10 && product.flashSale != 1
  );
  const hotprice = products.filter(
    (product) => product.origin && product.flashSale != 1
  );
  const maylike = products.filter(
    (product) => product.price < 1000000 && product.flashSale != 1
  );
  const suggest = products.filter((product) => product.flashSale != 1);

  return (
    <div className={cx("widgets")}>
      <Banner
        banners={banners.filter(
          (banner, index) => index < 6 && banner.type == "slider"
        )}
      />
      <Quicklink />
      <Topdeal products={topdeal} />
      {isFlashsaleVisible && (
        <Flashsale
          products={flashsale}
          startTime={startTime}
          endTime={endTime}
        />
      )}
      <Brand brands={brands} />
      <Hotprice products={hotprice} />
      <GridBanner />
      <Maylike products={maylike} />
      <Suggest products={suggest} />
      <CustomFooter />
    </div>
  );
};

export default Widgets;
