import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { productsSliceActions } from "../../redux/products";
import "./Home.scss";
// import PostListWrapper from "./Components/PostListWrapper";
// import ProductListWrapper from "../../Components/ProductListWrapper/ProductListWrapper";
const Home = () => {
  //   axios.get("https://dummyjson.com/products").then(function (response) {
  //     console.log(response);

  //   });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsSliceActions.getProducts);
  }, [dispatch, productsSliceActions]);
  const products = useSelector((state: any) => state.products.products);
  console.log(products);

  return (
    <React.Fragment>
      <div className="imgBackgroundHome">
        <p> Tu będzie zdjęcie</p>
      </div>
      {/* <PostListWrapper /> */}
      <div>{/* <ProductListWrapper /> */}</div>
    </React.Fragment>
  );
};

export default Home;
