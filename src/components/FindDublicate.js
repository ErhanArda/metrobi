import React, { useState } from 'react'
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';


const FindDublicate = () => {
    const [popoverOpen, setPopoverOpen] = useState(false);
    const toggle = () => setPopoverOpen(!popoverOpen);

    const [dubArray, setDubArray] = useState([])
    const [inputValue, setInputValue] = useState("")

    const getDuplicate = (arr) => {

        let sorted_arr = arr.slice().sort();
        let results = [];
        for (let i = 0; i < sorted_arr.length - 1; i++) {
            if (sorted_arr[i + 1] === sorted_arr[i]) {
                results.push(sorted_arr[i]);
            }
        }
        return results;

    }
    return (
        <div className="centerButton">
            <Button id="Popover4" type="button" style={{background:"white",color:"black"}}>
                Dublicate
            </Button>
            <Popover placement="right" isOpen={popoverOpen} target="Popover4" toggle={toggle}>
                <PopoverHeader>Dublicate</PopoverHeader>
                <PopoverBody>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => {
                            setInputValue(e.target.value)
                        }}
                    />
                    <button onClick={() => {
                        inputValue &&
                            setDubArray([...dubArray, inputValue])
                        setInputValue("")
                    }}>Add</button>

                    <h2>{JSON.stringify(dubArray)}</h2>
                    <h2>Dublicate Array Elements</h2>
                    <ul>{getDuplicate(dubArray).map(item => {
                        return <li>{item}</li>
                    })}</ul>                    </PopoverBody>
            </Popover>
        </div>
    )
}

export default FindDublicate
