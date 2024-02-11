import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Report from './pages/report';
import Detail_Report from './pages/detailReports';
import Comments from './pages/comment';
import Employees from './pages/employees';
import Users from './pages/users';
import ErrorPage from './pages/errorPage';
import Auth from './pages/auth';


const darkTheme = createTheme({
  palette: {
    main: '#eee', 
    green: '#2e7d32',
    red: '#FF004D',
    darkred: '#d32f2f',
    purple: '#711DB0',
    pink: '#EF4040',
    yellow: '#FFA732',
    blue: '#0B60B0',
  },
});

const ProductRoute = ({children ,auth=false})=> {
  const login = localStorage.getItem('token') !== null || false
  if(!login && auth) {
      return <Navigate to='/admin/login'/>
  }else if (login && ['/admin/login' , '/admin/register'].includes(window.location.pathname)) {
    return <Navigate to='/' />
  }
  return children
}

const router = createBrowserRouter([
  {
    path:'/',
    element: <ProductRoute>
      <App/>
    </ProductRoute>,
    errorElement:<ErrorPage/>,
    children:[
      {index:true , element:<ProductRoute auth={true}><Home/></ProductRoute>},
      {path:'admin/reports' , element: <ProductRoute auth={true}><Report/></ProductRoute>},
      {path:'admin/login' , element:<ProductRoute><Auth signUp={false}/> </ProductRoute>},
      {path:'admin/register' , element:<ProductRoute><Auth signUp={true}/> </ProductRoute>},
      {path:'admin/reports/:id' , element:<ProductRoute auth={true}><Detail_Report/> </ProductRoute>},
      {path:'admin/employees' , element:<ProductRoute auth={true}><Employees/> </ProductRoute>},
      {path:'admin/users' , element:<ProductRoute auth={true}><Users/></ProductRoute>},
      {path:'admin/comments' , element:<ProductRoute auth={true}><Comments/></ProductRoute>}
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={darkTheme}>
      <CssBaseline />
       <RouterProvider router={router}/>
  </ThemeProvider>
 
);
