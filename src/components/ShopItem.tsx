// import { property } from "three/tsl"
import "./ShopItem.css"
import shopItems from "../data/shopItems"

const ShopItem = () => {
  return (
        <>
      {shopItems.map(item => {
        const Model = item.model
        return (
          <div key={item.id} className="shop-item">
            <h3>{item.name}</h3>
            <Model className="model"/>
            <p className="price">{item.price} USD</p>
          </div>
        )
      })}
    </>

  )
}

export default ShopItem
