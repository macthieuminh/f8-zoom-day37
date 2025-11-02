import React from "react"

const CounterDisplay = React.memo((props) => {
    {
        console.log("Counter Display đã mount 1️⃣")
    }
    return <p>Counter: {props.count}</p>
})

export default CounterDisplay
