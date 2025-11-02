import React from "react"

const ActionButtons = React.memo((props) => {
    {
        console.log("Action Buttons đã mount 2️⃣")
    }
    return (
        <div>
            <button onClick={() => props.onIncrement()}>Increment</button>
            <button onClick={() => props.onReset()}>Reset</button>
        </div>
    )
})

export default ActionButtons
