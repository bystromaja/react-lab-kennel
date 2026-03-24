import { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

class OmOss extends Component {
  render() {
    return (
      <div className="grid-container">
        <Header />

        <main className="bg-om-oss">
            <h1>OM OSS</h1>
        </main>

        <section className="info-sektion color-om-oss">
                <div className="text-ruta">
                <h2>BETH-LIS RAGHALL</h2>
                <p>Varmt välkommen till mig, Beth-Lis Raghall, som bor i Tåme norr om Skellefteå med västgötaspetsen Cickan och mina tre berner sennenhundar Lotus, Rille och Ruffa. Djur är mitt livs stora intresse och jag är aktiv inom både Svenska Sennenhundklubben och SBK, där jag följer alla avelsetiska regler och drar nytta av min erfarenhet som tidigare test- och tävlingsledare.</p>
                <p> Läs mer om Svenska Sennenhundklubben här: <a href="https://sshk.se/" target="_blank">SSHK</a></p> 
                <p> Läs mer om Svenska Brukshundklubben här: <a href="https://brukshundklubben.se/" target="_blank">SBK</a></p> 
                </div>
                
            <div className="bild-ruta">
                <img src="beth-lis.png" alt="Beskrivning av hunden" />
            </div>
        </section>

        <section className="info-sektion color-om-oss">
                <div className="text-ruta">
                <h2>MIN KENNEL</h2>
                    <p>Mitt kennelnamn Betilly’s har jag haft sedan 1997 då min första tik Stenhöjdens Otinny lade grunden för verksamheten, som sedan fortsatte med hanhundar som "TT" och Tino. En stor del av mitt hundliv har jag delat med familjen Käll på Edolle’s kennel, och jag ser fram emot att fortsätta dela glädjen kring dessa fantastiska raser.</p>
                </div>
                
            <div className="bild-ruta">
                <img src="beth-lis2.png" alt="Beskrivning av hunden" />
            </div>
        </section>

        <section className="canvas-sektion">
                <canvas id="minCanvas"></canvas>
            </section>

        <Footer />
      </div>
    );
  }
}

export default OmOss;