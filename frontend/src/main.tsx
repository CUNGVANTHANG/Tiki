import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import GlobalStyles from "./components/GlobalStyles";
import { Provider } from "react-redux";
import store from "./redux/store/";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <GlobalStyles>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GlobalStyles>
    </Provider>
  </StrictMode>
);
