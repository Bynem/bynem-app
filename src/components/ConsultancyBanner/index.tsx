import { useEffect } from 'react'
import { AuthContext } from 'context/AuthContext'
import Button from 'components/Button'
import * as S from './styles'
import { useContext, useState } from 'react'
import Calendar from '../../components/Calendar/Calendar'
import { FreeHours } from 'templates/ConsultancyRead'
import { RowModal } from 'components/Calendar/components/modal/table/SaveHoursService'
import { userData } from 'components/Calendar/components/modal/table/userData'
import {mask} from "remask"
export type ConsultancyBannerProps = {
  title: string
  subtitle: string
  authorName: string
  thumbnailUrl: string
  price: string
  promotionPrice: string
  description: string
  videoUrl: string
  uuid: any
  freeHours: FreeHours[]
  handleClick: (gatway: string) => void
}

const ConsultancyBanner = ({
  title,
  subtitle = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  thumbnailUrl,
  price,
  promotionPrice,
  description,
  videoUrl,
  freeHours,
  uuid,
  handleClick
}: ConsultancyBannerProps) => {
  const [openCalendarComponent, setOpenCalendarComponent] = useState(false)
  const { user } = useContext(AuthContext)
  const [openCalendar, setOpenCalendar] = useState(false)
  const [tableLine, setTableLine] = useState<RowModal[]>([] as RowModal[])
  const [meetLink, setMeetLink] = useState<string>('#')
  const [fakeHourPurchased, setFakeHourPurchased] = useState(false)
  const fakeDatePurchased: FreeHours[] = [{ date: '22122021', hours: [1] }]
  
  useEffect(() => {
    function getHours() {
      const dayHoursModal: RowModal[] = []
      const dayModal = fakeDatePurchased.filter(x => x.date)
      const dayModalHours = dayModal.map(x => x.hours)
      
      userData.forEach(hourDefault => {
        dayModalHours.forEach(hourModal => {
          if (hourModal.includes(hourDefault.id)) {
            dayHoursModal.push(hourDefault)
          }
        })
      })
      setTableLine(dayHoursModal)
    }

    getHours()
  }, [])
  
  return (
    <S.Wrapper>
      <S.Background />
      <S.Container>
        <S.ConsultancyBoxWrapper>
          <S.ConsultancyInfoBox>
            <S.ConsultancyInfoBoxTitle>{title}</S.ConsultancyInfoBoxTitle>
            <S.ConsultancyInfoBoxSubTitle>
              {subtitle}
            </S.ConsultancyInfoBoxSubTitle>
          </S.ConsultancyInfoBox>
          <S.ConsultancyPricingBox>
            <S.ConsultancyImage src={thumbnailUrl} />
            <S.ConsultancyBoxFooter>
              <label>Preço por Hora</label>
              <S.ConsultancyPricing>
                <S.Price>R$ {price}</S.Price>
                {!!promotionPrice && (
                  <S.PromotionPrice>R$ {promotionPrice}</S.PromotionPrice>
                )}
              </S.ConsultancyPricing>
              {fakeHourPurchased ?
                (<div>
                  <S.Label>Seu Horário marcado para</S.Label>
                  {tableLine.map(({ id, start, end,}, index) => (
                    <S.DivLine key={index}>
                      <S.DivContent>
                        <S.DivLabel>
                          <label>{mask(fakeDatePurchased[0].date, ["99/99/9999"])}</label>
                        </S.DivLabel>
                        Das
                        <S.DivLabel>
                          <label>{start}</label>
                        </S.DivLabel>
                        às
                        <S.DivLabel>
                          <label>{end}</label>
                        </S.DivLabel>
                      </S.DivContent>
                    </S.DivLine>
                  ))}
                  <S.ALinkLabel href={meetLink}>Ir para o meet</S.ALinkLabel>
                </div>
                ) : !!user && (
                  <>
                    {!openCalendarComponent && (
                      <Button
                        onClick={() => {
                          setOpenCalendar(true), setOpenCalendarComponent(true)
                        }}
                      >
                        Marcar agora
                      </Button>
                    )}
                    {!!openCalendar && <Calendar uuid={uuid} registering={false} freeHours={freeHours} size={'280px'} label={'Marque seu dia'} />}
                  </>
                )
              }
              {!user && (
                <Button as="a" href="/login">
                  Marcar agora
                </Button>
              )}
            </S.ConsultancyBoxFooter>
          </S.ConsultancyPricingBox>
        </S.ConsultancyBoxWrapper>
        <S.ConsultancyInformation>
          <div>
            <S.ConsultancyInformationText>
              {description}
            </S.ConsultancyInformationText>
            <S.ConsultancyVideo>
              <iframe
                height="315"
                src={videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </S.ConsultancyVideo>
          </div>
        </S.ConsultancyInformation>
      </S.Container>
    </S.Wrapper>
  )
}

export default ConsultancyBanner
