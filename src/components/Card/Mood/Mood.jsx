import React from 'react'
import { Button, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'

export default function Mood() {
    const tooltip = (
        <Tooltip id="tooltip">
            <strong>Coming soon!</strong>
        </Tooltip>
    );
    return (
        <div className='mt-2'>


            <h5>
                What is your Mood?
            </h5>
            <Row className='mood'>
                <Col xxl={3} xl={3} lg={3} md={3}>
                    <OverlayTrigger placement="auto" overlay={tooltip}>
                        <div className="mood_item mood_work" >
                            Work
                        </div>
                    </OverlayTrigger>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={3}>
                <OverlayTrigger placement="auto" overlay={tooltip}>
                    <div className="mood_item mood_relax">
                        Relax
                    </div>
                    </OverlayTrigger>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={3}>
                <OverlayTrigger placement="auto" overlay={tooltip}>
                    <div className="mood_item mood_happy">
                        Happy
                    </div>
                    </OverlayTrigger>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={3}>
                <OverlayTrigger placement="auto" overlay={tooltip}>
                    <div className="mood_item mood_sad">
                        Sad
                    </div>
                    </OverlayTrigger>
                </Col>
            </Row>
        </div>

    )
}
