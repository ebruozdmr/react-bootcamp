import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  /* "StrictMode" çoklu api isteklerinde problem oluşturabilir. */
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
