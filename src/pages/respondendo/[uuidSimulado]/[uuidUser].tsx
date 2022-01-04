import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import Loading from '../../../components/Loading'

export default function UpdateSimulatedPage() {
    const router = useRouter()

    const { uuidSimulado, uuidUser } = router.query

    console.log(uuidSimulado, uuidUser)

    return <Loading />

}
