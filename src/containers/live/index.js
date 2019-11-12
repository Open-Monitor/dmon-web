import React, { useState, useEffect } from 'react';

import { Container, Row } from 'react-bootstrap';

import manifest from '../../config/manifest';
import { connectSocket } from '../../helpers';
import GraphContainer from '../../components/container';
import { LineGraph } from '../../components/graphs';

import './index.css';

const connectToLiveSocket = (appendCb) => connectSocket(
  `${manifest.hostMonitor}/live`,
  (live) => {
    live.emit('subscribeToLiveTransmission', ['duh', '136.60.227.124', '157.230.154.30']);
    live.on('liveTransmission', (transmissionPacket) => appendCb(transmissionPacket));
  });

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
  const [titles, setTitle] = useState([]);

  const connect = connectToLiveSocket((packet) => {
    setTitle([...titles.filter(t => t !== packet.IP), packet.IP])
    setTransmissionPackets({
      CpuUsage: convertTransmissionPacketToPoint(transmissionPackets, packet, 'CpuUsage')
    })
  })

  useEffect(() => connect, []);

  return (
    <div>
      <Container fluid="true" className="main-cont py-5">
        <Row className="">
          <GraphContainer title="Cpu">
            <LineGraph labels={titles} data={transmissionPackets.CpuUsage} title="Cpu" />
          </GraphContainer>
        </Row>
      </Container>
    </div>
  )
}
