// Dependencies
import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

// Assets
import "@styles/global.scss";

// Import store
import store from "@redux/index";

// Components
import AppRoutes from "./router/";

render(
  <Provider store={store}>
    <Router>
      <AppRoutes />
    </Router>
  </Provider>,
  document.getElementById("root")
);
