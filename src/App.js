import Header from './components/header/Header';
import BackToTop from './components/backtotop/BackToTop';
import Navigation from './components/navigation/Navigation';
import Hero from './components/hero/Hero';

function App() {
  return (
    <div className="App">
      <section>
        <Header />
      </section>
      {/* <Navigation /> */}
      <div id="home">
        <Hero />
      </div>
      <div id="about" style={{ height: 500 }}>
        <h1>This is About section</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
        repellendus. Totam nihil similique a repellat minus dolor amet quasi.
        Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
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
      <BackToTop />
    </div>
  );
}

export default App;
