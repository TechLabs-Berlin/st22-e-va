import React from 'react';
import ReactMenu from '../Component/ReactMenu'
import Typography from '../Component/Typographyh1h2';
import ColorButtons from '../Component/OmarButton';
import TextMobileStepper from '../Component/TextMobileStepper';
import TextMobileStepperVis from '../Component/TextMobileStepperVis';
import TextMobileStepperVisVis from '../Component/TextMobileStepperVisVis';
import Card1 from '../Component/Card1'
import Card2 from '../Component/Card2'
import Card3 from '../Component/Card3'
import Card4 from '../Component/Card4'
import Card5 from '../Component/Card5'
import Card6 from '../Component/Card6'
import Footer from '../Component/Footer';
import ButtonLogin from '../Component/ButtonLogin';
import ButtonSignUp from '../Component/ButtonSignUp';


function Homepage() {
  return (
    <div>
    <ReactMenu />
    <Typography />
    <ColorButtons />
    <TextMobileStepper />
    <TextMobileStepperVis />
    <TextMobileStepperVisVis />
    <Card1 />
    <Card2 />
    <Card3 />
    <Card4 />
    <Card5 />
    <Card6 />
    <Footer />
    <ButtonLogin />
    <ButtonSignUp />
  </div>
  );
}

export default Homepage;