import React from 'react'; 
import UsChart from './UsChart';
import WorldPieChart from './WorldPieChart';
import './Bottom.css';


const Bottom = ({usHistoryData, menuLanguage, switchButton, continentData}) => {


    return (
        <div className="us-chart-container">
            <div className="charts">
                {
                    switchButton? 
                    <UsChart 
                        usHistoryData={usHistoryData}
                        menuLanguage={menuLanguage}
                    />:
                    <WorldPieChart 
                        continentData={continentData}
                        menuLanguage={menuLanguage}
                    />
                }
            </div>
        </div>
    )
}

export default Bottom;