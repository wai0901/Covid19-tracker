import React from 'react';

const UsData = ({menuLanguage, usData, usMoreData}) => {

    const menuText = menuLanguage[0];

    const {
        cases, todayCases, todayDeaths, critical, recovered, 
        deaths, tests} = usData;

    const {inIcuCurrently, onVentilatorCurrently} = usMoreData;

    return (
        <React.Fragment>
            <div className="main-container">
                <div className="main main-left">
                    <h3>{menuText.positive}</h3>
                    <p>{cases}</p>
                </div>
                <div className="main">
                    <h3>{menuText.recovered}</h3>
                    <p>{recovered}</p>
                </div>
                <div className="main main-right">
                    <h3>{menuText.death}</h3>
                    <p>{deaths}</p> 
                </div>
            </div>
            <div className="content-container">
                <div className="content">
                    <p>{menuText.todayIncreased}: {todayCases? todayCases: menuText.data}</p>
                    <p>{menuText.todayDeath}: {todayDeaths? todayDeaths: menuText.data}</p>
                    <p>{menuText.critical}: {critical? critical: menuText.data}</p>           
                </div>
                <div className="content">
                    <p>{menuText.totalTested}: {tests? tests: menuText.data}</p>
                    <p>{menuText.inIcu}: {inIcuCurrently? inIcuCurrently: menuText.data}</p>
                    <p>{menuText.onVentilator}: {onVentilatorCurrently? onVentilatorCurrently: menuText.data}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default UsData;