import React from 'react';
import * as S from './styles'
import Image from 'next/image'

export type FooterProps = {
  bottom: boolean
}

export default function Footer({ bottom }: FooterProps) {
  return (
    <S.Footer bottom={bottom}>
      <Image src={"/bynem3.png"} width={120} height={12} />
    </S.Footer>
  )
}
