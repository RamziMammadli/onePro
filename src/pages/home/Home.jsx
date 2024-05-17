import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import axios from "axios";
import ProductCard from "../../components/cards/ProductCard";

const Home = () => {
    const [data,setData] =useState([])
    const [searchText, setSearchText] = useState('')
    const [filteredData, setFilteredData] = useState([])

    const handleSearch = (e) => {

        setSearchText(e.target.value)
        const searchedData = data.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase()))
        setFilteredData(searchedData)
    }

    

    const getData = () => {
        axios.get('https://dummyjson.com/products')
        .then(res => {
            setData(res.data.products)
        })
    }

    
    useEffect(() => {
      getData()
    }, [])
    
    const addToBasket = (product) => {
            axios.post('https://6646eb6651e227f23ab04479.mockapi.io/basket',product)
    }

    const addToWishlist = async (product) => {
       await  axios.get('https://6646eb6651e227f23ab04479.mockapi.io/wishlist')
        .then(res => {
            console.log(res.data);
            const db = res.data
            const pro = db.find(item => item.id == product.id)
            if(pro) {
                alert('data var')
            } else(
                axios.post('https://6646eb6651e227f23ab04479.mockapi.io/wishlist',product)
            )
        })
    }

  return (
    <div>
      <Header />
      <div>
        <input type="text" name="" id="" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        <button onClick={handleSearch}>Axtar</button>
        {filteredData && filteredData.map(item => <p>{item.title}</p>)}
      </div>
      <div style={{display:'flex', flexDirection:'column', justifyContent:'center', width:'100%', alignItems:'center'}}>
        <h1>Bomba məhsullar</h1>
        <div style={{display:'flex', flexWrap:'wrap', gap:10, justifyContent:'center'}}>
            {data && data.map(item => <ProductCard item={item} addToBasket={() => addToBasket(item)} addToWish={() => addToWishlist(item)}/>)}
        </div>
      </div>
    </div>
  );
};

export default Home;
