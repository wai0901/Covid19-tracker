import React from "react";
import CountryChart from '../charts/CountryChart';
import './OtherCountries.css';



const OtherCountries = ({otherCountriesShow, countryData, menuLanguage, countryHis}) => {
    
    let language = menuLanguage[0];
    
    const {
        cases,todayCases, recovered,  
        deaths, todayDeaths,
        tests, updated
    } = countryData;

    return(
        <div className="countries-container" style={{top: otherCountriesShow? "-5%": "100%"}}>
            <div className="counties-content-container">
                <div className="title-container">
                    <h3>{countryData.country}</h3>
                </div>
                <div className="content">
                    <div className="content-left text">
                        <p>{language.positive}: {cases}</p>
                        <p>{language.todayIncreased}: {todayCases}</p>
                        <p>{language.recovered}: {recovered}</p>
                    </div>
                    <div className="content-right text">
                        <p>{language.death}: {deaths}</p>
                        <p>{language.todayIncreased}: {todayDeaths}</p>
                        <p>{language.totalTested}: {tests}</p>
                    </div>
                </div>
                <div className="update-container">
                    <p>{language.lastUpdateEt}: {Date(updated)}</p>
                </div>
            </div> 
            <div className="country-chart-container">
                <CountryChart 
                    countryHis={countryHis}
                    language={language}
                />
            </div>
        </div>
    )
}

export default OtherCountries;