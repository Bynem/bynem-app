import axios from 'axios';
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import Loading from '../../components/Loading';
import UpdateSimulated from '../../templates/UpdateSimulated'
import { FormCreatedSimulated } from '../../components/FormUpdateSimulated';

export default function UpdateSimulatedPage() {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<FormCreatedSimulated | null>()
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 500)

        async function getSimuledById() {
            await axios.get(`https://bynem-app.herokuapp.com/api/Simulado/${id}`).then(function (response) {
                setData(response.data)
            })
                .catch(function (error) {
                    console.log(error.response)
                    toast.error("Um erro inesperado aconteceu")

                });
        }
        getSimuledById()

    }, [])


    return <>
        {
            loading ?
                (
                    <Loading />
                ) :
                (<>
                    {console.log("data no get", data)}
                    <UpdateSimulated data={data} />
                </>
                )
        }
    </>
}
