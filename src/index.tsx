import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import router from "./_root/routers";
import store from "./store";
import "./index.scss";

const app = <Provider store={store}>{router}</Provider>;

ReactDOM.render(app, document.getElementById("root"));
