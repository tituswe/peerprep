import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  Navigate,
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom';
import Preloader from './Preloader';
import './index.css';
import PageWrapper from './layouts/PageWrapper';
import Dashboard from './modules/Dashboard/Dashboard';
import Login from './modules/Login/Login';
import Question from './modules/Questions/Question';
import Register from './modules/Register/Register';
import Module3 from './modules/module3/Module3';
import { store } from './store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate replace to="/dashboard" />
  },
  {
    path: '/dashboard',
    element: (
      <PageWrapper>
        <Dashboard />
      </PageWrapper>
    )
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/question/add',
    element: (
      <PageWrapper>
        <Question />
      </PageWrapper>
    )
  },
  {
    path: '/module3',
    element: <Module3 />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Preloader />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
