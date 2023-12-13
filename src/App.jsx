import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Page404 from "./pages/Page404";
import About from "./pages/About";
import FormCreateProduct from "./pages/FormCreateProduct";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/products/:idProduct" element={<ProductDetail />} />
          <Route path="/products/create" element={<FormCreateProduct />} />
          <Route path="/AboutUs" element={<About />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
