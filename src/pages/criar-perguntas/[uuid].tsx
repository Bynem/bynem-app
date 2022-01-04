import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import Loading from '../../components/Loading'
import CreateQuestions from '../../templates/CreateQuestions'

export default function UpdateSimulatedPage() {
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const { uuid } = router.query

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
                    {console.log("uuid no get", uuid)}
                    <CreateQuestions uuid={uuid} />
                </>
                )
        }
    </>
}
