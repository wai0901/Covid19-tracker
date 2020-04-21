import React from 'react';
import './Body.css';
import UsData from './UsData';
import WorldData from './WorldData';



const Body = ({usData, usMoreData, menuLanguage, worldData, switchHandler, switchButton}) => {

    const menuText = menuLanguage[0];
    

        
    

    return (
        <div className="card-container">
            <div className="switch-button">
                <button onClick={() => switchHandler()}>{switchButton? menuText.world: menuText.us}</button>
            </div>
            <div className="title">
                {switchButton? <h3>{menuText.us}</h3> :<h3>{menuText.world}</h3>}
            </div>
            {
                switchButton?
                <UsData 
                    usData={usData}
                    usMoreData={usMoreData}
                    menuLanguage={menuLanguage}/>:
                <WorldData 
                    worldData={worldData}
                    menuLanguage={menuLanguage}
                />
            }
        </div> 
    )
}

export default Body;