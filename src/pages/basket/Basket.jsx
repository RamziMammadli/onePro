import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import ProductCard from "../../components/cards/ProductCard";
import axios from "axios";
import ProductCardBasket from "../../components/cards/ProductCardBasket";

const Basket = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("https://6646eb6651e227f23ab04479.mockapi.io/basket")
      .then((res) => {
        setData(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const removeItem = (id) => {
    axios.delete(`https://6646eb6651e227f23ab04479.mockapi.io/basket/${id}`);
    setTimeout(() => {
      getData();
    }, 500);
  };

  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
        }}
      >
        <h1>Basket məhsullar</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "center",
          }}
        >
          {data &&
            data.map((item) => (
              <ProductCardBasket item={item} sil={() => removeItem(item.id)} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Basket;
