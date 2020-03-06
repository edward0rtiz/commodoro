import React, {useState} from 'react';
import { Carousel} from 'react-bootstrap';
import farmPic from '../content/Las_Margaritas-16.JPG';
import farmPic2 from '../content/Las_Margaritas-38.JPG';
import profPic from '../content/Las_Margaritas-18.JPG';

function CarouselPic() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={farmPic}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={farmPic2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={profPic}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselPic;