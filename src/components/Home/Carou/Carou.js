import React, { useState } from "react";
import { Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem } from "reactstrap";
import items from "./items";
import "./Carou.css";

const Carou = () => {
  const [transition, settransition] = useState(false);
  const [active, setActive] = useState(0);

  const next = () => {
    if (transition) return;
    const newslide = active === items.length - 1 ? 0 : active + 1;
    setActive(newslide);
  };

  const prev = () => {
    if (transition) return;
    const newslide = active === 0 ? items.length - 1 : active - 1;
    setActive(newslide);
  };

  const goto = (newslide) => {
    if (transition) return;
    setActive(newslide);
  };

  return (
    <section id="home" className="fix">
      <Carousel activeIndex={active} next={next} previous={prev}>
        <CarouselIndicators items={items} activeIndex={active} onClickHandler={goto} />
        {items.map((item) => {
          return (
            <CarouselItem onExiting={() => settransition(true)} onExited={() => settransition(false)} key={item.src}>
              <img src={item.src} alt={item.alt} className="cimage" />
              <CarouselCaption captionHeader={item.head} captionText={item.text} />
            </CarouselItem>
          );
        })}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={prev} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </section>
  );
};

export default Carou;
