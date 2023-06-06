import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
// import "./style.css";
// <Provider store={store}>
//   <PersistGate loading={null} persistor={persistor}>
//   </PersistGate>
// </Provider>,
createRoot(document.getElementById("root")).render(<App />);
