import { Layout } from "antd";
import CustomHeader from "./components/Layout/Header";
import FreeShipping from "./components/Layout/FreeShipping";
import CustomContent from "./components/Layout/Content";
import CustomFooter from "./components/Layout/Footer";
import WidgetChat from "./components/Layout/WidgetChat";
import Modal from "./pages/Home/components/Modal";

function App() {
  return (
    <Layout>
      <CustomHeader />
      <FreeShipping />
      <CustomContent />
      <CustomFooter />
      <WidgetChat />
      <Modal />
    </Layout>
  );
}

export default App;
