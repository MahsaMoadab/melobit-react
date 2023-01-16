import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function Mood() {

    return (
        <div className='mt-2'>

            <h5>
                What is your Mood?
            </h5>
            <Row className='mood'>
                <Col xxl={3} xl={3} lg={3} md={3}>
                    <div className="mood_item mood_work" >
                        Work
                        <strong className='d-block'>Coming soon!</strong>
                    </div>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={3}>
                    <div className="mood_item mood_relax">
                        Relax
                        <strong className='d-block'>Coming soon!</strong>
                    </div>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={3}>
                    <div className="mood_item mood_happy">
                        Happy
                        <strong className='d-block'>Coming soon!</strong>
                    </div>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={3}>
                    <div className="mood_item mood_sad">
                        Sad
                        <strong className='d-block'>Coming soon!</strong>
                    </div>
                </Col>
            </Row>
        </div >

    )
}
