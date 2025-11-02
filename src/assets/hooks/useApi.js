import { useState, useEffect, useCallback } from "react"
import PropTypes from "prop-types"

function useApi(url) {
    const [data, setData] = useState()
    const [loading, setLoading] = useState()
    const [error, setError] = useState()

    const fetchData = useCallback(async () => {
        try {
            const res = await fetch(url)
            const data = await res.json()
            setData(data)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }, [url])

    const refetch = () => {
        fetchData()
        console.log("Refetch...!")
    }

    useEffect(() => {
        fetchData()
    }, [url, fetchData])
    return { data, loading, error, refetch }
}

useApi.propTypes = {
    url: PropTypes.string.isRequired,
}

export default useApi
