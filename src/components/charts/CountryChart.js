import React from 'react'; 
import { Line } from 'react-chartjs-2'; 
import './CountryChart.css';


const CountryChart = ({countryHis, language}) => {

    const {cases, deaths, recovered, dates} = countryHis;

    const CountryChart = (
        <Line 
            data = {{
                labels: dates,
                datasets: [{ 
                data: cases, 
                label: language.positive, 
                borderColor: '#f19066', 
                fill: false, 
                pointRadius: 0,
                borderWidth: '2',
            },{ 
                data: recovered, 
                label: language.recovered, 
                borderColor: '#546de5', 
                fill: false, 
                pointRadius: 0,
                borderWidth: '2',
            }, { 
                data: deaths, 
                label: language.death, 
                borderColor: '#c44569', 
                backgroundColor: 'rgba(255, 0, 0, 0.5)', 
                fill: false, 
                pointRadius: 0,
                borderWidth: '2',
            }, 
            ]}}
                width={"250%"}
                height={"250%"}
                options ={{
                    responsive: true,
                    maintainAspectRatio: false,
            }}
        />
    );

    return (
        <div className="country-chart-container">
            {CountryChart}
        </div>
    )
}

export default CountryChart;