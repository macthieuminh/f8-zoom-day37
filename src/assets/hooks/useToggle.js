import { useState } from "react"
import PropTypes from "prop-types"

function useToggle(initialValue) {
    const [value, setValue] = useState(initialValue)

    const toggle = () => {
        return setValue(prev => !prev)
    }


    return [value, toggle, setValue]
}

useToggle.propTypes = {
    initialValue : PropTypes.bool.isRequired,
}

export default useToggle
