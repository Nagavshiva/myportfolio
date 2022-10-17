import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialLinks from "./components/SocialLinks";
import Project from "./components/Project";
import  Skills  from "./components/Skills";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
<Navbar/>
<Hero/>
<About/>
< Skills />
<Project/>
<SocialLinks/>
<Contact/>
<Footer/>
    </div>
  )
}
