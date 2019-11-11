import React, { useState, useMemo } from 'react';

import manifest from '../../config/manifest';
import { connectSocket } from '../../helpers';

import { Line } from 'react-chartjs-2';
import { Container, Row, Col, Card } from 'react-bootstrap';
const connectToLiveSocket = (appendCb) => connectSocket(
    `${manifest.hostMonitor}/live`,
    (live) => {
        live.emit('subscribeToLiveTransmission', ['duh', '136.60.227.124']);
        live.on('liveTransmission', (transmissionPacket) => appendCb(transmissionPacket));
    });

export default () => {
    const [transmissionPackets, setTransmissionPackets] = useState([]);
    connectToLiveSocket(({ CpuUsage }) => {
        setTransmissionPackets([...transmissionPackets, CpuUsage]);
    })

    return (
        <div>
        <Container fluid="true" className="py-5" style={{backgroundColor: '#e8e8e8'}}>
        <Row className="">
          <Col className="mx-auto mt-5" sm={6}>
            <Card className="text-center">
            <Card.Header>
              CPU
            </Card.Header>
            <Card.Body>
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
            </Card.Body>
            <Card.Footer className="text-muted">PUT FILTERS HERE</Card.Footer>
            </Card>
          </Col>
          <Col className="mx-auto mt-5" sm={6}>
            <Card className="text-center">
              <Card.Header>
                Network
              </Card.Header>
              <Card.Body>
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
              </Card.Body>
              <Card.Footer className="text-muted">PUT FILTERS HERE</Card.Footer>
            </Card>
          </Col>
          <Col className="mx-auto mt-5" sm={6}>
            <Card className="text-center">
              <Card.Header>
                Network
              </Card.Header>
              <Card.Body>
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
              </Card.Body>
              <Card.Footer className="text-muted">PUT FILTERS HERE</Card.Footer>
            </Card>
          </Col>
          <Col className="mx-auto mt-5" sm={6}>
            <Card className="text-center">
              <Card.Header>
                Network
              </Card.Header>
              <Card.Body>
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
              </Card.Body>
              <Card.Footer className="text-muted">PUT FILTERS HERE</Card.Footer>
            </Card>
          </Col>
        </Row>
        </Container>
        </div>
    )
}
