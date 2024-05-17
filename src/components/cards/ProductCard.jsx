import React from 'react'
import styles from './ProductCard.module.css'
import Button from '../buttons/Button'

const ProductCard = ({item, addToBasket,addToWish,loading}) => {
  return (
    <div className={styles.container}>
        <img src={item.thumbnail} alt="" />
        <div>
            <p>{item.title}</p>
            <p style={{fontSize:'10px'}}>{item.description}</p>
            <p>{item.price}</p>
        </div>
        <Button text="Add to Cart" onclick={addToBasket} loading={loading}/>
        <Button text="Add to Wish" onclick={addToWish} loading={loading}/>
    </div>
  )
}

export default ProductCard