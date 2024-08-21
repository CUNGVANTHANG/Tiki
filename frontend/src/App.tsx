import { Layout } from "antd";
import CustomHeader from "./components/Layout/Header";
import FreeShipping from "./components/Layout/FreeShipping";
import CustomContent from "./components/Layout/Content";
import CustomFooter from "./components/Layout/Footer";

function App() {
  return (
    <Layout>
      <CustomHeader />
      <FreeShipping />
      <CustomContent />
      <CustomFooter />
    </Layout>
  );
}

export default App;
