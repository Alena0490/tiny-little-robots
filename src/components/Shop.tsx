import { useState } from "react"
import ShopSearch from "./ShopSearch"
import ShoppingCart from "./ShoppingCart"
import ShopItem from "./ShopItem"
import shopItems from "../data/shopItems"
import "./Shop.css"

const Shop = () => {
    const [searchProduct, setSearchProduct] = useState('');
    const [shoppingCart, setShoppingCart] = useState<{product: typeof shopItems[0], quantity: number}[]>([])

    // PRODUCT SEARCH
	const handleProductSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchProduct(event.target.value);
	};

	const filterProductFunction = shopItems.filter((product) =>
		product.name.toLowerCase().includes(searchProduct.toLowerCase())
	);

    // ADD TO CART
    const handleCart = (product: typeof shopItems[0]) => {
		const alreadyCourses = shoppingCart
			.find(item => item.product.id === product.id);
		if (alreadyCourses) {
			const latestCartUpdate = shoppingCart.map(item =>
				item.product.id === product.id ? { 
				...item, quantity: item.quantity + 1 } 
				: item
			);
			setShoppingCart(latestCartUpdate);
		} else {
			setShoppingCart([...shoppingCart, {product: product, quantity: 1}]);
		}
	};

    // REMOVE ITEM FROM CART
	const removeItem = (product: typeof shopItems[0]) => {
		const updatedCart = shoppingCart
			.filter(item => item.product.id !== product.id);
		setShoppingCart(updatedCart);
	};

    // CALCULATE THE TOTAL PRICE
	const totalAmountCalculationFunction = () => {
		return shoppingCart
			.reduce((total, item) => 
				total + item.product.price * item.quantity, 0);
	};

    return (
        <section id="shop">
            <h2>Buy a Robot</h2>
            <ShopSearch 
                searchProduct={searchProduct} 
                handleProductSearch={handleProductSearch}
            />
            <article className="shop">
                <ShopItem
                    filterProductFunction={filterProductFunction}
                    handleCart={handleCart}
                />
                <ShoppingCart
                    shoppingCart={shoppingCart}
					removeItem={removeItem}
					totalAmountCalculationFunction={
						totalAmountCalculationFunction
					}
					setShoppingCart={setShoppingCart}
                />
            </article>
        </section>
    )
}

export default Shop
