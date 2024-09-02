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
import { fetchProducts } from "./redux/features/products.service";

function App() {
  const location = useLocation();
  const dispatch = useDispatch<any>();

  useEffect(() => {
    if (location.pathname === "/") {
      dispatch(fetchProducts());
    }
  }, [dispatch, location.pathname]);

  return (
    <Layout>
      <CustomHeader />
      <Commit />
      <CustomContent />
      {location.pathname !== "/" && <CustomFooter />}
      <WidgetChat />
      <ModalLogin />
    </Layout>
  );
}

export default App;
