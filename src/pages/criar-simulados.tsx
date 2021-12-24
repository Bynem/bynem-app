import React, { useState, useEffect } from 'react'
import CreateSimuled from '../templates/CreateSimuled'
import Loading from '../components/Loading'

export default function Home() {
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
                    <CreateSimuled />
                </>
                )
        }
    </>
}
