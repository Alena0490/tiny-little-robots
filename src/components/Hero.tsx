import Model from "./Model"
import "./Hero.css"
import { LuChevronsDown } from "react-icons/lu";

interface ScrollProps {
    scrollTo: (id: string) => void
}

const Hero = ({ scrollTo }: ScrollProps) => {

  return (
    <section id="home" className="hero">
        <div className="hearo-headings">
            <h1>Tiny Little Robots</h1>
            <p className="hero-text">Get your own Robot Friend. Original Robots for everyone.</p>
            <p className="secondary">Click to the Robot for zooming.</p>
        </div>
        <Model/>
        <div className="cta">
            <button>Book</button>
            <button onClick={() => scrollTo('portfolio')}>Products</button>
        </div>
        <a onClick={() => scrollTo('about')}>        
            <LuChevronsDown className="arrow" />
        </a>
    </section>
  )
}

export default Hero
