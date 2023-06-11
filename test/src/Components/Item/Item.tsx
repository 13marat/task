import React from 'react'
import Description from './components/Description'
import Price from './components/Price'
import Image from './components/Image'
import Title from './components/Title'


const Item = ({props}: any) => {
  return (
    <div style={{display: "grid", gridTemplateColumns: "3fr 1fr 1fr"}}>
      <Title title = {props.title}/>
      <Image image = {props.image}/>
      <Price price = {props.price}/>
      {/* <Description description = {props.description}/> */}
      <hr />
    </div>
  )
}

export default Item

