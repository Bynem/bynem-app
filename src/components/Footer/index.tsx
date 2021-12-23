import React from 'react';
import * as S from './styles'
import Image from 'next/image'

export type FooterProps = {
  bottom: boolean
}

export default function Footer() {

  return (
    <S.Footer >
      <Image src={"/bynem3.png"} width={180} height={18} />
    </S.Footer>
  )
}
