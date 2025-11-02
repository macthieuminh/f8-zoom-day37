import { useState, useCallback, React } from "react"

import CounterDisplay from "./components/CounterDisplay"
import ActionButtons from "./components/ActionButtons"
import ExpensiveChild from "./components/ExpensiveChild"

const placeholderUsers = [
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
    { id: 3, name: "Peter Jones", email: "peter.jones@example.com" },
]
export default function PerformanceDemo() {
    const [count, setCount] = useState(null)
    const [name, setName] = useState(null)
    const [items, setItems] = useState(placeholderUsers)

    const handleIncrement = useCallback(() => {
        setCount((prev) => prev + 1)
    }, [])

    const handleResetCount = useCallback(() => {
        setCount((prev) => prev * 0)
    }, [])

    return (
        <div>
            <div>
                <button onClick={() => handleIncrement()}>Increment Count</button>
                <button>Change Name</button>
                <button>Add Item</button>
            </div>
            <CounterDisplay count={count} />
            <ActionButtons onIncrement={handleIncrement} onReset={handleResetCount} />

            <ExpensiveChild items={items} />
        </div>
    )
}
