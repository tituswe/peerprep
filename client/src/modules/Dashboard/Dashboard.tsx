import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  checkAuthStatus,
  selectCurrentUser
} from '../../features/user/authSlice';
import { store } from '../../store';

const Dashboard = () => {
  const currentUser = useSelector(selectCurrentUser);
  const [questionApi, setQuestionApi] = useState('');
  const [userApi, setUserApi] = useState('');

  useEffect(() => {
    axios
      .get('/users')
      .then((response) => {
        setUserApi(response.data);
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });

    axios
      .get('/questions')
      .then((response) => {
        setQuestionApi(response.data);
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });

    store.dispatch(checkAuthStatus());
  }, []);

  return (
    <>
      <a>Hello World {userApi}</a>
      <a>Hello World {questionApi}</a>
      <a>{currentUser && currentUser.name} is logged in!</a>
    </>
  );
};

export default Dashboard;
