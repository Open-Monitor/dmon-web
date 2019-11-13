import React from 'react';

import { Bar } from 'react-chartjs-2';

export default ({ colors, data }) => (
    <Bar data={{
        labels: Object.keys(data),
        datasets: Object.keys(data).map(dataKey => {
            const rgb = colors[dataKey];
            return ({
                label: dataKey,
                fill: false,
                backgroundColor: `${rgb},0.2)`,
                borderColor: `${rgb},1)`,
                borderWidth: 1,
                hoverBackgroundColor: `${rgb},0.4)`,
                hoverBorderColor: `${rgb},1)`,
                data: data[dataKey],
            })
        })
    }} options={{
        maintainAspectRatio: true,
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
