import { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

class Kontakt extends Component {
  constructor(props) {
    super(props);
    
    // STATE: Här definierar vi komponentens interna minne.
    this.state = {
      // --- State för kontaktformuläret ---
      namn: '',
      email: '',
      amne: 'valp',
      meddelande: '',
      submitted: false, // Håller koll på om vi ska visa färgändringen

      // --- State för dina springande hundar (NYTT) ---
      isDogRunning: false // Motsvarar let isDogRunning = false i din gamla kod
    };
  }

  // --- FUNKTIONER FÖR FORMULÄRET (som förut) ---
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault(); // Hindra sidan från att laddas om
    console.log('Skickar data:', this.state);
    
    // Triggar färgförändringen genom att ändra state
    this.setState({ submitted: true });
  }

  // --- NY FUNKTION: Logiken för dina springande hundar ---
  handleTableMouseOver = () => {
    // 1. Guard: Om det redan rullar en gif, avbryt
    if (this.state.isDogRunning) return; 
    
    // 2. Action: kör den, nu springer en hund (byta state till true)
    console.log("Hundarna springer!");
    this.setState({ isDogRunning: true }); 
    
    // 3. Städa upp (motsvarar din setTimeout)
    // Spara timern i en variabel (this.dogTimer) så vi kan städa bort den senare.
    this.dogTimer = setTimeout(() => {
        // Nollställ flaggan: hundarna har sprungit klart
        this.setState({ isDogRunning: false });
    }, 4000); // 4 sekunder
  }

  // VIKTIGT: Rensa timern om användaren lämnar sidan!
  // Detta förhindrar memory leaks och att sidan kraschar.
  componentWillUnmount() {
    clearTimeout(this.dogTimer);
  }

  render() {
    // Vi skapar ett klassnamn baserat på om submitted är true (för färgändringen)
    const formClass = this.state.submitted ? 'kontakt-container form-submitted' : 'kontakt-container';

    return (
      <div className="grid-container">
        <Header />

        <main className="bg-kontakt">
            <h1>KONTAKT</h1>
        </main>

        <section className="kontakt-sektion">
            {/* Vi använder formClass för att dynamiskt ändra styling */}
            <div className={formClass}>
                <h2>KONTAKTA OSS</h2>
                
                {/* Om submitted är false, visa formuläret */}
                {!this.state.submitted && (
                    <>
                        <p>Har du frågor om våra hundar eller är intresserad av en valp? Skicka ett meddelande!</p>
                
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-grupp">
                                <label htmlFor="namn">Namn:</label>
                                <input 
                                    type="text" 
                                    id="namn" 
                                    name="namn" 
                                    required 
                                    placeholder="Ditt fullständiga namn"
                                    value={this.state.namn}
                                    onChange={this.handleInputChange}
                                />
                            </div>

                            <div className="form-grupp">
                                <label htmlFor="email">E-post:</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required 
                                    placeholder="Din e-postadress" 
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                />
                            </div>

                            <div className="form-grupp">
                                <label htmlFor="amne">Ärende:</label>
                                <select 
                                    id="amne" 
                                    name="amne"
                                    value={this.state.amne}
                                    onChange={this.handleInputChange}
                                >
                                    <option value="valp">Intresse av valp</option>
                                    <option value="foder">Frågor om foder/skötsel</option>
                                    <option value="ovrigt">Övrigt</option>
                                </select>
                            </div>

                            <div className="form-grupp">
                                <label htmlFor="meddelande">Meddelande:</label>
                                <textarea 
                                    id="meddelande" 
                                    name="meddelande" 
                                    rows="5" 
                                    required 
                                    placeholder="Skriv ditt meddelande här..."
                                    value={this.state.meddelande}
                                    onChange={this.handleInputChange}
                                ></textarea>
                            </div>

                            <button type="submit" className="skicka-btn">SKICKA MEDDELANDE</button>
                        </form>
                    </>
                )}

                {/* Om submitted är true, visa bara detta tack-meddelande */}
                {this.state.submitted && (
                    <div className="success-message">
                        <h3>Tack för ditt meddelande, {this.state.namn}!</h3>
                        <p>Vi återkommer till dig på {this.state.email} så snart vi kan.</p>
                    </div>
                )}
            </div>
        </section>

        {/* --- Din Hälsoresultat-tabell --- */}
        <section className="tabell-sektion">
            <h2>HÄLSORESULTAT & FAKTA</h2>
            
            {/* LÄGG TILL DETTA: Om isDogRunning är true, visa gif:en */}
            {this.state.isDogRunning && (
                <img src="dogsrun.gif" alt="Springande hundar" className="running-dog animate-run" />
            )}

            <div className="tabell-container">
                {/* LÄGG TILL DETTA: onMouseOver-eventet på tabellen! */}
                <table onMouseOver={this.handleTableMouseOver}>
                    <thead>
                        <tr>
                            <th>Hundens Namn</th>
                            <th>Ras</th>
                            <th>HD (Höfter)</th>
                            <th>ED (Armbågar)</th>
                            <th>Ögonlysning</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Helly</td>
                            <td>Berner Sennen</td>
                            <td>Grad A</td>
                            <td>3 (UA)</td>
                            <td>Utan anmärkning</td>
                        </tr>
                        <tr>
                            <td>Lotus</td>
                            <td>Berner Sennen</td>
                            <td>Grad A</td>
                            <td>3 (UA)</td>
                            <td>Utan anmärkning</td>
                        </tr>
                        <tr>
                            <td>Ambra</td>
                            <td>Berner Sennen</td>
                            <td>Grad A</td>
                            <td>3 (UA)</td>
                            <td>Mellan fram vänster</td>
                        </tr>
                        <tr>
                            <td>Muscot</td>
                            <td>Berner Sennen</td>
                            <td>Grad A</td>
                            <td>3 (UA)</td>
                            <td>Utan anmärkning</td>
                        </tr>
                        <tr>
                            <td>Pepsi</td>
                            <td>Berner Sennen</td>
                            <td>Grad A</td>
                            <td>3 (UA)</td>
                            <td>Utan anmärkning</td>
                        </tr>
                        <tr>
                            <td>Thyra</td>
                            <td>Berner Sennen</td>
                            <td>Grad A</td>
                            <td>3 (UA)</td>
                            <td>Svag fram höger</td>
                        </tr>
                        <tr>
                            <td>Cickan</td>
                            <td>Västgötaspets</td>
                            <td>Grad A</td>
                            <td>2 (UA)</td>
                            <td>Utan anmärkning</td>
                        </tr>
                        <tr>
                            <td>Alva</td>
                            <td>Västgötaspets</td>
                            <td>Grad A</td>
                            <td>2 (UA)</td>
                            <td>Utan anmärkning</td>
                        </tr>
                        <tr>
                            <td>Bojan</td>
                            <td>Västgötaspets</td>
                            <td>Grad B</td>
                            <td>3 (UA)</td>
                            <td>Utan anmärkning</td>
                        </tr>
                        <tr>
                            <td>Tikka</td>
                            <td>Västgötaspets</td>
                            <td>Grad A</td>
                            <td>2 (UA)</td>
                            <td>Utan anmärkning</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <Footer />
      </div>
    );
  }
}

export default Kontakt;