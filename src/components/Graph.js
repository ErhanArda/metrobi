import React from 'react'
import { Progress, Button } from 'reactstrap';

const Graph = () => {
    return (
        <>
            <Progress multi className>
                <Progress bar value="50">50%</Progress>
                <Progress bar color="success" value="25">
                    25%</Progress>
                <Progress bar color="info" value="12.5">%12.5</Progress>
                <Progress bar color="warning" value="6.25">%6.25</Progress>
                <Progress bar color="danger" value="3.75">%3.75</Progress>
                <Progress bar value="1.875">%1.875</Progress>
                <Progress bar color="success" value="1.875">%1.875</Progress>
            </Progress>
        </>
    )
}

export default Graph
