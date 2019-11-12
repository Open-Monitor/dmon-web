import React from 'react';

import { Line } from 'react-chartjs-2';

const generateRandomRGB = () => {
    const r = ~~(Math.random() * ~~255)
    const g = ~~(Math.random() * ~~255)
    const b = ~~(Math.random() * ~~255)

    return `rgb(${r}, ${g}, ${b}`
}

export default ({ labels, data }) => (
    <Line data={{
        labels: labels,
        datasets: Object.keys(data).map(dataKey => {
            const rgb = generateRandomRGB();
            return ({
                label: dataKey,
                backgroundColor: `${rgb},0.2)`,
                borderColor: `${rgb},1)`,
                borderWidth: 1,
                hoverBackgroundColor: `${rgb},0.4)`,
                hoverBorderColor: `${rgb},1)`,
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