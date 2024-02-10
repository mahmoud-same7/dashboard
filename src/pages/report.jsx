import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container, useTheme, Typography } from "@mui/material";
import Header from "../components/header";
import { Delete, RemoveRedEye } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";



const Report = () => {
    const theme = useTheme()
    const navigate = useNavigate()
  return (
    <Container>
        <Header title='reports'/>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 280}} aria-label="simple table">
          <TableHead sx={{background:theme.palette.main}}>
            <TableRow>
              <TableCell>Report name</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">icons</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 }  ,textAlign:'center'}}
              >
                <TableCell component="th" scope="row">
                    <Typography variant="p" component='p'>name : احمد جمال </Typography>
                    <Typography variant="p" component='p'>location : الحرم المكي</Typography>
                </TableCell>
                <TableCell align="center">06/02/2024</TableCell>
                <TableCell align="center" sx={{cursor:'pointer'}}>
                    <RemoveRedEye sx={{mr:"10px" ,['&:hover']:{color:'green'}}} onClick={()=>{navigate(`/admin/reports/${1}`)}}/>
                    <Delete sx={{['&:hover']:{color:theme.palette.red}}}/>
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 }  ,textAlign:'center'}}
              >
                <TableCell component="th" scope="row">
                    <Typography variant="p" component='p'>name : عبدالله ابراهيم </Typography>
                    <Typography variant="p" component='p'>location : الحرم المكي</Typography>
                </TableCell>
                <TableCell align="center">06/02/2024</TableCell>
                <TableCell align="center" sx={{cursor:'pointer'}}>
                    <RemoveRedEye sx={{mr:"10px" ,['&:hover']:{color:'green'}}}/>
                    <Delete sx={{['&:hover']:{color:theme.palette.red}}}/>
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 }  ,textAlign:'center'}}
              >
                <TableCell component="th" scope="row">
                    <Typography variant="p" component='p'>name : احمد جمال </Typography>
                    <Typography variant="p" component='p'>location : الحرم المكي</Typography>
                </TableCell>
                <TableCell align="center">06/02/2024</TableCell>
                <TableCell align="center" sx={{cursor:'pointer'}}>
                    <RemoveRedEye sx={{mr:"10px" ,['&:hover']:{color:'green'}}}/>
                    <Delete sx={{['&:hover']:{color:theme.palette.red}}}/>
                </TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Report;
