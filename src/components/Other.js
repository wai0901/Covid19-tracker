import React from "react";
import StateChart from './charts/StatePieChart';
import './Other.css';

const Other = ({selectedState, menuLanguage, usData, otherShow}) => {

    let usCases = usData.cases;
    let language = menuLanguage[0];

    const {
        state,
        positive, negative,  
        hospitalizedCurrently, 
        recovered, lastUpdateEt,
        death, totalTestResults
    } = selectedState;

    return(
        <div className="other-container" style={{top: otherShow? "-5%": "100%"}}>
            <div className="content-container">
                <div className="title-container">
                    <h3>{state}</h3>
                </div>
                <div className="content">
                    <div className="content-left text">
                        <p>{language.positive}: {positive? positive: language.data}</p>
                        <p>{language.recovered}: {recovered? recovered: language.data}</p>
                        <p>{language.death}: {death? death: language.data}</p>
                    </div>
                    <div className="content-right text">
                        <p>{language.hospitalized}: {hospitalizedCurrently? hospitalizedCurrently: language.data}</p>
                        <p>{language.totalTested}: {totalTestResults? totalTestResults: language.data}</p>
                        <p>{language.negative}: {negative? negative: language.data}</p>
                    </div>
                </div>
                <div className="update-container">
                    <p>{language.lastUpdateEt}: {lastUpdateEt}</p>
                </div>
            </div> 
            <div className="chart-container">
                <StateChart 
                positive={positive}
                state={state}
                usCases={usCases}
                language={language}
                />
            </div>
        </div>
    )
}

export default Other;