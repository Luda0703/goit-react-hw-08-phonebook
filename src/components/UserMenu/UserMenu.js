import { useDispatch } from 'react-redux';
import { logOut } from 'Redux/auth/operations';
import { useAuth } from 'hooks';
import { UserContainer, UserName, Button } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserContainer>
      <UserName>Welcome, {user.name}</UserName>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </UserContainer>
  );
};
