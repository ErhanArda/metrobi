import React, { useState, useEffect } from 'react'
import { Button } from 'reactstrap';
import Graph from "./Graph"

const useAnimation = (duration) => {

  const [progress, setProgress] = useState(0)
  const [startTime, setsStartTime] = useState(Date.now())

  useEffect(() => {
    let queuedFrame
    const frame = () => {
      const now = Date.now() - startTime
      if (now < duration) {
        queuedFrame = requestAnimationFrame(frame)
      }
      setProgress(Math.min(1, now / duration))
    }
    frame()
    return () => cancelAnimationFrame(queuedFrame)
  }, [startTime, duration])
  const reset = () => { setsStartTime(Date.now()) }
  return [progress, reset]
}


const Paradox = () => {
  const [progress, reset] = useAnimation(1000)
  return (
    <div className="para">
      <h2>Zeno's Paradox of Achilles and the Tortoise</h2>
      <Button color="danger" onClick={reset} >Start!</Button>
      <br />
      <p>Tortoise progress: {Math.round(progress * 25)}%</p>

      {/* cx={`${5 * (index + 1)}%`} 
        <circle cx="10" cy="5" r="5" stroke="black" stroke-width="3" fill="red"  onClick={reset} /> */}

      <svg className="svg1">
        <circle className="circle-1" cx={`${49 + progress * 25}%`} cy="55" r="20" fill="green" />
      </svg>

      <div className="tortoise">
        <Graph />
      </div>
      <p>Achilles progress: {Math.round(progress * 50)}%</p>

      <svg className="svg1">
        <circle className="circle-2" cx={`${0 + progress * 50}%`} cy="45" r="30" />
      </svg>
      <div className="achille">
        <Graph />

      </div>
      <p>Tortoise progress: {Math.round(progress * 12)}.5%</p>


      <svg className="svg1">

        <circle className="circle-1" cx={`${74 + progress * 12.5}%`} cy="55" r="20" />
      </svg>

      <div className="tortoise">
        <Graph />

      </div>
      <p>Achilles progress: {Math.round(progress * 25)}%</p>

      <svg className="svg1">
        <circle className="circle-2" cx={`${50 + progress * 25}%`} cy="45" r="30" />
      </svg>
      <div className="achille">
        <Graph />

      </div>
      <div>
        <hr></hr>
        <hr></hr>
      </div>
    </div>

  )
}

export default Paradox
