import React, { useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import * as S from './styles'
import { Divider } from "antd";

export type NavBar = {
  isOpen: boolean
}

export type Home = {
  home: boolean
}

export default function Head({ home }: Home) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (<>
    <S.Nav>
      <Link href="">
        <Image height={70} width={170} src='/bynem01.png' />
      </Link>
      <S.Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span className='spanHamburger' />
        <span className='spanHamburger' />
        <span className='spanHamburger' />
      </S.Hamburger>
      <S.Menu isOpen={isOpen}>
        {home ?
          (
            <Link href="/">
              <S.MenuLink >Inicio</S.MenuLink>
            </Link>
          ) : (null)}

        <Link href="http://bynem.com.br/">
          <S.MenuLink >Blog</S.MenuLink>
        </Link>
        <Link href="/meus-simulados">
          <S.MenuLink >Meus Simulados</S.MenuLink>
        </Link>
      </S.Menu>
    </S.Nav>
  </>
  );
}
