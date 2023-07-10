import { useAuth } from 'hooks';
import { StyledLink, Nav } from './Novigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <StyledLink to="/">HOME</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">CONTACTS</StyledLink>}
    </Nav>
  );
};
