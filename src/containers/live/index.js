import React, { useState } from 'react';

import { Container, Row } from 'react-bootstrap';

import GraphContainer from '../../components/container';
import { LineGraph } from '../../components/graphs';
import useLive from './useLive';

import './index.css';

const generateRandomRGB = () => { // move to helper.
  const r = ~~(Math.random() * 255)
  const g = ~~(Math.random() * 255)
  const b = ~~(Math.random() * 255)

  return `rgb(${r}, ${g}, ${b}`
}

const convertTransmissionPacketToPoint = (current, packet, type) => ({
  ...current[type],
  [packet.IP]: [
    ...((current[type][packet.IP] !== undefined) ? current[type][packet.IP] : []),
    packet[type],
  ]
})

export default () => {
  const [transmissionPackets, setTransmissionPackets] = useState({
    CpuUsage: {},
  });
  const [colors, setColors] = useState([]);

  useLive((packet) => {
    setColors(prev => (
      prev[packet.IP] === undefined
    ) ? { ...colors, [packet.IP]: generateRandomRGB() }
      : prev
    );

    setTransmissionPackets(prev => ({
      CpuUsage: convertTransmissionPacketToPoint(prev, packet, 'CpuUsage')
    }))
  },
    ['duh', '136.60.227.124', '157.230.154.30'],
    [transmissionPackets]
  );

  return (
    <div>
      <Container fluid="true" className="main-cont py-5">
        <Row className="">
          <GraphContainer title="Cpu">
            <LineGraph
              colors={colors}
              data={transmissionPackets.CpuUsage}
              title="Cpu"
            />
          </GraphContainer>
        </Row>
      </Container>
    </div>
  )
}
