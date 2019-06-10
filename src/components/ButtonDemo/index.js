import React from 'react';
import ButtonContainer from '../Button';
import CountContainer from '../Count';

const ButtonDemo = () => (
  <div className="content" data-tag="EmptySpace">
    <ButtonContainer />
    <CountContainer n={1} />
  </div>
);

export default ButtonDemo;
