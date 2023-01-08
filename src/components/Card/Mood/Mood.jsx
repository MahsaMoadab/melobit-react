import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function Mood() {
    return (
        <>
            <h5>
                What is your Mood?
            </h5>
            <Row className='mood'>
                <Col xl={3}>
                    <div className="mood_item mood_work">
                        Work
                    </div>
                </Col>
                <Col xl={3}>
                    <div className="mood_item mood_relax">
                        Relax
                    </div>
                </Col>
                <Col xl={3}>
                    <div className="mood_item mood_happy">
                        Happy
                    </div>
                </Col>
                <Col xl={3}>
                    <div className="mood_item mood_sad">
                        Sad
                    </div>
                </Col>
            </Row>
        </>

    )
}
