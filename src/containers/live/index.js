import React, { useState, useMemo } from 'react';

import manifest from '../../config/manifest';
import { connectSocket } from '../../helpers';

import { Line } from 'react-chartjs-2';

const connectToLiveSocket = (appendCb) => connectSocket(
    `${manifest.hostMonitor}/live`,
    (live) => {
        live.emit('subscribeToLiveTransmission', ['duh']);
        live.on('liveTransmission', (transmissionPacket) => appendCb(transmissionPacket));
    });

export default () => {
    const [transmissionPackets, setTransmissionPackets] = useState([]);

    connectToLiveSocket(({ CpuUsage }) => {
        console.log(CpuUsage)
        setTransmissionPackets([...transmissionPackets, CpuUsage]);
    })

    return (
        <>
            LIVE

            <Line data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: transmissionPackets,
                }]
            }} />
        </>
    )
}