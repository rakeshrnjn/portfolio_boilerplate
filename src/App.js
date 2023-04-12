import Header from './components/header/Header';
import ScrollToTop from './components/scrolltotop/ScrollToTop';
import Hero from './components/hero/Hero';
import FeaturedContent from './components/featuredcontent/FeaturedContent';
import RichText from './components/richtext/RichText';
import Skills from './components/skill/Skills';
import Work from './components/work/Work';
import Footer from './components/footer/Footer';
import ContactMe from './components/contactMe/ContactMe';

function App() {
  return (
    <div className="App">
      <section>
        <Header />
      </section>
      <div id="home">
        <Hero />
      </div>
      <div id="about" className='s-aboutme'>
        <FeaturedContent />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="richtext">
        <RichText />
      </div>
      <div id="works">
        <Work />
      </div>
      <ContactMe />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
