import React from 'react';

const WorldData = ({menuLanguage, worldData}) => {

    const menuText = menuLanguage[0];

    const {total_cases, recovery_cases, death_cases, 
        last_update, critical_condition_active_cases, 
        active_cases_mild_percentage, active_cases_critical_percentage,
        general_death_rate, mild_condition_active_cases} = worldData;

    return (
        <React.Fragment>
            <div className="main-container">
                <div className="main main-left">
                    <h3>{menuText.positive}</h3>
                    <p>{total_cases}</p>
                </div>
                <div className="main">
                    <h3>{menuText.recovered}</h3>
                    <p>{recovery_cases}</p>
                </div>
                <div className="main main-right">
                    <h3>{menuText.death}</h3>
                    <p>{death_cases}</p> 
                </div>
            </div>
            <div className="content-container">
                <div className="content">
                    <p>{menuText.todayIncreased}: {critical_condition_active_cases? critical_condition_active_cases: menuText.data}</p>
                    <p>{menuText.todayDeath}: {active_cases_mild_percentage? active_cases_mild_percentage: menuText.data}%</p>
                    <p>{menuText.critical}: {active_cases_critical_percentage? active_cases_critical_percentage: menuText.data}%</p>           
                </div>
                <div className="content">
                    <p>{menuText.mildCondition}: {mild_condition_active_cases? mild_condition_active_cases: menuText.data}</p>
                    <p>{menuText.deathRate}: {general_death_rate? Math.floor(general_death_rate): menuText.data}%</p>
                    
                </div>
            </div>
        </React.Fragment>
    )
}

export default WorldData;