import React from 'react';

import { Col, Card } from 'react-bootstrap';

export default ({ title, children }) => (
    <Col className="mx-auto mt-3" sm={6}>
        <Card className="dark-card text-center">
            <Card.Header className="dark-card-header">
                <h1>{title}</h1>
            </Card.Header>
            <Card.Body>
               {
                   children
               }
            </Card.Body>
        </Card>
    </Col>
)
