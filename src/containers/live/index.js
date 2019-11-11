import React from 'react';

import manifest from '../../config/manifest';
import { connectSocket } from '../../helpers';

const connectToLiveSocket = (appendCb) => connectSocket(
    `${manifest.hostMonitor}/live`,
    (live) => {
        live.emit('subscribeToLiveTransmission', ['duh']);
        live.on('liveTransmission', (transmissionPacket) => appendCb(transmissionPacket));
    });
    
export default () => {    
    const appendTransmission = (transmissionPacket) => {
        console.log('liveTransmissionRec', transmissionPacket);
    }

    connectToLiveSocket(appendTransmission)

    return (
        <>
            LIVE
        </>
    )
}