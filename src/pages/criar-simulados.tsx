import React, { useState, useEffect } from 'react'
import CreateSimulated from '../templates/CreateSimulated'
import Loading from '../components/Loading'

export default function CreateSimulatedPage() {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [])

    return <>
        {
            loading ?
                (
                    <Loading />
                ) :
                (<>
                    <CreateSimulated />
                </>
                )
        }
    </>
}
