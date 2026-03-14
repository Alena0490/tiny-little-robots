// import { useState } from "react"
import ShoppingCart from "./ShoppingCart"
import ShopItem from "./ShopItem"
import "./Shop.css"

const Shop = () => {
  return (
    <section id="shop">
        <h2>Buy a Robot</h2>
        <article className="shop">
            <ShopItem/>
            <ShoppingCart/>
        </article>
    </section>
  )
}

export default Shop
