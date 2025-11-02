import PropTypes from "prop-types"
import { useEffect, useState } from "react"

function DataFetcher({ url, children }) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url)
                const data = await res.json()
                setData(data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [url])
    return children({ data, loading, error })
}

DataFetcher.propTypes = {
    url: PropTypes.string.isRequired,
    children: PropTypes.function,
}

export default DataFetcher
