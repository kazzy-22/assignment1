import React, {useState} from 'react';
import { Image } from 'react-bootstrap';
import Vector from './Vector (1).png';
import { Popover, Steps } from 'antd';
import './header.scss';
const Header = () =>{
    const [currentStep, setCurrentStep] = useState(1);

    const handleNextStep = () => {
      setCurrentStep((prevStep) => (prevStep < 5 ? prevStep + 1 : prevStep));
    };
  
    const handlePreviousStep = () => {
      setCurrentStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
    };
    const steps = [
        { number: 1, label: 'Product Info' },
        { number: 2, label: 'Manage Document' },
        { number: 3, label: 'eCTD Submission' },
        { number: 4, label: 'Validation' },
        { number: 5, label: 'Dispatch' }
      ];
    const description = "l"
      const customDot = (dot, { status, index }) => (
        <div className={`step-circle ${currentStep <= index ? '' : 'incomplete'}`}>
        {index}
      </div>
         

      );
    return(
        <div className="header-container">
            <Image className='header-logo' src={Vector} />
            <div className='step-container'>
            <Steps
    current={currentStep}
    progressDot={customDot}
    items={[
      {
        title: 'Product Info',
      },
      {
        title: 'Manage Document',
      },
      {
        title: 'eCTD Submission',
      },
      {
        title: 'Validation',
      },
      {
        title: 'Dispatch',
      },
    ]}
  />
            </div>
            <div className='right-header'>
                <div className='top'>
                    <div className='left'>
                    <span className='name'>Paul Rudd</span>
                    <span className='desig'>Author</span>
                    </div>
                    <div className='right'>
                    <i class="fa-solid fa-right-to-bracket"></i>
                    </div>
                </div>
                <div className='bottom'>
                    <span>Last login : 23:05 UCT</span>
                
                </div>
            </div>
            
        </div>
    )
}

export default Header;