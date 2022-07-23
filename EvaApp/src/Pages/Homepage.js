import React from 'react';
import ReactMenu from "../Component/ReactMenu";
import ButtonAppBar from '../Component/ButtonAppBar';
import Typography from '../Component/Typographyh1h2';
import ColorButtons from '../Component/OmarButton';
import TextMobileStepper from '../Component/TextMobileStepper';

function Homepage() {
  return (
    <div>
    <ButtonAppBar />
    <ReactMenu />
    <Typography />
    <ColorButtons />
    <TextMobileStepper />
  </div>
  );
}

export default Homepage;