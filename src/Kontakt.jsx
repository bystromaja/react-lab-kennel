import { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

class Kontakt extends Component {
  constructor(props) {
    super(props);
    
    // Define our state, which includes both the form data and the new isDogRunning flag
    this.state = {
      namn: '',
      email: '',
      amne: 'valp',
      meddelande: '',
      submitted: false, 

      isDogRunning: false
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior (page reload)
    console.log('Skickar data:', this.state);
    
    // Starts the "submitted" state
    this.setState({ submitted: true });
  }

  handleTableMouseOver = () => {
    // If running, do nothing
    if (this.state.isDogRunning) return; 
    
    // They are running
    console.log("Hundarna springer!");
    this.setState({ isDogRunning: true }); 
    
    // Clean up after 4 seconds
    this.dogTimer = setTimeout(() => {
        this.setState({ isDogRunning: false });
    }, 4000);
  }

  // prevent memory leaks
  componentWillUnmount() {
    clearTimeout(this.dogTimer);
  }

  render() {
    // Create a dynamic class name for the form container based on whether the form has been submitted or not
    const formClass = this.state.submitted ? 'kontakt-container form-submitted' : 'kontakt-container';

    return (
      <div className="grid-container">
        <Header />

        <main className="bg-kontakt">
            <h1>KONTAKT</h1>
        </main>

        <section className="kontakt-sektion">
            {/* use the dynamic class name */}
            <div className={formClass}>
                <h2>KONTAKTA OSS</h2>
                
                {/* If the form hasn't been submitted, show the form */}
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