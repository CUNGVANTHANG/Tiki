import { Layout } from "antd";
import CustomHeader from "./components/Layout/Header";
import Commit from "./components/Layout/Commit";
import CustomContent from "./components/Layout/Content";
import CustomFooter from "./components/Layout/Footer";
import WidgetChat from "./components/Layout/WidgetChat";
import { ModalLocation, ModalLogin } from "./components/Modal";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBanners } from "./redux/features/banners.service";
import { RootState } from "./redux/store";

function App() {
  const location = useLocation();
  const dispatch = useDispatch<any>();
  const isVisibleLogin = useSelector(
    (state: RootState) => state.modal.isVisibleLogin
  );
  const isVisibleLocation = useSelector(
    (state: RootState) => state.modal.isVisibleLocation
  );

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
      {isVisibleLogin && <ModalLogin />}
      {isVisibleLocation && <ModalLocation />}
    </Layout>
  );
}

export default App;
