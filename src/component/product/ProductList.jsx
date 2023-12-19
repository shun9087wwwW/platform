import React, { memo, useEffect, useState } from "react";
import Product from "./Product";
import { db, firestorage } from "../../firebase";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  limit,
} from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

const ProductList = memo(() => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productData = collection(db, "products");
    const q = query(productData, orderBy("createdAt", "desc"));

    // リアルタイム取得
    onSnapshot(q, (querySnapshot) => {
      setProducts(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  // url取得
  // useEffect(() => {
  //   getDownloadURL(
  //     ref(firestorage, "gs://portfolio-3c53a.appspot.com/poke.png")
  //   )
  //     .then((url) => console.log(url))
  //     .catch((err) => console.log(err));
  // }, [products]);

  return (
    <div id="product" className="productList container-fluid pt-4 pb-5">
      <div className="productTitleBox my-5">
        <h3 className="productTitle m-0">Product</h3>
      </div>
      <div className="product row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => (
          <Product
            key={uuidv4()}
            title={product.title}
            text={product.text}
            path={product.path}
            image={product.image}
            createdAt={product.createdAt}
          />
        ))}
      </div>
    </div>
  );
});

export default ProductList;
