import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container, useTheme, Box, Button } from "@mui/material";
import Header from "../components/header";
import { Add, Delete, PlusOne } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AddEmployee from "../components/addform";

const Employees = () => {
  const theme = useTheme();
  const [showForm, setShowForm] = useState(false);
  const onClose = ()=> {
    setShowForm(false)
  }
  return (
    <Box className="emplayee_show" sx={{position:'relative'}}>
        {/* ----------------------------- Add Form ------------------------- */}
        {showForm && <AddEmployee onClose={onClose}/>}
        {/* ----------------------------- Add Form ------------------------- */}
      <Container>
        <Box
          className=""
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Header title="employees" />
          <Button
            sx={{
              textTransform: "capitalize",
              background: theme.palette.green,
              color: "#fff",
              ["&:hover"]: {
                border: `1px solid ${theme.palette.green}`,
                color: theme.palette.green,
              },
            }}
            onClick={()=> setShowForm(true)}
          >
            <Add sx={{ fontSize: "16px" }} />
            create new
          </Button>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 280 }} aria-label="simple table">
            <TableHead sx={{ background: theme.palette.main }}>
              <TableRow>
                <TableCell>employee name</TableCell>
                <TableCell align="center">Date of register</TableCell>
                <TableCell align="center">location</TableCell>
                <TableCell align="center">icons</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  textAlign: "center",
                }}
              >
                <TableCell component="th" scope="row">
                  amani
                </TableCell>
                <TableCell align="center">10/02/2024</TableCell>
                <TableCell align="center">Jeddah</TableCell>
                <TableCell align="center" sx={{ cursor: "pointer" }}>
                  <Delete sx={{ ["&:hover"]: { color: theme.palette.red } }} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};
export default Employees;
