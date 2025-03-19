import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Header/Navbar';
import Hero from './components/Header/Hero';
import About from './components/About/About';
import Background from './components/Background/Background';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Background />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
