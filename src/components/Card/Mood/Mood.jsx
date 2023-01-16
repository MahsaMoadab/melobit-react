import React from 'react'
import {  Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'

export default function Mood() {
    const tooltip = (
        <Tooltip id="tooltip">
            <strong>Coming soon!</strong>
        </Tooltip>
    );
    return (
        <div className='mt-2'>

            <OverlayTrigger placement="top-start" overlay={tooltip}>
                <h5>
                    What is your Mood?
                </h5></OverlayTrigger>
            <Row className='mood'>
                <Col xxl={3} xl={3} lg={3} md={3}>
                    <div className="mood_item mood_work" >
                        Work
                    </div>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={3}>
                    <div className="mood_item mood_relax">
                        Relax
                    </div>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={3}>
                    <div className="mood_item mood_happy">
                        Happy
                    </div>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={3}>
                    <div className="mood_item mood_sad">
                        Sad
                    </div>
                </Col>
            </Row>
        </div >

    )
}
