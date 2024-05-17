import React, { useEffect, useState } from "react";
import ProductCardBasket from "../../components/cards/ProductCardBasket";
import Header from "../../components/header/Header";
import axios from "axios";

const Wishlist = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("https://6646eb6651e227f23ab04479.mockapi.io/wishlist")
      .then((res) => {
        setData(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const removeItem = (id) => {
    axios.delete(`https://6646eb6651e227f23ab04479.mockapi.io/wishlist/${id}`);
    setTimeout(() => {
      getData();
    }, 1000);
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
        <h1>Wishlist məhsullar</h1>
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

export default Wishlist;
