import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/NavBar/Navbar";
import Projects from "../components/RecentProjects/Projects";
import SocialIcons from "../components/SocialIcons/SocialIcons";
import Resume from "../components/TextContainer/Resume";
import "./HomeStyle.css"
import { BrowserRouter as Router } from 'react-router-dom';



function Home() {
    return (
        <div className="HomeScreen">
            <Router>
            <Navbar></Navbar>
            <Hero></Hero>
            <Resume></Resume>
            <Projects></Projects>
            <SocialIcons></SocialIcons>
            <Footer></Footer>
            </Router>
        </div>
    );
}

export default Home;