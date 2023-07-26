import React from 'react';
import { useSelector } from 'react-redux';
import { StateType } from '../../types/Types';
import { useProfile } from './profile.hook';
import './Profile.css';

const Profile = () => {
  const exit = useProfile();
  const {
    current: { name, email },
  } = useSelector((state: StateType) => state.current);

  return (
    <div>
      <h4>{name}</h4>
      <h4>{email}</h4>
      <button className="exit" onClick={exit}>
        Exit
      </button>
    </div>
  );
};
export default Profile;
