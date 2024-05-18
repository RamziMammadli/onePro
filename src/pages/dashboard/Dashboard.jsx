import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import DashCard from "../../components/cards/DashCard";
import axios from "axios";
import { useFormik } from "formik";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState(null); // null: sıralama yok, 'asc': A-Z, 'desc': Z-A
  const [searchTerm, setSearchTerm] = useState("");

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

  useEffect(() => {
    if (sortType) {
      setData((prevData) => [...prevData].sort((a, b) => {
        if (sortType === 'asc') {
          return a.title.localeCompare(b.title);
        } else {
          return b.title.localeCompare(a.title);
        }
      }));
    }
  }, [sortType]);

  const deleteItem = (id) => {
    axios.delete(`https://6646eb6651e227f23ab04479.mockapi.io/basket/${id}`);
    setTimeout(() => {
      getData();
    }, 1000);
  };

  const formik = useFormik({
    initialValues: {
      thumbnail: "",
      title: "",
      description: "",
      price: "",
    },
    onSubmit: (values) => {
      axios.post(`https://6646eb6651e227f23ab04479.mockapi.io/basket/`, values);
      setTimeout(() => {
        getData();
      }, 3000);
    },
  });

  const handleSort = (type) => {
    setSortType(type);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <div>
        <button onClick={() => handleSort("asc")}>A-Z</button>
        <button onClick={() => handleSort("desc")}>Z-A</button>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <input
            name="thumbnail"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.thumbnail}
          />
          <input
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          <input
            name="description"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          <input
            name="price"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {filteredData.map((item) => (
          <DashCard key={item.id} item={item} sil={() => deleteItem(item.id)} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
