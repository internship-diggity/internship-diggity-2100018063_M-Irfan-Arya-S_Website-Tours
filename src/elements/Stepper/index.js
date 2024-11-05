import React, { useState } from "react";
import PropTypes from 'prop-types';
import Controller from './Controller';
import MainContent from './MainContent';
import Meta from './Meta';
import Numbering from './Numbering';

function StepperComponent(props) {
    const { steps, initialStep } = props;
    const stepsKeys = Object.keys(steps);

    const [CurrentStep, setCurrentStep] = useState(
        stepsKeys.indexOf(initialStep) > -1 ? initialStep : stepsKeys[0]
    );
    
    const totalStep = stepsKeys.length; // Fixed typo: 'lenght' -> 'length'
    const indexStep = stepsKeys.indexOf(CurrentStep);

    function prevStep() {
        if (+indexStep > 0) setCurrentStep(stepsKeys[indexStep - 1]);
    }
    
    function nextStep() {
        if (+indexStep < totalStep) setCurrentStep(stepsKeys[indexStep + 1]);
    }

    return <>{props.children(prevStep, nextStep, CurrentStep, steps)}</>;
}

StepperComponent.propTypes = {
    steps: PropTypes.object.isRequired,  // Changed from 'data' to 'steps' to match props
    initialStep: PropTypes.string,       // Made optional since there's a fallback
};

export { Controller, MainContent, Meta, Numbering };
export default StepperComponent;