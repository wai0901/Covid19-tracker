import React from 'react'; 
import { Bar } from 'react-chartjs-2'; 


const WorldPieChart = ({menuLanguage, continentData}) => {

    const language = menuLanguage[0];

    const updatedDate = continentData.map(data => data.updated)
    const casesData = continentData.map(data => data.cases)
    const continents = continentData.map(data => data.continent)

    const worldChartStyle = {
        margin: "0",
        padding: "0",
        fontSize: "0.6rem"
    }

    return (
        <div>
            <p style={worldChartStyle}>Last Updated:<br /> {Date(updatedDate[0])}</p>
            <Bar 
                data = {{
                    labels: continents,
                    datasets: [{
                        label: language.positive, 
                        backgroundColor: '#ff7675',
                        borderWidth: 0,
                        data: casesData,
                    }],
                }}
                width={"300"}
                height={"300%"}
                options ={{
                    responsive: true,
                    maintainAspectRatio: true,
                }}
            />
        </div>    
    )
}

export default WorldPieChart;