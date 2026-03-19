import { useState, Suspense } from 'react'
import './ShopItem.css'
import shopItems from '../data/shopItems'

interface ShopItemProps {
     filterProductFunction: typeof shopItems
     handleCart: (product: typeof shopItems[0]) => void
}

/*** MODEL FALLBACK */
const ModelFallback = () => (
    <div className="model model-placeholder" />
)

const ShopItem = ({ filterProductFunction, handleCart }: ShopItemProps) => {
    const [visibleCount, setVisibleCount] = useState(3)
    const visibleItems = filterProductFunction.slice(0, visibleCount)

    return (
        <>
            <div className="product-list">
                {visibleItems.map((product) => {
                    const Model = product.model
                    return (
                        <div key={product.id} className="shop-item">
                            <h3>{product.name}</h3>
                            <p className="product-description">{product.description}</p>
                            <Suspense fallback={<ModelFallback />}>
                                <Model className="model" />
                            </Suspense>
                            <p className="price">{product.price} USD</p>
                            <button 
                                className='cart-button primary-button'
                                onClick={() => handleCart(product)}
                                >
                                    Add to cart
                                </button>
                        </div>
                        
                    )
                })}
            </div>
            {visibleCount < filterProductFunction.length && (
                <button 
                    onClick={() => setVisibleCount(prev => prev + 3)}
                    className='load-button secondary-button'
                >
                    Show more
                </button>
            )}
        </>
    )
}

export default ShopItem
