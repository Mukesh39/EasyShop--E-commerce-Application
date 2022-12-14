import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {Provider} from "react-redux";
import store from "./redux/store";


// Redux
//import { Provider } from "react-redux";
//Providing store and Used by all the Componenst

ReactDOM.render(
  <Provider store = {store }>
    <App />
    </Provider>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below.
// Note this comes with some pitfalls.
// I Have Found Some More exaplained things in this Links  https://bit.ly/CRA-PWA
serviceWorker.unregister();



