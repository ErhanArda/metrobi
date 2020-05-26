import React, { useState } from 'react'
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

const Paranthesis = () => {
    const [popoverOpen, setPopoverOpen] = useState(false);
    const toggle = () => setPopoverOpen(!popoverOpen);
    let brackets = "[]{}()<>"
    let controlArr = []

    let isBalanced = (input) => {

        for (let bracket of input) {
            let bracketsIndex = brackets.indexOf(bracket)

            if (bracketsIndex % 2 === 0) {
                controlArr.push(bracketsIndex + 1)
            } else {
                if (controlArr.pop() !== bracketsIndex) {
                    return false;
                }
            }
        }
        return controlArr.length === 0
    }

    console.log(isBalanced('([])'))
    console.log(isBalanced('([{<}])'))
    console.log(isBalanced('([,])'))

    return (
        <div className="centerButton">
            <Button id="Popover2" type="button" style={{background:"aqua",color:"blue"}}>
                {`[]{}()<>`}
            </Button>
            <Popover placement="bottom" isOpen={popoverOpen} target="Popover2" toggle={toggle}>
                <PopoverHeader>{`[]{}()<>`}</PopoverHeader>
                <PopoverBody>
                    Parentheses results could seen on the console with F12!
                    <br/>('([])')) returns true
                    <br/>([{`<`}]) returns false
                    <br/>('([,])') returns false
                </PopoverBody>
            </Popover>
        </div>
    )
}

export default Paranthesis
