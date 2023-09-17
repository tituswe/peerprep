import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../features/user/authSlice';
import PageWrapper from '../../layouts/PageWrapper';

const Dashboard = () => {
  const [questionApi, setQuestionApi] = useState('');
  const [userApi, setUserApi] = useState('');
  const currentUser = useSelector(selectCurrentUser);

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
  }, []);

  return (
    <PageWrapper>
      <a>Hello World {userApi}</a>
      <a>Hello World {questionApi}</a>
      <a>{currentUser?.name} is logged in</a>
    </PageWrapper>
  );
};

export default Dashboard;
