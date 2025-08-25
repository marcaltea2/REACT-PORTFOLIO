import Hero from "../components/hero/Hero";
import About from "../features/about/About";
import Project from "../features/projects/Projects";
import Footer from "../components/footer/Footer";
import MainLayout from "../layouts/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Project />
      <Footer />
    </MainLayout>
  );
};

export default Home;
