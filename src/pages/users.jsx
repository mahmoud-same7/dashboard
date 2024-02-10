import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container, useTheme, Box} from "@mui/material";
import Header from "../components/header";
import { Delete} from "@mui/icons-material";
import { useState } from "react";


const Users = ()=> {
    const theme = useTheme();
  const [showForm, setShowForm] = useState(false);
    return(
        <Box className="users_show">
      <Container>
      <Header title="Users" />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 280 }} aria-label="simple table">
            <TableHead sx={{ background: theme.palette.main }}>
              <TableRow>
                <TableCell>User name</TableCell>
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
                  omr
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
    )
}
export default Users