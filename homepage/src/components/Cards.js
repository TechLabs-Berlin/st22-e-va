
import React from 'react';
import './Cards.css';
import CardsItem from './CardsItem';
function Cards() {
  return (
    <div className='cards'>
      <h1 className='text'>What our users have to say?</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardsItem
              src="images/Image1.png"
              text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr,"
              path="/"
              label="About E-va"
            />
            <CardsItem
               src="images/Image2.png"
               text=" Lorem ipsum dolor sit amet, consetetur sadipscing elitr, "
               label="Maternity"

               path="/"
            />
          </ul>
          <ul className='cards__items'>
            <CardsItem
              src="images/Image3.png"
              text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
              path="/"
              label="Causes of long period"
            />
            <CardsItem
              src="images/Image4.png"
              text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
              path="/"
              label="Experiences"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Cards