import { Component } from 'react';

class RandomDogBox extends Component {
  constructor(props) {
    super(props);
    // Vi väljer en slumpmässig hund direkt vid start
    const randomIndex = Math.floor(Math.random() * this.props.dogList.length);
    
    this.state = {
      currentDog: this.props.dogList[randomIndex]
    };
  }

  // Logiken för att slumpa en ny hund
  randomize = () => {
    const { dogList } = this.props;
    const randomIndex = Math.floor(Math.random() * dogList.length);
    this.setState({
      currentDog: dogList[randomIndex]
    });
  }

  // Reacts motsvarighet till window.onload
  componentDidMount() {
    // Om vi har skickat in en delay-prop (som för din andra box)
    if (this.props.startDelay) {
      this.timeout = setTimeout(() => {
        this.interval = setInterval(this.randomize, 5000);
      }, this.props.startDelay);
    } else {
      // Annars startar vi direkt
      this.interval = setInterval(this.randomize, 5000);
    }
  }

  // VIKTIGT: Rensa timers när komponenten tas bort för att undvika krascher
  componentWillUnmount() {
    clearInterval(this.interval);
    clearTimeout(this.timeout);
  }

  render() {
    const { currentDog } = this.state;

    return (
      <div className="slide">
        <img src={currentDog.image} alt={currentDog.name} />
        <div className="caption">{currentDog.name}</div>
      </div>
    );
  }
}

export default RandomDogBox;