import React, { useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import * as S from './styles'
import Divider from '@mui/material/Divider';

export type NavBar = {
  isOpen: boolean
}

export default function Head() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (<>
    <S.Nav>
      <Link href="">
        <Image height={70} width={170} src='/bynem0.png' />
      </Link>
      <S.Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span className='spanHamburger' />
        <span className='spanHamburger' />
        <span className='spanHamburger' />
      </S.Hamburger>
      <S.Menu isOpen={isOpen}>
        <Link href="/2">
          <S.MenuLink >Inicio</S.MenuLink>
        </Link>
        <Link href="/2">
          <S.MenuLink >Blog</S.MenuLink>
        </Link>
      </S.Menu>
    </S.Nav>
    <Divider />
  </>
  );
}
