import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Report from './pages/report';
import Detail_Report from './pages/detailReports';
import Comments from './pages/comment';
import Employees from './pages/employees';
import Users from './pages/users';
import ErrorPage from './pages/errorPage';


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

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    errorElement:<ErrorPage/>,
    children:[
      {index:true , element:<Home/>},
      {path:'admin/reports' , element:<Report/>},
      {path:'admin/reports/:id' , element:<Detail_Report/>},
      {path:'admin/employees' , element:<Employees/>},
      {path:'admin/users' , element:<Users/>},
      {path:'admin/comments' , element:<Comments/>}
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
