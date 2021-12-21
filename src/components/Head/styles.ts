import styled from 'styled-components'
import { NavBar } from '.';

export const Nav = styled.head`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  background: white;
  height: auto;
  top: 0;
  left: 0;
  right: 0;
  /* background: rgb(221,221,221); */
  /* background: linear-gradient(0deg, rgba(221,221,221,1) 0%, rgba(245,245,245,1) 52%, rgba(255,255,255,1) 100%); */
 
`;

export const Hamburger = styled.div`

  flex-direction: column;
  cursor: pointer;

  .spanHamburger{
    height: 2px;
    width: 25px;
    background: #e611b6;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow-y: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }: NavBar) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

export const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #e611b6;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;

  &:hover {
    color: #4373cf;
  }
`;
