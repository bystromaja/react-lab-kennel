import { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import RandomDogBox from './components/RandomDogBox';

class MinaHundar extends Component {
  render() {
    // Dina listor från random1.js och random2.js
    const vuxnaHundar = [
        { name: "ALVA", image: "1alva.png" },
        { name: "AMBRA", image: "1ambra.png" },
        { name: "BOJAN", image: "1bojan.png" },
        { name: "CICKAN", image: "1cickan.png" },
        { name: "HELLY", image: "1helly.png" },
        { name: "LOTUS", image: "1lotus.png" },
        { name: "MUSCOT", image: "1muscot.png" },
        { name: "TIKKA", image: "1tikka.png" }
    ];

    const gamlaHundar = [
        { name: "PEPSI", image: "pepsi.png" },
        { name: "FINN", image: "2finn.png" },
        { name: "FRIDEBORG", image: "2frideborg.png" },
        { name: "HEIDI", image: "2heidi.png" },
        { name: "INTE", image: "2inte.png" },
        { name: "JIDDRA", image: "2jiddra.png" },
        { name: "LILLY", image: "2lilly.png" },
        { name: "MOLLY", image: "2molly.png" },
        { name: "PHIDELI", image: "2phideli.png" },
        { name: "RUFF", image: "2ruff.png" },
        { name: "TINNY", image: "2tinny.png" },
        { name: "TINO", image: "2tino.png" },
        { name: "TT", image: "2TT.png" },
        { name: "VICKE", image: "2vicke.png" }
    ];

    return (
      <div className="grid-container">
        <Header />
        <main className="bg-hundar">
          <h1>MINA HUNDAR</h1>
        </main>

        <section className="dubbel-slider-sektion color-hundar">
          <div className="slider-container">
            <h2>MINA HUNDAR</h2>
            <div className="slider-wrapper1">
              <div className="slides">
                {/* Första boxen startar direkt */}
                <RandomDogBox dogList={vuxnaHundar} />
              </div>
            </div>
          </div>

          <div className="slider-container">
            <h2>HUNDAR JAG MINNS</h2>
            <div className="slider-wrapper1">
              <div className="slides">
                {/* Andra boxen väntar 2.5 sekunder (2500ms) innan den börjar byta */}
                <RandomDogBox dogList={gamlaHundar} startDelay={2500} />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

export default MinaHundar;