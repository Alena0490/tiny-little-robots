import { useState } from "react"
import "./Menu.css"

interface ScrollProps {
    scrollTo: (id: string) => void
}

 const Menu = ({ scrollTo }: ScrollProps) => {
    // Open burger menu
    const [isOpen, setIsOpen] = useState(false);


    return (
        <nav className="navigation" tabIndex={0} onBlur={() => setIsOpen(false)}>
            <button
                className={`burger ${isOpen ? "burger--open" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                {isOpen ? (
                    <svg className="menu-img" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"/>
                    </svg>
                ) : (
                    <svg className="menu-img" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M5 7H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                )}
            </button>
        
            <ul className={`nav-menu ${isOpen ? "nav-menu--open" : ""}`}>
                <li className="nav-link">
                    <a href="/" className="squircle-xl" onClick={() => scrollTo('home')}>Home</a>
                </li>
                <li className="nav-link">
                    <a href="#about" className="squircle-xl" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); scrollTo('about') }}>About</a>
                </li>
                <li className="nav-link">
                    <a href="#shop" className="squircle-xl" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); scrollTo('shop') }}>Shop</a>
                </li>
                <li className="nav-link">
                    <a href="#contacts" className="squircle-xl" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); scrollTo('contacts') }}>Contacts</a>
                </li>
            </ul>
        </nav>
    )
}

export default Menu