import Hero from "../components/hero/Hero";
import About from "../features/about/About";
import Project from "../features/projects/Projects";
import Footer from "../components/footer/Footer";
import MainLayout from "../layouts/MainLayout";
import Contact from "../features/contact/Contact";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </MainLayout>
  );
};

export default Home;
