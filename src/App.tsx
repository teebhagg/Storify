import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./components/redux/store";
import { getProducts, getCategories } from "./components/redux/productReducer";
import MyAppBar from "./components/appbar";
import Footer from "./components/footer";
import HomePage from "./pages/homepage";

function App() {
  const mobileDisplay = useMediaQuery({ query: "(max-width: 600px)" });
  const tabletDisplay = useMediaQuery({ query: "(max-width: 768px)" });

  const dispatch = useAppDispatch()

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=0")
      .then((res) => res.json())
      .then(data=>{dispatch(getProducts(data.products))});

    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then(data=>{dispatch(getCategories(data))});

  }, []);

  return (
    <BrowserRouter>
      <MyAppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
