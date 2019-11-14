import React, { useContext } from 'react';

import { Container, Row } from 'react-bootstrap';

import { GraphContainer, UptimeContainer } from '../../components/container';
import { LineGraph, HorizontalBarGraph } from '../../components/graphs';
import context from './context';

import './index.css';

export default () => {
  const { transmissionPackets, colors } = useContext(context); 

  return (
    <Container fluid="true" className="main-cont">
      <Row className="">
        <GraphContainer title="Cpu">
          <LineGraph
            colors={colors}
            data={transmissionPackets.CpuUsage}
            hostName={transmissionPackets.hostName}
            title="Cpu"
          />
        </GraphContainer>
        <GraphContainer title="Memory Usage">
          <LineGraph
            colors={colors}
            data={transmissionPackets.MemoryUsed}
            hostName={transmissionPackets.hostName}
            title="MemoryUsed"
          />
        </GraphContainer>
        <GraphContainer title="Inbound Bytes">
          <HorizontalBarGraph
            colors={colors}
            data={transmissionPackets.InboundBandwithBytes}
            hostName={transmissionPackets.hostName}
            title="Inbound Bytes"
          />
        </GraphContainer>
        <GraphContainer title="Outbound Bytes">
          <HorizontalBarGraph
            colors={colors}
            data={transmissionPackets.OutboundBandwithBytes}
            hostName={transmissionPackets.hostName}
            title="Outbound Bytes"
          />
        </GraphContainer>
        <GraphContainer title="Inbound Packets">
          <HorizontalBarGraph
            colors={colors}
            data={transmissionPackets.InboundBandwithPackets}
            hostName={transmissionPackets.hostName}
            title="Outbound Packets"
          />
        </GraphContainer>
        <GraphContainer title="Outbound Packets">
          <HorizontalBarGraph
            colors={colors}
            data={transmissionPackets.OutboundBandwithPackets}
            hostName={transmissionPackets.hostName}
            title="Outbound Packets"
          />
        </GraphContainer>
      </Row>
    </Container>
  )
}
