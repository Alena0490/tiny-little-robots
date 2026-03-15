import "./ShopSearch.css"

interface ShopSearchProps {
    searchProduct: string
    handleProductSearch: React.ChangeEventHandler<HTMLInputElement>
}

const ShopSearch = ({searchProduct, handleProductSearch}: ShopSearchProps) => {
  return (
    <header className="shop-header squircle-xl">
        <h3 className="shop-search-heading">Shopping Cart</h3>
        <input
                type="text"
                placeholder="Search for our Products..."
                value={searchProduct}
                onChange={handleProductSearch}
            />
    </header>
  )
}

export default ShopSearch
