import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import AboutMe from "../components/MoreAboutMe/AboutMe";
import Navbar from "../components/NavBar/Navbar";
import Projects from "../components/RecentProjects/Projects";
import SkillSection from "../components/SkillSection/SkillSection";
import SocialIcons from "../components/SocialIcons/SocialIcons";


function Home() {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <AboutMe></AboutMe>
            <SkillSection></SkillSection>
            <Projects></Projects>
            <SocialIcons></SocialIcons>
            <Footer></Footer>
        </div>
    );
}

export default Home;