import './Shop.css';
import ShopSearch from './ShopSearch';
import ShoppingCart from './ShoppingCart';
import ShopItem from './ShopItem';
import shopItems from '../data/shopItems';

type CartItem = {
    product: typeof shopItems[0];
    quantity: number;
};

interface ShopProps {
    searchProduct: string;
    handleProductSearch: React.ChangeEventHandler<HTMLInputElement>;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    filterProductFunction: typeof shopItems;
    handleCart: (product: typeof shopItems[0]) => void;
    shoppingCart: CartItem[];
    removeItem: (product: typeof shopItems[0]) => void;
    totalAmountCalculationFunction: () => number;
    setShoppingCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const Shop = ({ searchProduct, handleProductSearch, setIsModalOpen, filterProductFunction, handleCart, shoppingCart, removeItem, totalAmountCalculationFunction, setShoppingCart }: ShopProps) => {
    return (
        <section id='shop'>
            <h2>Buy a Robot</h2>

            {/* Search bar */}
            <ShopSearch
                searchProduct={searchProduct}
                handleProductSearch={handleProductSearch}
            />

            {/* Product grid and cart */}
            <article className='shop'>
                <ShopItem
                    filterProductFunction={filterProductFunction}
                    handleCart={handleCart}
                />
                <ShoppingCart
                    shoppingCart={shoppingCart}
                    removeItem={removeItem}
                    totalAmountCalculationFunction={totalAmountCalculationFunction}
                    setShoppingCart={setShoppingCart}
                    setIsModalOpen={setIsModalOpen}
                />
            </article>
        </section>
    );
};

export default Shop;