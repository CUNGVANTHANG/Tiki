import { Layout } from "antd";
import Home from "~/pages/Home";
import { AdsPopup } from "~/components/Popup";
import NotFound from "~/pages/404";
import { Route, Routes } from "react-router-dom";
import Category from "~/pages/Category";
import Search from "~/pages/Search";
import ProductDetails from "~/pages/ProductDetails";
import Cart from "~/pages/Cart";
import Customer from "~/pages/Customer";
import Payment from "~/pages/Payment";

const { Content } = Layout;

const CustomContent = () => {
  const shouldShowAdsPopup = () => {
    return Math.random() < 0.5;
  };
  return (
    <Content>
      <AdsPopup isVisible={shouldShowAdsPopup} />
      <div className="breakpoint">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/search" element={<Search />} />
          <Route path="/:category" element={<Category />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Content>
  );
};

export default CustomContent;
