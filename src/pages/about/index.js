import React, { useState, useEffect } from "react";
import {useParams, useHistory} from 'react-router-dom';
import StepWizard from "react-step-wizard";
import axios from "axios";

import Button from 'comps/Button/default';

const Step1 = ({nextStep}) => {
    return (
        <div className="page">
            <img src="/logo.svg" className="logo"/>
            <div className="page_flexbox about_img">
              <img src="/rescuer.svg" />
              <img src="/link.svg" />
              <img src="/paw.svg" />
            </div>
            <p className="about_text">Our mission is to create a community
                for individual animal rescuers &amp;
                animal rescue organizations to safely
                interact and exchange valuable information.</p>
            <Button text="next" disable={true} onClick={nextStep}/>
        </div>
    )
};

const Step2 = ({}) => {
    const history = useHistory();

    return (
        <div className="page">
            <img src="/logo.svg" className="logo"/>
            <div className="about_img" id="about_img2">
              <img src="/humanposts.svg" />
              <img src="/rehab.svg" />
              <img src="/species.svg" />
            </div>
            <p className="about_text">NO human posts allowed, but 
                YES rehabilitation &amp; recovery posts!
                <br></br>
                <br></br>
                Feel the freedom to share your
                experience in animal rescue with
                NO limits on species.</p>
            <Button text="let's start!" disable={true} onClick={()=>{
                history.push("/login")
            }}/>
        </div>
    )
};

export default function About() {
    return (
        <div>
            <StepWizard>
                <Step1 />
                <Step2 />
            </StepWizard>
        </div>
    )
};