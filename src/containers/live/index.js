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

export default () => {
  const [transmissionPackets, setTransmissionPackets] = useState({
    CpuUsage: [],
    MemoryTotal: [],
  });

  useEffect(() => {
    connectToLiveSocket(({ CpuUsage, MemoryTotal }) => {     
      setTransmissionPackets({
        CpuUsage: [...transmissionPackets.CpuUsage, CpuUsage],
        MemoryTotal: [...transmissionPackets.MemoryTotal, MemoryTotal],
      })
    })
  }, []);

  return (
    <div>
      <Container fluid="true" className="main-cont py-5">
        <Row className="">
          <GraphContainer title="Cpu">
            <LineGraph data={transmissionPackets.CpuUsage} title="Cpu" />
          </GraphContainer>
          <GraphContainer title="Memory">
            <LineGraph data={transmissionPackets.MemoryTotal} title="Network" />
          </GraphContainer>
        </Row>
      </Container>
    </div>
  )
}
