import React from 'react';

import { Line } from 'react-chartjs-2';



export default ({ colors, data }) => (
    <Line data={{
        labels: Object.keys(data),
        datasets: Object.keys(data).map(dataKey => {
            const rgb = colors[dataKey];
            return ({
                label: dataKey,
                fill: false,
                backgroundColor: `rgb(${rgb},0.2)`,
                borderColor: `rgb(${rgb},1)`,
                borderWidth: 1,
                hoverBackgroundColor: `rgb(${rgb},0.4)`,
                hoverBorderColor: `rgb(${rgb},1)`,
                data: data[dataKey],
            })
        })
    }} options={{
        scales: {
            xAxes: [{
                gridLines: {
                    display: false,
                },
            }],
            yAxes: [{
                gridLines: {
                    display: true,
                    color: 'rgba(45,50,73,1)',
                    lineWidth: 2,
                    drawTicks: false,
                    drawBorder: false,
                },
            }],
        }
    }} />
)
