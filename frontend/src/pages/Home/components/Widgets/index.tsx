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
import { getAllBanners } from "~/services/banners";
import GridBanner from "./components/GridBanner";

const cx = classNames.bind(styles);

const Widgets = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [brands, setBrands] = useState<any[]>([]);
  const [banners, setBanners] = useState<any[]>([]);
  const [isFlashsaleVisible, setIsFlashsaleVisible] = useState(true);
  const startTime = new Date("2024-08-30T10:56:00");
  const endTime = new Date("2024-08-30T18:00:00");

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
    const fetchBanners = async () => {
      try {
        const banners = await getAllBanners();
        setBanners(banners);
      } catch (error) {
        console.error("Failed to fetch banners:", error);
      }
    };

    fetchBanners();
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

  const flashsale = products.filter((product) => product.type === "flashsale");
  const topdeal = products.filter(
    (product) => product.type === "product" && product.discount >= 10
  );
  const hotprice = products.filter(
    (product) => product.type === "product" && product.origin
  );
  const maylike = products.filter(
    (product) => product.type === "product" && product.price < 1000000
  );
  const suggest = products.filter((product) => product.type === "product");

  return (
    <div className={cx("widgets")}>
      <Banner banners={banners} />
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
