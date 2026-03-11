import { Parallax } from "react-parallax";
import bgImage from "./img/pink.jpg";
import Menu from "./components/Menu"
import "./App.css"

const App = () => {
  return (
    <div>
      <header>
        <Menu/>
      </header>
      <main>
        <Parallax  bgImage={bgImage}  strength={800} className="parallax-layer">
          <section id="home" className="hero">
            <h1>My web</h1>
            <h2>Welcome</h2>
            <div className="cta">
              <button>Book</button>
              <button>Portfolio</button>
            </div>
          </section>
          <section id="about">
            <h2>Abou me</h2>
              <p>Bear claw biscuit oat cake cookie candy canes cheesecake halvah jelly oat cake. Lollipop shortbread dessert chocolate cake caramels soufflé chupa chups chupa chups danish. Sweet jelly beans shortbread muffin bonbon jelly beans topping. Cake sesame snaps jujubes liquorice brownie. Pie halvah oat cake gummi bears jelly croissant donut. Wafer brownie dessert marshmallow gummi bears. Marzipan cotton candy sweet roll tart pie brownie fruitcake fruitcake candy canes.</p>

              <p>Tiramisu candy cake icing muffin. Sweet chocolate bar toffee jelly chupa chups. Tart halvah sesame snaps gummi bears dragée sugar plum wafer dessert gingerbread. Candy jelly ice cream lemon drops sesame snaps sugar plum chupa chups danish marzipan. Oat cake liquorice candy canes cookie cotton candy. Pastry icing candy canes chocolate chocolate cake chocolate cake. Gummies pudding chocolate bar donut tootsie roll halvah. Jelly biscuit biscuit cotton candy donut jelly beans jujubes donut marzipan. Pudding dragée liquorice shortbread croissant jujubes liquorice gummi bears. Tiramisu oat cake gingerbread cupcake pudding pie croissant cheesecake.</p>
          </section>
          <section id="portfolio">
            <h2>My projects</h2>
          </section>
          <section id="contacts">
            <h2>Contact me</h2>
          </section>
        </Parallax>
      </main>
      <footer></footer>
    </div>
  )
}

export default App
