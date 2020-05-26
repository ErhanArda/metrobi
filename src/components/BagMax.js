import React, { useState } from 'react'
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';



const BagMax = () => {
    const [popoverOpen, setPopoverOpen] = useState(false);
    const toggle = () => setPopoverOpen(!popoverOpen);
    const [carrotTypes, setCarrotTypes] = useState([{ kg: 5, price: 100, amount: 1 }, { kg: 7, price: 150, amount: 1 }, { kg: 3, price: 70, amount: 1 }])
    const [capacity, setCapacity] = useState(36)
    // carrot: 0


    let efficent = carrotTypes.map((item) => {
        return item.price / item.kg
    })
    console.log("efficent: ", efficent)

    let cap = carrotTypes.map((item) => {
        return item.kg

    }).reduce((acc, curr) => {
        return acc + curr
    }, 0)
    let newCap = capacity - cap
    console.log("added bag weight: ", cap)


    if (cap !== capacity) {

        let maxEfficent = parseFloat(Math.max(...efficent))
        console.log("maxEfficent: ", maxEfficent)
        console.log("remain new capacity: ", newCap);

        let maxEfficentIndex = efficent.indexOf(maxEfficent)
        console.log("max efficent carrot index: ", maxEfficentIndex);

        let howManyCouldAdded = newCap / carrotTypes[maxEfficentIndex].kg
        console.log("howManyCouldAdded: ", howManyCouldAdded);



        let bagWeight = parseFloat(parseInt(howManyCouldAdded) * carrotTypes[maxEfficentIndex].kg + cap)

        console.log("total bag weight: ", bagWeight)
        if (capacity > bagWeight) {
            let need = capacity - bagWeight;
            console.log("need: ", need)


            let needKg = carrotTypes.map((item) => {
                return item.kg
            })
                    console.log("needKg",needKg);
                    
            let bagLast=bagWeight - carrotTypes[maxEfficentIndex].kg
            console.log("bagLast" ,bagLast)

            let newNeed = capacity - (bagWeight - carrotTypes[maxEfficentIndex].kg)
            console.log("newNeed",newNeed);
            
            console.log("yep:", needKg.map((item) => {
                if (item === newNeed){
                    let result = newNeed + bagLast
                    return result
                } else if(item !== newNeed){
                    let bagLast=bagWeight - carrotTypes[maxEfficentIndex].kg
                    console.log("bagLast" ,bagLast)
                    let newNeed = capacity - (bagWeight - carrotTypes[maxEfficentIndex].kg)
                    console.log("newNeed",newNeed);
                    

                }else{
                    return console.log("ok")
                }
                // if (item >= need) {
                //     let result = bagWeight - carrotTypes[maxEfficentIndex].kg
                //     return result
                // }
            }))
        }

    } else {
        console.log("enough")
    }


    return (
        <div className="centerButton">
            <Button id="Popover5" type="button" style={{background:"red",color:"white"}}>
                            getMaxValue
                        </Button>
                        <Popover placement="right" isOpen={popoverOpen} target="Popover5" toggle={toggle}>
                            <PopoverHeader>getMaxValue</PopoverHeader>
                            <PopoverBody>
                                    {capacity}
                                    <br/>
                                    getMaxValue results could seen on the console with F12!
                                    <br/>
                                    carrotTypes  kg: 5, price: 100; <br/>kg: 7, price: 150, <br/>kg: 3, price: 70<br/>
                                    capacity = 36 kg
                                </PopoverBody>
                        </Popover>
        </div>
    )
}

export default BagMax

// 7) Think that you have an unlimited number of carrots, but limited number of carrot
// types. Also, you have one bag that can hold a limited weight. Each type of carrot has a
// weight and a price. Write a function that takes carrotTypes and capacity and return the
// maximum value the bag can hold.
// Example:
// carrotTypes = [{kg: 5, price: 100}, {kg: 7, price: 150}, {kg: 3, price: 70}]
// capacity = 36 //kg
// getMaxValue(carrotTypes, capacity)
