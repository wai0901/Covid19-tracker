import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import Header from "./Header";
import Other from "./Other";
import Body from './body/Body';
import SelectButton from './select/SelectButton';
import { fetchUsData, fetchStatedData, fetchHistoryData, fetchUsMoreData, fetchWorldData, fetchContinentData } from './api/api';
import OtherCountries from './other-countries/OtherCountries';
import {ENGLISH, CHINESE} from '../shared/text';
import './Main.css';
import Bottom from './charts/Bottom';



const Main = () => {

    const [worldData, setWorldData] = useState([]);
    const [continentData, setContinentData] = useState([]);
    const [usData, setUsData] = useState([]);
    const [usMoreData, setUsMoreData] = useState([]);
    const [stateData, setStateData] = useState([]);
    const [usHistoryData, setUsHistoryData] = useState([]);
    const [countryData, setCountryData] = useState([]);
    const [countryHis, setCountryHis] = useState([]); 
    const [selectedState, setSelectedState] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [language, setlanguage] = useState(false);
    const [otherShow, setOtherShow] = useState(false);
    const [otherCountriesShow, setOtherCountriesShow] = useState(false);
    const [switchButton, setSwitchButton] = useState(false);

    //Change Language
    const languageHandler = () => {
        setlanguage(!language)
    }

    // Fetech world data from api.js
    useEffect(() => { 
        setIsLoading(true);
        
        const fetchWorld = async () => { 
            try {
                setWorldData(await fetchWorldData()); 
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        }; 
        fetchWorld(); 

        const fetchContinet = async () => { 
            try {
                setContinentData(await fetchContinentData()); 
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        }; 
        fetchContinet(); 
    }, []); 

    // Fetech states data from api.js
    useEffect(() => { 
        setIsLoading(true);
        
        const fetchStates = async () => { 
            try {
                setStateData(await fetchStatedData()); 
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        }; 
        fetchStates(); 
    }, []); 

    //Fetch US Current Data from api.js
    useEffect( () => {
        setIsLoading(true);
        const fetchUsCurrentData = async () => {
            try {
                setUsData(await fetchUsData());
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        fetchUsCurrentData();

        const fetchUsMoreCurrentData = async () => {
            try {
                setUsMoreData(await fetchUsMoreData());
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        fetchUsMoreCurrentData();

    }, []);

    //US History Data
    useEffect( () => {
        setIsLoading(true);
        const fetchHisData = async () => {
            try {
                setUsHistoryData(await fetchHistoryData()); 
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        fetchHisData();
    }, []);

    //Countries Data
    const selectCountryHandler = async (value) => {

        setIsLoading(true);
        setOtherCountriesShow(true);
        setOtherShow(false);

        try {
            const data = await axios (
                `https://corona.lmao.ninja/v2/countries/${value}`
            );   
            setCountryData(data["data"])
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);

        try {
            const historyData = await axios (
                "https://corona.lmao.ninja/v2/historical"
            );   
            const newData = historyData.data.filter(country => country.country === value)[0]["timeline"]

            setCountryHis(
                {
                    cases: Object.values(newData.cases),
                    deaths: Object.values(newData.deaths),
                    recovered: Object.values(newData.recovered),
                    dates: Object.keys(newData.cases)
                }
            )
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    }
 
    //get the selected state data
    const selectStateHandler = (value) => {
        let state = (stateData.filter(state => state.state === value))[0]
        setSelectedState(state);
        setOtherShow(true);
        setOtherCountriesShow(false);
    }

    //switch button for changing world and US data
    const switchHandler = () => {
        setSwitchButton(!switchButton);
        setOtherShow(false);
        setOtherCountriesShow(false);
    }
    
    return (
        <div className="bg">
            <div className="container">
            <div className="backgroundImage"></div>
                <Header 
                    languageHandler={languageHandler}
                    language={language}
                    menuLanguage={language?CHINESE:ENGLISH}
                    />
                <Body 
                    worldData={worldData}
                    usData={usData}
                    usMoreData={usMoreData}
                    menuLanguage={language?CHINESE:ENGLISH}
                    switchHandler={switchHandler}
                    switchButton={switchButton}
                    />
                <SelectButton 
                    states={stateData.map(data => data.state)}
                    selectStateHandler={selectStateHandler}
                    selectCountryHandler={selectCountryHandler}
                    menuLanguage={language?CHINESE:ENGLISH}
                    />
                <div className="us-chart-container">
                    <Bottom 
                        usHistoryData={usHistoryData}
                        menuLanguage={language?CHINESE:ENGLISH}
                        switchButton={switchButton}
                        continentData={continentData}
                    />
                </div>
                <div className="other-countries-container">
                    <OtherCountries 
                       otherCountriesShow={otherCountriesShow}
                       menuLanguage={language?CHINESE:ENGLISH}
                       countryData={countryData}
                       countryHis={countryHis}
                    />
                </div>
                <div className="contents-container">
                    <Other 
                        selectedState={selectedState}
                        menuLanguage={language?CHINESE:ENGLISH}
                        usData={usData}
                        otherShow={otherShow}
                    />
                </div>
            </div>
            <div className="loading-container">
                {isLoading && 
                    <div>
                        <div class="bounceball"></div>
                        <p className="text">LOADING...</p>
                    </div>
                }
            </div> 
        </div>
    )
}

export default Main;