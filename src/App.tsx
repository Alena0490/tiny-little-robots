import { Parallax } from "react-parallax";
import bgImage from "./img/red-purple.webp";
import Menu from "./components/Menu"
import Hero from "./components/Hero"
import Shop from "./components/Shop";
import Form from "./components/ContactForm"
import Footer from "./components/Footer";
import "./App.css"

const App = () => {
  // Page scrolling
  const scrollTo = (id: string) => {
    if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
        const element = document.getElementById(id)
        const menuHeight = (document.querySelector('header')?.offsetHeight ?? 0) + 85
        const top = (element?.getBoundingClientRect().top ?? 0) + window.scrollY - menuHeight
        window.scrollTo({ top, behavior: 'smooth' })
    }
}

  return (
    <div className="content">
      <header>
        <Menu
        scrollTo={scrollTo}/>
      </header>
        <Parallax  bgImage={bgImage}  strength={900} className="parallax-layer">
          <main>
            <Hero
              scrollTo={scrollTo}
            />
            <section id="about" className="squircle-xl">
              <h2>About us</h2>
                <p>Bear claw biscuit oat cake cookie candy canes cheesecake halvah jelly oat cake. Lollipop shortbread dessert chocolate cake caramels soufflé chupa chups chupa chups danish. Sweet jelly beans shortbread muffin bonbon jelly beans topping. Cake sesame snaps jujubes liquorice brownie. Pie halvah oat cake gummi bears jelly croissant donut. Wafer brownie dessert marshmallow gummi bears. Marzipan cotton candy sweet roll tart pie brownie fruitcake fruitcake candy canes.</p>

                <p>Tiramisu candy cake icing muffin. Sweet chocolate bar toffee jelly chupa chups. Tart halvah sesame snaps gummi bears dragée sugar plum wafer dessert gingerbread. Candy jelly ice cream lemon drops sesame snaps sugar plum chupa chups danish marzipan. Oat cake liquorice candy canes cookie cotton candy. Pastry icing candy canes chocolate chocolate cake chocolate cake. Gummies pudding chocolate bar donut tootsie roll halvah. Jelly biscuit biscuit cotton candy donut jelly beans jujubes donut marzipan. Pudding dragée liquorice shortbread croissant jujubes liquorice gummi bears. Tiramisu oat cake gingerbread cupcake pudding pie croissant cheesecake.</p>
            </section>
            <Shop/>
            <section id="contacts">
              <h2 id="contact-heading">Contact us</h2>
              <Form/>
            </section>
          </main>
        </Parallax>
      <Footer/>
    </div>
  )
}

export default App
