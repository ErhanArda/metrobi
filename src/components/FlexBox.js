import React, { useState } from 'react'
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import FindDublicate from "./FindDublicate"
import Async from './Async'
import Paranthesis from './Paranthesis'
import Paradox from "./Paradox"
import BagMax from './BagMax'
import '././styles.css'

const FlexBox = () => {
    const [popoverOpen, setPopoverOpen] = useState(false);
    const toggle = () => setPopoverOpen(!popoverOpen);
    return (
        <div className="flexbox-container">
            <div className="flexbox-container-1">
                <div className="flexbox-item flexbox-item-1">
                    <Async />
                </div>
                <div className="flexbox-item flexbox-item-2">
                    <Paranthesis />
                </div>
            </div>
            <div className="flexbox-container-1">
                <div className="flexbox-item flexbox-item-3">
                    <FindDublicate />
                </div>
                <div className="flexbox-item flexbox-item-4">
                    <BagMax />
                </div>
            </div>
            <div className="flexbox-container-2">
                <div className="flexbox-item flexbox-item-5">
                    <div className="flex-container centerButton">
                        <Button id="Popover1" type="button" style={{background:"yellow",color:"black"}}>
                            Two Eggs, 100 floor solution
                        </Button>
                        <Popover placement="right" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
                            <PopoverHeader>Two Eggs, 100 floor</PopoverHeader>
                            <PopoverBody>
                            <br/>    floors to drop from floor 39, and so on.
                                    Our worst case scenario is then a drop count total of 14.
                                </PopoverBody>
                        </Popover>
                    </div>
                </div>
                <div className="flexbox-item flexbox-item-6">
                    6
                </div>
            </div>
            <div className="flexbox-container-3">
                <div className="flexbox-item-7">
                    <Paradox />
                </div>
            </div>
        </div>
    )
}

export default FlexBox
