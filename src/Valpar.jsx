import { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ImageSlider from './components/ImageSlider';

class Valpar extends Component {
  render() {
    // define the image arrays for the sliders
    const bernerValpar = [
        "valp1Ha.png", 
        "valp2Ha.png", 
        "valp3H.png", 
        "valp4H.png"
    ]; 
    
    const vgsValpar = [
        "Vvalp1.png", 
        "Vvalp2.png", 
        "Vvalp3.png", 
        "Vvalp4.png", 
        "Vvalp5.png"
    ];

    return (
      <div className="grid-container">
        <Header />

        <main className="bg-valpar">
            <h1>VALPAR</h1>
        </main>

        {/* --- BERNER SENNEN SEKTION --- */}
        <section className="slider-sektion color-valpar">
            <div className="slider-text">
                <h2>BERNER SENNEN</h2>
                <p>
                    Vi är överlyckliga att kunna berätta att det nu har fötts 4 underbara valpar efter 
                    vår fina tik Betilly’s Lotus och den stiliga hanen Bernerdalens Bamse. Båda föräldrarna 
                    är mentalt stabila och fria på både höfter (HD: A) och armbågar (ED: 0), vilket ger kullen 
                    de allra bästa förutsättningarna. Är du intresserad av en ny familjemedlem är du varmt 
                    välkommen att höra av dig till oss!
                </p>
            </div>

            {/* Här anropar vi slidern för Berner Sennen */}
            <ImageSlider images={bernerValpar} />
        </section>

        {/* --- VIDEO SEKTION --- */}
        <section className="video-sektion color-valpar">
            <h2>SE VÅRA VALPAR I RÖRELSE</h2>
            <div className="video-container">
                <video controls width="500">
                    <source src="IMG_1708.mp4" type="video/mp4" />
                    Din webbläsare stödjer inte videouppspelning.
                </video>
            </div>
            <p className="video-text">
                Här kan du se en kort sekvens från vår valp Frans som fyllde 8 veckor nyligen.
            </p>
        </section>

        {/* --- VÄSTRAGÖTAVPETS SEKTION --- */}
        <section className="slider-sektion color-valpar">
            <div className="slider-text">
                <h2>VÄSTRAGÖTAVPETS</h2>
                <p>
                    Vi har nu fått 5 fina valpar efter vår Cickan och hanen Skogsbygdens Viking. 
                    Båda föräldrarna är friska, friröntgade (HD: A) och ögonlysta utan anmärkning. 
                    Varmt välkommen att höra av dig vid intresse!
                </p>
            </div>

            {/* Här anropar vi slidern för Västgötaspets */}
            <ImageSlider images={vgsValpar} />
        </section>

        <Footer />
      </div>
    );
  }
}

export default Valpar;