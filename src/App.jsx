import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import UseMemoUsage from "./pages/useMemoUsage";

/*App bileşeninde herhangi bir management işlemi yapılması uygun değildir,
  App bileşeni kapsayıcı bileşendir ve router'ları barındırmalıdır.*/
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/details/:id" element={<Details></Details>}></Route>
      <Route
        path="/useMemoUsage"
        element={<UseMemoUsage></UseMemoUsage>}
      ></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
  );
}

export default App;
