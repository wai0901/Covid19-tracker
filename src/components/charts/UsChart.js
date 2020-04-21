import React from 'react'; 
import { Line } from 'react-chartjs-2'; 


const Bottom = ({usHistoryData, menuLanguage}) => {

    const language = menuLanguage[0];

    return (
        <Line 
            data = {{
                labels: (usHistoryData.map(data => data.date)).reverse(),
                datasets: [{ 
                data: (usHistoryData.map(data => data.positiveIncrease)).reverse(), 
                label: language.dailyIncreased, 
                borderColor: '#e17055', 
                fill: false, 
                pointRadius: 0,
                borderWidth: '2',
            },{ 
            data: (usHistoryData.map(data => data.totalTestResultsIncrease)).reverse(), 
            label: language.dailyTested, 
            borderColor: '#0984e3', 
            // backgroundColor: 'rgba(255, 0, 0, 0.5)', 
            fill: false, 
            pointRadius: 0,
            borderWidth: '2',
          }, 
          ]}}
            width={"300%"}
            height={"300%"}
            options ={{
                responsive: true,
                maintainAspectRatio: true,
            }}
        />
    )
}

export default Bottom;