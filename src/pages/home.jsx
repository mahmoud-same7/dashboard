import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import ArrowOutward from "@mui/icons-material/ArrowOutward";
import CallReceived from '@mui/icons-material/CallReceived';
import BoxContain from "../components/home/box_contain";
import { DoDisturb, PeopleAltRounded ,ConnectingAirports ,Badge, Comment, SpeakerNotesOff } from "@mui/icons-material";
import Header from "../components/header";

const Home = () => {
  const theme = useTheme()
  return (
    <Box className="homePage">
      <Container>
        <Box className="report_box" sx={{mb:8 , mt:2}}>
        <Header title='reports'/>
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <BoxContain title='close report' borderColor={theme.palette.green} count={22} icon={<ArrowOutward sx={{ color:theme.palette.green ,fontSize:'25px' }} />}/>
                <BoxContain title='open report' borderColor={theme.palette.red} count={15} icon={<CallReceived sx={{ color:theme.palette.red ,fontSize:'25px' }} />}/>
                <BoxContain title='Fake report' borderColor={theme.palette.darkred} count={50} icon={<DoDisturb sx={{ color:theme.palette.darkred ,fontSize:'25px' }} />}/>
            </Grid>
            </Box>
        </Box>
        <Box className="report_box" sx={{mb:8 , mt:2}}>
        <Header title='peaples'/>
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <BoxContain title='employee' borderColor={theme.palette.purple} count={22} icon={<Badge sx={{ color: theme.palette.purple ,fontSize:'25px' }} />}/>
                <BoxContain title='users' borderColor={theme.palette.pink} count={15} icon={<PeopleAltRounded sx={{color: theme.palette.pink ,fontSize:'25px' }} />}/>
                <BoxContain title='guest' borderColor={theme.palette.yellow} count={22} icon={<ConnectingAirports sx={{ color:theme.palette.yellow ,fontSize:'25px' }} />}/>
            </Grid>
            </Box>
        </Box>
        <Box className="report_box" sx={{mb:8 , mt:2}}>
            <Header title='comments'/>
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <BoxContain title='comment' borderColor={theme.palette.blue} count={22} icon={<Comment sx={{ color: theme.palette.blue ,fontSize:'25px' }} />}/>
                <BoxContain title='comment cansel' borderColor={theme.palette.pink} count={15} icon={<SpeakerNotesOff sx={{ color: theme.palette.pink ,fontSize:'25px' }} />}/>
            </Grid>
            </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default Home;
