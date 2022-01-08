import React, { useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import * as S from './styles'

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
      <div style={{ cursor: "pointer" }}>
        <Link href="/" >
          <Image height={70} width={170} src='/bynem01.png' />
        </Link>
      </div>
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
          <a target="_blank">
            <S.MenuLink >Blog</S.MenuLink>
          </a>
        </Link>
        <Link href="/meus-simulados">
          <a>
            <S.MenuLink >Meus Simulados</S.MenuLink>
          </a>
        </Link>
        <Link href="/criar-simulados">
          <a>
            <S.MenuLink >Criar Simulados</S.MenuLink>
          </a>
        </Link>
        <Link href="/criar-perguntas/uuidFake">
          <a>
            <S.MenuLink >Criar Perguntas</S.MenuLink>
          </a>
        </Link>
        <Link href="/vizualizar/simulado/5">
          <a>
            <S.MenuLink >Vizualizar Simulado</S.MenuLink>
          </a>
        </Link>
        <Link href="/simulado/uuidSimulado">
          <a>
            <S.MenuLink >Execução Simulado</S.MenuLink>
          </a>
        </Link>
      </S.Menu>
    </S.Nav>
  </>
  );
}
