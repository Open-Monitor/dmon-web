import React, { useState, useMemo } from 'react';

import { Container, Row } from 'react-bootstrap';

import { GraphContainer, UptimeContainer } from '../../components/container';
import { LineGraph, BarGraph, HorizontalBarGraph, PolarGraph } from '../../components/graphs';
import { generateRgb } from '../../helpers';
import useLive from './useLive';

import ips from '../../config.js'

import './index.css';

const updateTransmissionPacket = (current, packet, types) => {
  const updated = { ...current };

  types.forEach(type => {
    updated[type] = {
      ...current[type],
      [packet.IP]: [
        ...((current[type][packet.IP] !== undefined) ? current[type][packet.IP] : []),
        packet[type],
      ]
    }
  });

  return updated;
}

const INITIAL_TRANSMISSION_STATE = {
  CpuUsage: {},
  UpTime: {},
  MemoryUsed: {},
  InboundBandwithBytes: {},
  OutboundBandwithBytes: {},
  InboundBandwithPackets: {},
  OutboundBandwithPackets: {},
  hostName: {},
  DeviceID: {},
}

export default () => {
  const [transmissionPackets, setTransmissionPackets] = useState(INITIAL_TRANSMISSION_STATE);
  const [colors, setColors] = useState([]);
  const stateKeys = useMemo(
    () => Object.keys(INITIAL_TRANSMISSION_STATE),
    [INITIAL_TRANSMISSION_STATE]
  );
  const barLabels = [Object.values(transmissionPackets.hostName).map(i => i[0])];
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
    ips,
    [transmissionPackets]
  );

  return (
    <div>
      <Container fluid="true" className="main-cont mt-5" style={{ paddingTop: '1rem' }}>
        <Row className="">
          <GraphContainer title="Cpu">
            <LineGraph
              colors={colors}
              data={transmissionPackets.CpuUsage}
              hostName={transmissionPackets.hostName}
              title="Cpu"
            />
          </GraphContainer>
          <GraphContainer title="Memory Useage">
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
              barLabels={barLabels}
              title="Inbound Bytes"
            />
          </GraphContainer>
          <GraphContainer title="Outbound Bytes">
            <HorizontalBarGraph
              colors={colors}
              data={transmissionPackets.OutboundBandwithBytes}
              hostName={transmissionPackets.hostName}
              barLabels={barLabels}
              title="Outbound Bytes"
            />
          </GraphContainer>
          <GraphContainer title="Inbound Packets">
            <HorizontalBarGraph
              colors={colors}
              data={transmissionPackets.InboundBandwithPackets}
              hostName={transmissionPackets.hostName}
              barLabels={barLabels}
              title="Outbound Packets"
            />
          </GraphContainer>
          <GraphContainer title="Outbound Packets">
            <HorizontalBarGraph
              colors={colors}
              data={transmissionPackets.OutboundBandwithPackets}
              hostName={transmissionPackets.hostName}
              barLabels={barLabels}
              title="Outbound Packets"
            />
          </GraphContainer>
        </Row>
        <Row>
          <UptimeContainer title="Connected Server List" hostName={transmissionPackets.hostName} deviceID={transmissionPackets.DeviceID} data={transmissionPackets.UpTime} />
        </Row>
      </Container>
    </div>
  )
}
