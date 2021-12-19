import { useEffect, useState } from 'react'
import useRequest, { useRequestConfig } from 'hooks/useRequest'
import Menu from 'components/Menu'
import Banner from 'components/Banner'
import React from 'react'
import CardSlider from 'components/CardSlider'
import { Container } from 'components/Container'

import * as S from './styles'
import Footer from 'components/Footer'
import { useContext } from 'react'
import { AuthContext } from 'context/AuthContext'

const MyServices = () => {
  const [servicesRecents, setServiceRecents] = useState([])
  const [servicesMostVieweds, setServiceMostVieweds] = useState([])
  const { request } = useRequest()
  const user = useContext(AuthContext)
  useEffect(() => {
    const getServicesRecents = async () => {
      const config: useRequestConfig = {
        method: 'GET',
        url: '/service/getRecents'
      }

      const response = await request(config)
      setServiceRecents(response)
    }

    const getServicesMostVieweds = async () => {
      const config: useRequestConfig = {
        method: 'GET',
        url: '/service/getMostVieweds'
      }

      const response = await request(config)

      setServiceMostVieweds(response)
    }

    getServicesRecents()
    getServicesMostVieweds()
  }, [request])

  return (
    <>
      <header>
        <Menu />
      </header>
      <section>
        <Banner  box={false}/>
      </section>
      <S.CardSection>
        <Container>
          <h2>Minhas Consultorias Compradas</h2>
          <CardSlider items={servicesRecents} />
        </Container>
      </S.CardSection>
      <Footer bottom={true}/>
    </>
  )
}

export default MyServices
