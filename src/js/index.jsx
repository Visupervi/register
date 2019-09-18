import React from "react";
import ReactDOM from 'react-dom';
import App from "../components/App"
import 'antd-mobile/dist/antd-mobile.css';
import registerServiceWorker from "../service/registerServiceWorker";

ReactDOM.render(
  <App/>,
  document.getElementById("app")

);
registerServiceWorker();