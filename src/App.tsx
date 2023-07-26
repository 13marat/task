import React from 'react';
import Signin from './Components/Singin/Signin';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import Items from './Components/Items/Items';
import Error from './Components/Error/Error';
import { useApp } from './App.hook';
import Loading from './Components/Loading';
import { useSelector } from 'react-redux';
import { StateType } from './types/Types';

const App = () => {
  const { currentUser } = useApp();
  const { loading } = useSelector((state: StateType) => state.users);
  const error = useSelector((state: StateType) => state.error);

  return (
    <>
      {loading && !error ? (
        <Loading />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={Signin} />
            <Route path="/error" Component={Error} />
            {currentUser ? (
              <Route path="/items" Component={Items} />
            ) : (
              <Route path="/items" element={<Navigate to="/" replace />} />
            )}
            {<Route path="*" element={<Navigate to="/error" replace />} />}
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
