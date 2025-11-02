import { useRef } from "react"
import CustomInput from "../../components/CustomInput"

export default function FocusDemo() {
    const inputRef = useRef(null)
    const inputRef2 = useRef(null)
    const counter = useRef(0)

    counter.current += 1

    return (
        <div>
            <div>
                <h1>{counter.current}</h1>
                <CustomInput ref={inputRef} onChange={(e) => e.target.value} />
                <CustomInput ref={inputRef2} />
            </div>
            <div>
                <button onClick={() => inputRef.current.focus()}>Focus Input 1</button>
                <button onClick={() => inputRef2.current.focus()}>Focus Input 2</button>
                <button
                    onClick={() => {
                        inputRef.current.blur()
                        inputRef2.current.blur()
                    }}>
                    Clear Both
                </button>
                <button
                    onClick={() => {
                        const value1 = inputRef.current.getValue()
                        const value2 = inputRef2.current.getValue()
                        console.log(`Value input 1: ${value1}`)
                        console.log(`Value input 2: ${value2}`)
                        return
                    }}>
                    Get Values
                </button>
            </div>
        </div>
    )
}
