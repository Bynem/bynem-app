import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import Loading from '../../../../components/Loading'
import EditQuestions from '../../../../templates/EditQuestions'

export default function UpdateSimulatedPage() {
    const router = useRouter()

    const { uuidSimulado, uuidPergunta } = router.query

    console.log(uuidSimulado, uuidPergunta)

    return <EditQuestions uuid={uuidSimulado} />

}
