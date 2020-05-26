import React, { useState, useEffect } from 'react'
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

const Async = () => {
    const [popoverOpen, setPopoverOpen] = useState(false);
    const toggle = () => setPopoverOpen(!popoverOpen);

    const [role, setRole] = useState(["a", "b", "c", "d", "e"])
    const [display, setDisplay] = useState("")


    useEffect(() => {
        role.forEach((item, index) => {

            setTimeout(() => {
                setDisplay(item)
            }, 1000 * Math.pow(2, index))
        })
    }, [])
    return (
        <div className="centerButton">
            <Button id="Popover3" type="button" style={{background:"rebeccapurple",color:"white"}}>
            ["a", "b", "c", "d", "e"]
            </Button>
            <Popover placement="right" isOpen={popoverOpen} target="Popover3" toggle={toggle}>
                <PopoverHeader>
                    ["a", "b", "c", "d", "e"]
                </PopoverHeader>
                <PopoverBody>
                    <h2>{JSON.stringify(role)}</h2>
                    <span>Each element is pressed according to (2)<sup>index</sup> time</span>
                    <h3>{display}</h3>
                </PopoverBody>
            </Popover>
        </div>


    )
}

export default Async

