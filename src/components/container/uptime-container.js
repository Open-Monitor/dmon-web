import React from 'react';

import { Col, Card, Table} from 'react-bootstrap';

export default ({ title, data, hostName, deviceID }) => (
      <Col className="mx-auto mt-5" sm={12}>
        <Card className="dark-card text-left">
            <Card.Header className="dark-card-header">
                <h1>{title}</h1>
            </Card.Header>
            <Card.Body style={{color: 'white'}}>
              <Table size="sm" responsive striped  style={{color: 'white'}}>
                <thead>
                  <tr>
                    <th style={{borderTop: 'none'}}>#</th>
                    <th style={{borderTop: 'none'}}>Name</th>
                    <th style={{borderTop: 'none'}}>UpTime (sec)</th>
                    <th style={{borderTop: 'none'}}>IP (IPV4)</th>
                    <th style={{borderTop: 'none'}}>ID</th>
                  </tr>
                </thead>
                <tbody>
                {Object.keys(data).map((dataKey, index) =>
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{Object.values(hostName)[index][0]}</td>
                    <td>{data[dataKey].slice(-1)[0]}</td>
                    <td>{dataKey}</td>
                    <td>{Object.values(deviceID)[index][0]}</td>
                  </tr>
                )}
                </tbody>
              </Table>
            </Card.Body>
        </Card>
    </Col>
)
