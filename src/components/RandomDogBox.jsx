import { Component } from 'react';

class RandomDogBox extends Component {
  constructor(props) {
    super(props);
    // Choose a random dog from the list when the component is created
    const randomIndex = Math.floor(Math.random() * this.props.dogList.length);
    
    this.state = {
      currentDog: this.props.dogList[randomIndex]
    };
  }

  // The logic to pick a new random dog every 5 seconds
  randomize = () => {
    const { dogList } = this.props;
    const randomIndex = Math.floor(Math.random() * dogList.length);
    this.setState({
      currentDog: dogList[randomIndex]
    });
  }

  componentDidMount() {
    // A delay before starting the randomization
    if (this.props.startDelay) {
      this.timeout = setTimeout(() => {
        this.interval = setInterval(this.randomize, 5000);
      }, this.props.startDelay);
    } else {
      // Otherswise, start immediately
      this.interval = setInterval(this.randomize, 5000);
    }
  }

  // Clear the interval and timeout when the component is unmounted to prevent memory leaks
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