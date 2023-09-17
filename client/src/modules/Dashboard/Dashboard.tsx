import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../features/user/authSlice';
import PageWrapper from '../../layouts/PageWrapper';

const Dashboard = () => {
  const [message, setMessage] = useState('');
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    axios
      .get('/api/users')
      .then((response) => {
        setMessage(response.data);
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <PageWrapper>
      <a>Hello World {message}</a>
      <a>{currentUser?.name} is logged in</a>
    </PageWrapper>
  );
};

export default Dashboard;
