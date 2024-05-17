import React from 'react'
import Button from '../buttons/Button'

const DashCard = ({item,sil}) => {
  return (
    <div style={{display:'flex', width:'80%',height:60, justifyContent:'space-between'}}>
        <img src={item.thumbnail} style={{width:'100px'}} alt="" />
        <div>
            <span>{item.title}</span>
            <span>{item.price}</span>
        </div>
        <Button text='sil' onclick={sil}/>
    </div>
  )
}

export default DashCard