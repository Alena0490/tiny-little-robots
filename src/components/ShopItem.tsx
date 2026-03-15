// import { property } from "three/tsl"
import "./ShopItem.css"
import shopItems from "../data/shopItems"

interface ShopItemProps {
     filterProductFunction: typeof shopItems
     handleCart: (product: typeof shopItems[0]) => void
}

const ShopItem = ({ filterProductFunction, handleCart }: ShopItemProps) => {
    return (
        <>
            <div className="product-list">
                {filterProductFunction.length === 0 ? (
                <p className="no-results">Sorry, No matching Product found.</p>
                ) : (
                filterProductFunction.map((product) => {
                    const Model = product.model
                    return (
                    <div key={product.id} className="shop-item">
                        <h3>{product.name}</h3>
                        <p className="product-description">{product.description}</p>
                        <Model className="model" />
                        <p className="price">{product.price} USD</p>
                        <button 
                            className="cart-button"
                            onClick={() => handleCart(product)}
                        >
                            Add to cart
                        </button>
                    </div>
                    )
                })
                )}
            </div>
        </>
    )
}

export default ShopItem
