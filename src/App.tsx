import { lazy, Suspense, useState, useEffect } from 'react';
import { Parallax } from 'react-parallax';
import shopItems from './data/shopItems';
import bgImage from './img/red-purple.webp';
import Menu from './components/Menu';
import Hero from './components/Hero';
import Footer from './components/Footer';
import CheckoutModal from './components/CheckoutModal';
import Cookies from './components/Cookies';
import './App.css';

const About = lazy(() => import('./components/About'));
const Shop = lazy(() => import('./components/Shop'));
const Form = lazy(() => import('./components/ContactForm'));

const App = () => {
  // Modal opening
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shoppingCart, setShoppingCart] = useState<{product: typeof shopItems[0], quantity: number}[]>([]);
  const [searchProduct, setSearchProduct] = useState('');

  // PRODUCT SEARCH
  const handleProductSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchProduct(event.target.value);
  };

  const filterProductFunction = shopItems.filter((product) =>
    product.name.toLowerCase().includes(searchProduct.toLowerCase())
  );

  // ADD TO CART
  const handleCart = (product: typeof shopItems[0]) => {
    const existingItem = shoppingCart
      .find(item => item.product.id === product.id);
    if (existingItem) {
      const updatedCart = shoppingCart.map(item =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setShoppingCart(updatedCart);
    } else {
      setShoppingCart([...shoppingCart, {product: product, quantity: 1}]);
    }
  };

  // REMOVE ITEM FROM CART
  const removeItem = (product: typeof shopItems[0]) => {
    const filteredCart = shoppingCart
      .filter(item => item.product.id !== product.id);
    setShoppingCart(filteredCart);
  };

  // CALCULATE THE TOTAL PRICE
  const totalAmountCalculationFunction = () => {
    return shoppingCart
      .reduce((total, item) =>
        total + item.product.price * item.quantity, 0);
  };

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isModalOpen]);

  // Page scrolling
  const scrollTo = (id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      const menuHeight = (document.querySelector('header')?.offsetHeight ?? 0) + 85;
      const top = (element?.getBoundingClientRect().top ?? 0) + window.scrollY - menuHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className='content'>
      {isModalOpen && (
        <CheckoutModal
          onClose={() => setIsModalOpen(false)}
          shoppingCart={shoppingCart}
          totalAmountCalculationFunction={totalAmountCalculationFunction}
        />
      )}
      <header>
        <Menu scrollTo={scrollTo} />
      </header>
      <Parallax
        bgImage={bgImage}
        strength={900}
        className='parallax-layer'
      >
        <main>
          <Hero scrollTo={scrollTo} />
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
          <Suspense fallback={<div className='shop-fallback'>Loading...</div>}>
            <Shop
              setIsModalOpen={setIsModalOpen}
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
              filterProductFunction={filterProductFunction}
              handleProductSearch={handleProductSearch}
              searchProduct={searchProduct}
              handleCart={handleCart}
              removeItem={removeItem}
              totalAmountCalculationFunction={totalAmountCalculationFunction}
            />
          </Suspense>
          <section id='contacts'>
            <h2 id='contact-heading'>Contact us</h2>
            <Suspense fallback={<div>Loading...</div>}>
              <Form />
            </Suspense>
          </section>
        </main>
      </Parallax>
      <Footer />
      <Cookies />
    </div>
  );
};

export default App;