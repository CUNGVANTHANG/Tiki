import { Layout } from "antd";
import Home from "~/pages/Home";
import Popup from "~/components/Popup";
import NotFound from "~/pages/404";
import { Route, Routes } from "react-router-dom";
import TikiBookStore from "~/pages/Category/TikiBookStore";

const { Content } = Layout;

const CustomContent = () => {
  return (
    <Content>
      <Popup isVisible={false} />
      <div className="breakpoint">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nha-sach-tiki" element={<TikiBookStore />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Content>
  );
};

export default CustomContent;
