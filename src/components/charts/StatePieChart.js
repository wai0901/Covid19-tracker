import React from 'react'; 
import { Pie } from 'react-chartjs-2'; 


const StateChart = ({positive, state, usCases, language}) => {

    const pieChart = (
        <Pie 
            data = {{
                labels: [language.us, state],
                datasets: [{
                    backgroundColor: ['#ff7675', '#d63031'],
                    borderWidth: 0,
                    data: [usCases, positive],
                }]
            }}
            width={"250"}
            height={"250%"}
            options ={{
                responsive: true,
                maintainAspectRatio: false,
            }}
        />
    );

    return (
        <div className="chart">
            {pieChart}
        </div>
    )
}

export default StateChart;