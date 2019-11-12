import React, { useState, useMemo, useEffect } from 'react';

import manifest from '../../config/manifest';
import { connectSocket } from '../../helpers';

import { Line } from 'react-chartjs-2';
import { Container, Row, Col, Card } from 'react-bootstrap';

import './index.css';

const connectToLiveSocket = (appendCb) => connectSocket(
    `${manifest.hostMonitor}/live`,
    (live) => {
        live.emit('subscribeToLiveTransmission', ['duh', '136.60.227.124', '157.230.154.30']);
        live.on('liveTransmission', (transmissionPacket) => appendCb(transmissionPacket));
    });

export default () => {
    const [transmissionPackets, setTransmissionPackets] = useState([]);
    useEffect(() => {
        connectToLiveSocket(( transmissionPacket ) => {
            setTransmissionPackets([...transmissionPackets, transmissionPacket]);
        })
    }, []);
    return (
        <div>
        <Container fluid="true" className="main-cont py-5">
        <Row className="">
          <Col className="mx-auto mt-5" sm={10} md={6}>
            <Card className="dark-card text-center">
            <Card.Header className="dark-card-header">
              <h1>CPU</h1>
            </Card.Header>
            <Card.Body>
            <Line data={{
              labels: [],
                datasets: [{
                  label: 'My First dataset',
                  backgroundColor: 'rgba(255,99,132,0.2)',
                  borderColor: 'rgba(255,99,132,1)',
                  borderWidth: 1,
                  hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                  hoverBorderColor: 'rgba(255,99,132,1)',
                  data: transmissionPackets,
                }]
            }}
            options={{
              scales: {
              xAxes: [{
                gridLines: {
                  display: false,
                },
              }],
              yAxes: [{
                gridLines: {
                  display: true,
                  color: 'rgba(45,50,73,1)',
                  lineWidth: 2,
                  drawTicks: false,
                  drawBorder: false,
                },
              }],
              },
            }}
            />
            </Card.Body>
            <Card.Footer className="text-muted">PUT FILTERS HERE</Card.Footer>
            </Card>
          </Col>
          <Col className="mx-auto mt-5" sm={10} md={6}>
            <Card className="dark-card text-center">
              <Card.Header className="dark-card-header">
                <h1>Network</h1>
              </Card.Header>
              <Card.Body>
                <Line data={{
                  labels: [],
                    datasets: [{
                      label: 'My First dataset',
                      backgroundColor: 'rgba(255,99,132,0.2)',
                      borderColor: 'rgba(255,99,132,1)',
                      borderWidth: 1,
                      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                      hoverBorderColor: 'rgba(255,99,132,1)',
                      data: transmissionPackets,
                    }]
                }} options={{
                    scales: {
                    xAxes: [{
                      gridLines: {
                        display: false,
                      },
                    }],
                    yAxes: [{
                      gridLines: {
                        display: true,
                        color: 'rgba(45,50,73,1)',
                        lineWidth: 2,
                        drawTicks: false,
                        drawBorder: false,
                      },
                    }],
                    }
                }} />
              </Card.Body>
              <Card.Footer className="text-muted">PUT FILTERS HERE</Card.Footer>
            </Card>
          </Col>
          <Col className="mx-auto mt-5" sm={10} md={6}>
            <Card className="dark-card text-center">
              <Card.Header className="dark-card-header">
                <h1>Network</h1>
              </Card.Header>
              <Card.Body>
                <Line data={{
                  labels: [],
                    datasets: [{
                      label: 'My First dataset',
                      backgroundColor: 'rgba(255,99,132,0.2)',
                      borderColor: 'rgba(255,99,132,1)',
                      borderWidth: 1,
                      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                      hoverBorderColor: 'rgba(255,99,132,1)',
                      data: transmissionPackets,
                    }]
                }} options={{
                    scales: {
                    xAxes: [{
                      gridLines: {
                        display: false,
                      },
                    }],
                    yAxes: [{
                      gridLines: {
                        display: true,
                        color: 'rgba(45,50,73,1)',
                        lineWidth: 2,
                        drawTicks: false,
                        drawBorder: false,
                      },
                    }],
                    }
                }} />
              </Card.Body>
              <Card.Footer className="text-muted">PUT FILTERS HERE</Card.Footer>
            </Card>
          </Col>
          <Col className="mx-auto mt-5" sm={10} md={6}>
            <Card className="dark-card text-center">
              <Card.Header className="dark-card-header">
                <h1>Network</h1>
              </Card.Header>
              <Card.Body>
                <Line data={{
                  labels: [],
                    datasets: [{
                      label: 'My First dataset',
                      backgroundColor: 'rgba(255,99,132,0.2)',
                      borderColor: 'rgba(255,99,132,1)',
                      borderWidth: 1,
                      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                      hoverBorderColor: 'rgba(255,99,132,1)',
                      data: transmissionPackets,
                    }]
                }} options={{
                    scales: {
                    xAxes: [{
                      gridLines: {
                        display: false,
                      },
                    }],
                    yAxes: [{
                      gridLines: {
                        display: true,
                        color: 'rgba(45,50,73,1)',
                        lineWidth: 2,
                        drawTicks: false,
                        drawBorder: false,
                      },
                    }],
                    }
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
