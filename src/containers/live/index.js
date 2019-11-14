import React, { useState, useMemo } from 'react';

import { Breadcrumb, Container, Row } from 'react-bootstrap'

import ips from '../../config.js'
import useLive from './useLive';
import context from './context';
import INITIAL_TRANSMISSION_STATE from './initial_state';
import { generateRgb, updateTransmissionPacket } from '../../helpers';
import Single from './container-single';
import All from './container-all';

export default ({ match: { params } }) => {
  const [transmissionPackets, setTransmissionPackets] = useState(INITIAL_TRANSMISSION_STATE); // todo: might want to change out this state for reducers.
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
    !!params.ip ? [params.ip] : ips,
    [transmissionPackets, params.id]
  );

  return (
    <React.Fragment>
      <Container fluid className="main-cont mt-5" style={{ paddingTop: '2rem' }}>
        <Row>
          <Breadcrumb className="bcrumbs">
            <Breadcrumb.Item  className="bcrumb-item-false" href={params.ip === undefined ? undefined: "/"}>Home</Breadcrumb.Item>
            <Breadcrumb.Item  className="bcrumb-item" href={params.ip === undefined ? undefined: "/live"}>Live</Breadcrumb.Item>
            <Breadcrumb.Item className="bcrumb-item">
              {
                params.ip
              }
            </Breadcrumb.Item>
          </Breadcrumb>
        </Row>
        <context.Provider value={{ transmissionPackets, colors }}>
          {
            {
              [true || params.ip === undefined]: <All />,
              [params.ip !== undefined]: <Single focused={params.ip} />
            }.true
          }
        </context.Provider>
      </Container>

    </React.Fragment>

  )
}
