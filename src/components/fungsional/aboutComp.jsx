import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container,
  Row,
  Col,
} from 'reactstrap';
import CardComp from './cardComp';

const items = [
  {
    src: 'https://picsum.photos/id/123/1200/400',
    altText: 'About Page 1',
    caption: 'About Page 1',
    key: 1,
  },
  {
    src: 'https://picsum.photos/id/456/1200/400',
    altText: 'About Page 2',
    caption: 'About Page 2',
    key: 2,
  },
  {
    src: 'https://picsum.photos/id/678/1200/400',
    altText: 'About Page 3',
    caption: 'About Page 3',
    key: 3,
  },
];

function Aboutpage(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...args}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
      <Container>
        <Row>
          <Col><CardComp id="1" judul="tes judul 1" tanggal="2023-05-21"></CardComp></Col>
          <Col><CardComp id="2" judul="tes judul 2" tanggal="2023-05-22"></CardComp></Col>
          <Col><CardComp id="3" judul="tes judul 3" tanggal="2023-05-23"></CardComp></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Aboutpage;