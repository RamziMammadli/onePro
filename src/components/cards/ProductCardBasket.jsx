import React from 'react'
import styles from './ProductCard.module.css'
import Button from '../buttons/Button'

const ProductCardBasket = ({item, sil}) => {
  return (
<div className={styles.container}>
        <img src={item.thumbnail} alt="" />
        <div>
            <p>{item.title}</p>
            <p style={{fontSize:'10px'}}>{item.description}</p>
            <p>{item.price}</p>
        </div>
        <Button text="Sil" onclick={sil}/>
    </div>  )
}

export default ProductCardBasket