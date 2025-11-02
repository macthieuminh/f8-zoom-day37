import { useRef, forwardRef, useImperativeHandle } from "react"

const CustomInput = forwardRef((props, ref) => {
    const inputRef = useRef()
    useImperativeHandle(
        ref,
        () => ({
            focus() {
                inputRef.current.focus()
            },
            blur() {
                inputRef.current.blur()
            },
            getValue() {
             return props.value
            },
        }),
        []
    )
    return (
        <input
            ref={inputRef}
            aria-label={props.label}
            placeholder={props.placeholder}
            onChange={props.onChange}
            value={props.value}
            {...props}
        />
    )
})

export default CustomInput
