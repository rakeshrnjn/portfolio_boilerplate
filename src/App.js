import Header from './components/header/Header';
import ScrollToTop from './components/scrolltotop/ScrollToTop';
import Hero from './components/hero/Hero';
import FeaturedContent from './components/featuredcontent/FeaturedContent';
import RichText from './components/richtext/RichText';

function App() {
  return (
    <div className="App">
      <section>
        <Header />
      </section>
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <FeaturedContent />
      </div>
      <div id="richtext">
        <RichText />
      </div>
      <div id="contact" style={{ height: 500 }}>
        <h1>This is Contact section</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
        repellendus. Totam nihil similique a repellat minus dolor amet quasi.
        Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
      </div>
      <div id="service" style={{ height: 500 }}>
        <h1>This is Service section</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
        repellendus. Totam nihil similique a repellat minus dolor amet quasi.
        Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
      </div>
      <ScrollToTop />
    </div>
  );
}

export default App;
