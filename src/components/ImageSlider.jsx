import { Component } from 'react';

class ImageSlider extends Component {
  constructor(props) {
    super(props);
    // STATE: Håller koll på vilken bild som visas just nu (index)
    this.state = { currentIndex: 0 };
  }

  nextSlide = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % this.props.images.length
    }));
  };

  prevSlide = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex - 1 + this.props.images.length) % this.props.images.length
    }));
  };

  render() {
    const { images } = this.props;
    const { currentIndex } = this.state;

    return (
      <div className="slider-container-box">
        <div className="slider-wrapper2">
          <button className="prev-btn" onClick={this.prevSlide}>&#10094;</button>
          <div className="slide">
            <img src={images[currentIndex]} alt="Bildspel" />
          </div>
          <button className="next-btn" onClick={this.nextSlide}>&#10095;</button>
        </div>
        <div className="dots">
          {images.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === currentIndex ? 'active' : ''}`}
            ></span>
          ))}
        </div>
      </div>
    );
  }
}

export default ImageSlider;