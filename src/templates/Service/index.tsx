import { useState } from 'react'
import Menu from 'components/Menu'
import ServiceForm from 'components/ServiceForm'
import Calendar from 'components/Calendar/Calendar'
import * as S from './styles'
import { ToastContainer } from 'react-toastify'
import { ConsultancyReadProps } from 'templates/ConsultancyRead'

type ProviderType = {
  
}

const Provider = ({ uuid }: ConsultancyReadProps) => {
  const [registeredService, setRegisteredService] = useState<boolean | null>(false)
  const [providerId, setProviderId] = useState<number | null>(null)
  const [serviceId, setServiceId] = useState<number | null>(null)

  function setServiceAndProvider(serviceId: number, providerId: number) {
    setServiceId(serviceId)
    setProviderId(providerId)
  }
  
  return (

    <S.Wrapper>
      <Menu />
      <S.Container>
        <ServiceForm registeredService={registeredService} setRegisteredService={setRegisteredService} setServiceAndProvider={setServiceAndProvider}/>
        <Calendar registeredService={registeredService} registering={true} size={'420px'} label={'Cadastre o Dia/Horário'} service={serviceId} provider={providerId}/>
      </S.Container>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    </S.Wrapper>
    )
}

export default Provider
