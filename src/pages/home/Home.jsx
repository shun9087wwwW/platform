import React, { memo } from "react";
import Header from "./../../component/header/Header";
import Title from "./../../component/title/Title";
import New from "../../component/new/New";
import Sns from "../../component/sns/Sns";
import Footer from "./../../component/footer/Footer";

import ProductList from "./../../component/product/ProductList";

const Home = memo(() => {
  return (
    <div className="home container-fluid p-0">
      <Header />
      <Title />
      <New />
      <ProductList />
      <Sns />
      <Footer />
    </div>
  );
});

export default Home;
