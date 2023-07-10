import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active {
    color: #0000FF;
  }
`
export const NavLogIn = styled.ul`
font-family: 'Poppins';
font-weight: 600;
font-size: 18px;
gap: 50px;
display: flex;
margin-right: 40px;
`