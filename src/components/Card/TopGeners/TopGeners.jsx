import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function TopGeners() {
    return (
        <>
            <h5 className='mt-3'>
                Top Genres
            </h5>
            <Row className='mood'>
                <Col xl={3}>
                    <div className="mood_item mood_pop">
                        Pop
                    </div>
                </Col>
                <Col xl={3}>
                    <div className="mood_item mood_rock">
                        Rock
                    </div>
                </Col>
                <Col xl={3}>
                    <div className="mood_item mood_hip">
                        Hip hop
                    </div>
                </Col>
                <Col xl={3}>
                    <div className="mood_item mood_classical">
                        Classical
                    </div>
                </Col>
            </Row>
        </>

    )
}
