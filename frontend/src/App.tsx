import { Layout } from "antd";
import CustomHeader from "./components/Layout/Header";
import Commit from "./components/Layout/Commit";
import CustomContent from "./components/Layout/Content";
import CustomFooter from "./components/Layout/Footer";
import WidgetChat from "./components/Layout/WidgetChat";
import { ModalLogin } from "./components/Modal";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchBanners } from "./redux/features/banners.service";

function App() {
  const location = useLocation();
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(fetchBanners());
  }, [dispatch]);

  return (
    <Layout>
      <CustomHeader />
      <Commit />
      <CustomContent />
      {location.pathname !== "/" && location.pathname !== "/search" && (
        <CustomFooter />
      )}
      <WidgetChat />
      <ModalLogin />
    </Layout>
  );
}

export default App;
