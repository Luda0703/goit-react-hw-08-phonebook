import { StyledLink, NavLogIn } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <NavLogIn>
      <StyledLink to="/register">REGISTER</StyledLink>
      <StyledLink to="/login">LOG IN</StyledLink>
    </NavLogIn>
  );
};
