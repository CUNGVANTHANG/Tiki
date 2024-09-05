import { Layout } from "antd";
import Home from "~/pages/Home";
import { AdsPopup } from "~/components/Popup";
import NotFound from "~/pages/404";
import { Route, Routes } from "react-router-dom";
import TikiBookStore from "~/pages/Category/TikiBookStore";
import Search from "~/pages/Search";

const { Content } = Layout;

const CustomContent = () => {
  return (
    <Content>
      <AdsPopup isVisible={true} />
      <div className="breakpoint">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/nha-sach-tiki" element={<TikiBookStore />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Content>
  );
};

export default CustomContent;
