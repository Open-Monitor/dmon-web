import React, { useState, useMemo } from 'react';

import { Container, Row } from 'react-bootstrap';

import { GraphContainer, UptimeContainer } from '../../components/container';
import { LineGraph, BarGraph } from '../../components/graphs';
import { generateRgb } from '../../helpers';
import useLive from './useLive';

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
    ['duh',
      '136.60.227.124', '157.230.154.30',
      '159.65.252.198', '157.245.178.118',
      '167.99.163.22', '68.183.171.34',
      '165.227.85.54', '104.248.185.82',
      '138.68.216.78', '107.182.236.30',
      '107.182.236.30', '162.220.51.89'],
    [transmissionPackets]
  );

  return (
    <div>
      <Container fluid="true" className="main-cont py-5">
        <Row>
          <UptimeContainer title="Connected Server List" hostName={transmissionPackets.hostName} deviceID={transmissionPackets.DeviceID} data={transmissionPackets.UpTime} />
        </Row>
        <Row className="">
          <GraphContainer title="Cpu">
            <LineGraph
              colors={colors}
              data={transmissionPackets.CpuUsage}
              title="Cpu"
            />
          </GraphContainer>
          <GraphContainer title="Memory Useage">
            <LineGraph
              colors={colors}
              data={transmissionPackets.MemoryUsed}
              title="MemoryUsed"
            />
          </GraphContainer>
          <GraphContainer title="Inbound Bytes">
            <LineGraph
              colors={colors}
              data={transmissionPackets.InboundBandwithBytes}
              title="Inbound Bytes"
            />
          </GraphContainer>
          <GraphContainer title="Outbound Bytes">
            <LineGraph
              colors={colors}
              data={transmissionPackets.OutboundBandwithBytes}
              title="Outbound Bytes"
            />
          </GraphContainer>
          <GraphContainer title="Inbound Packets">
            <LineGraph
              colors={colors}
              data={transmissionPackets.InboundBandwithPackets}
              title="Outbound Packets"
            />
          </GraphContainer>
          <GraphContainer title="Outbound Packets">
            <LineGraph
              colors={colors}
              data={transmissionPackets.OutboundBandwithPackets}
              title="Outbound Packets"
            />
          </GraphContainer>
        </Row>
      </Container>
    </div>
  )
}
