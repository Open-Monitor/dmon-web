import React, { useState, useMemo } from 'react';

import ips from '../../config.js'

import useLive from './useLive';
import context from './context';
import INITIAL_TRANSMISSION_STATE from './initial_state';
import { generateRgb, updateTransmissionPacket } from '../../helpers';
import Single from './container-single';
import All from './container-all';

export default ({ match: { params }}) => {
  const [transmissionPackets, setTransmissionPackets] = useState(INITIAL_TRANSMISSION_STATE);
  const [colors, setColors] = useState([]);
  const stateKeys = useMemo(
    () => Object.keys(INITIAL_TRANSMISSION_STATE),
    [INITIAL_TRANSMISSION_STATE]
  );
  
  useLive((packet) => {
    setColors(prev => (
      prev[packet.IP] === undefined
    ) ? { ...prev, [packet.IP]: generateRgb() }
      : prev
      );

      setTransmissionPackets(prev => ({
        ...updateTransmissionPacket(prev, packet, stateKeys),
      }))
    },
    !!params.id ? [params.id] : ips,
    [transmissionPackets, params.id]
  );

  return (
    <context.Provider value={{ transmissionPackets, colors }}>
      {
        {
          [true || params.ip === undefined]: <All />,
          [params.ip !== undefined]: <Single focused={params.ip}/>
        }.true
      }
    </context.Provider>
  )
}