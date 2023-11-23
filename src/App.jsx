import "./style/app.scss"
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import Parallax from "./components/parallax/Parallax.jsx";
import Services from "./components/services/Services.jsx";
import Cursor from "./components/cursor/Cursor.jsx";

const App = () => {
    return <div>
        <Cursor/>
        <section id="Homepage">
            <Navbar/>
            <Hero/>
        </section>
        <section id="Services">
            <Parallax type="services"/>
        </section>
        <section className="about">
            <Services/>
        </section>
        <section>Portfolio1</section>
        <section>Portfolio2</section>
        <section>Portfolio3</section>
        <section>Contact</section>
    </div>;
};

export default App;
