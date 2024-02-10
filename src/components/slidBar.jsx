import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Badge, Comment, Description, Home, Logout } from '@mui/icons-material';
import PeopleIcon from '@mui/icons-material/People';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material';


const links = [
    {
        title:'Home',
        icon:<Home/>,
        path:  '/'
    },
    {
        title:'Reports',
        icon:<Description/>,
        path: '/admin/reports'
    },
    {
        title:'Empolyee',
        icon:<Badge/>,
        path:  '/admin/employees'
    },
    {
        title:'Users',
        icon:<PeopleIcon/>,
        path:  '/admin/users'
    },
    {
        title:'Guest',
        icon:<PeopleIcon/>,
        path:  '/admin/guest'
    },
    {
        title:'comments',
        icon:<Comment/>,
        path:  '/admin/comments'
    },
    {
        title:'Logout',
        icon:<Logout/>,
        path:  '/admin/logout'
    },
]



const SlideBar = ()=> {
    const location = useLocation()
    const theme = useTheme()
    const navigate = useNavigate()
    return(
        <Drawer
        variant='permanent'
        sx={{
          width:{xs:'70px' , md:'240px'},
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width : {xs:'70px' , md:'240px'},boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {links.map((el, index) => (
              <ListItem key={index} disablePadding onClick={()=>{navigate(el.path)}} sx={{mb:'20px' , background:location.pathname=== el.path?theme.palette.main:'' }}>
                <ListItemButton>
                  <ListItemIcon sx={{minWidth:{xs:'45px' , md:'55px'}}} >
                    {el.icon}
                  </ListItemIcon>
                  <ListItemText primary={el.title} sx={{display:{xs:'none' , md:'inline-block'}}} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    )
}
export default SlideBar