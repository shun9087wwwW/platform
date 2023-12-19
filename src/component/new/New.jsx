import {
  collection,
  onSnapshot,
  orderBy,
  query,
  limit,
} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { db } from "../../firebase";
import { v4 as uuidv4 } from "uuid";

export default function New() {
  const [index, setIndex] = useState(0);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productData = collection(db, "products");
    const q = query(productData, orderBy("createdAt", "desc"), limit(3));

    // リアルタイム取得
    onSnapshot(q, (querySnapshot) => {
      setProducts(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div id="new" className="right container-fluid p-4 mt-5">
      <h3 className="pt-5 mb-2">A New Arrival</h3>
      <p className="fs-5 mb-1">
        <small>Explore my applications.</small>
      </p>

      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="p-2 m-4 mx-auto"
        style={{
          maxHeight: "500px",
          maxWidth: "500px",
          minHeight: "300px",
          minWidth: "300px",
        }}
      >
        {products.map((product) => (
          <Carousel.Item
            key={uuidv4()}
            className="bg-dark"
            style={{
              maxHeight: "500px",
              maxWidth: "500px",
              minHeight: "300px",
              minWidth: "300px",
            }}
          >
            <img
              className="d-block opacity-50 w-100"
              src={product.image}
              alt="First slide"
              style={{
                maxHeight: "500px",
                maxWidth: "500px",
                minHeight: "300px",
                minWidth: "300px",
              }}
            />
            <Carousel.Caption>
              <h3>{product.title}</h3>
              {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
