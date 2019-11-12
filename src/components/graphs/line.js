import React from 'react';

import { Line } from 'react-chartjs-2';

export default ({ title, data }) => (
    <Line data={{
        labels: [],
        datasets: [{
            label: title,
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data,
        }]
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