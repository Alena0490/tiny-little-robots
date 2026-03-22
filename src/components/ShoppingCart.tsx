import './ShoppingCart.css';
// import './CheckoutModal';
import shopItems from '../data/shopItems';

type CartItem = {
    product: typeof shopItems[0];
    quantity: number;
};

interface ShoppingCartProps {
    shoppingCart: CartItem[];
    removeItem: (product: typeof shopItems[0]) => void;
    totalAmountCalculationFunction: () => number;
    setShoppingCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
    className?: string;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShoppingCart = ({
    shoppingCart,
    removeItem,
    totalAmountCalculationFunction,
    setShoppingCart,
    className,
    setIsModalOpen
}: ShoppingCartProps) => {
    return (
        <div className={`cart squircle-xl ${shoppingCart.length > 0 ? 'active' : ''} ${className ?? ''}`}>
            <h3>My Cart</h3>

            {shoppingCart.length === 0 ? (
                <p className='empty-cart'>Your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {shoppingCart.map((item) => (
                            <li key={item.product.id} className='cart-item'>
                                <div>
                                    {/* Product image and name */}
                                    <div className='item-info'>
                                        <div className='item-image'>
                                            <img src={item.product.img} alt={item.product.alt} />
                                        </div>
                                        <div className='item-details'>
                                            <h3>{item.product.name}</h3>
                                            <p>Price: {item.product.price} USD</p>
                                        </div>
                                    </div>

                                    {/* Quantity controls and remove button */}
                                    <div>
                                        <div className='item-actions'>
                                            <button
                                                className='remove-button'
                                                onClick={() => removeItem(item.product)}
                                            >
                                                Remove Product
                                            </button>
                                            <div className='quantity'>
                                                <button
                                                    onClick={() => {
                                                        setShoppingCart((prev) => {
                                                            return prev.map((prevItem) =>
                                                                prevItem.product.id === item.product.id
                                                                    ? { ...prevItem, quantity: item.quantity + 1 }
                                                                    : prevItem
                                                            );
                                                        });
                                                    }}
                                                >+</button>
                                                <p className='quant'>{item.quantity}</p>
                                                <button
                                                    onClick={() => {
                                                        if (item.quantity === 1) {
                                                            removeItem(item.product);
                                                        } else {
                                                            setShoppingCart(prev => prev.map(prevItem =>
                                                                prevItem.product.id === item.product.id
                                                                    ? { ...prevItem, quantity: item.quantity - 1 }
                                                                    : prevItem
                                                            ));
                                                        }
                                                    }}
                                                >-</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* Total and checkout */}
                    <div className='checkout'>
                        <div className='checkout-total'>
                            <p className='total'>Total Amount: ${totalAmountCalculationFunction()}</p>
                        </div>
                        <button
                            className='checkout-button squircle-xl'
                            disabled={shoppingCart.length === 0 || totalAmountCalculationFunction() === 0}
                            onClick={() => setIsModalOpen(true)}
                        >
                            Proceed to Payment
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShoppingCart;