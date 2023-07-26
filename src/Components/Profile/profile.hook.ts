import { useDispatch } from 'react-redux';
import { deleteCurrentUser } from '../../Slices/currentUser';
import { useNavigate } from 'react-router-dom';

export const useProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const exit = () => {
    dispatch(deleteCurrentUser());
    navigate('/');
  };
  return exit;
};
