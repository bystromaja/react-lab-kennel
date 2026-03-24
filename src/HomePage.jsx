import { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

class HomePage extends Component {
  render() {
    return (
      <div className="grid-container">
        <Header />

        <main className="bg-hem">
            <h1>BETILLYS</h1>
        </main>
    
        <section className="info-sektion color-hem">
                <div className="text-ruta">
                <h2>BERNER SENNEN</h2>
                <p>Berner sennen är en stor och kraftig schweizisk gårds- och vallhund som ursprungligen användes både för att vakta boskap och dra tunga vagnar. Den är lätt att känna igen på sin vackra, långhåriga päls i tre färger (svart, vitt och rostrött) som kräver regelbunden borstning. Till sättet är rasen känd för att vara lugn, tålmodig och vänlig, vilket gör den till en mycket uppskattad familjehund.</p>
                </div>
                
            <div className="bild-ruta">
                <img src="berner.png" alt="Beskrivning av hunden" />
            </div>
        </section>

        <section className="info-sektion color-hem">
                <div className="text-ruta">
                <h2>VÄSTRAGÖTASPETS</h2>
                    <p>Västgötaspetsen är en äkta svensk lantras som tros ha anor ända tillbaka till vikingatiden. Trots sina korta ben är det en mycket energisk och tålig vallhund som traditionellt har använts för att valla kor genom att nafsa dem i hasorna. Det är en vaken och orädd hund som är lättlärd och lojal, men den behöver en del mental aktivering för att må bra.</p>
                </div>
                
            <div className="bild-ruta">
                <img src="VGS.png" alt="Beskrivning av hunden" />
            </div>
        </section>

        <Footer />
      </div>
    );
  }
}

export default HomePage;