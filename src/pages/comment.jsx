import { useTheme } from "@emotion/react"
import { Delete } from "@mui/icons-material"
import { Box, Container, Typography } from "@mui/material"


const Comments = ()=> {
    const theme = useTheme()
    return(
        <Box className="comment" mt='30px'>
            <Container maxWidth="lg">
              <Box className='commentBox' sx={{background:'#f7f7f7' , p:'10px 15px' , mt:'10px' , mb:'15px', borderBottom:'6px solid #eee'}}>
                <Box sx={{display:'flex' , alignItems:'center' , justifyContent:'space-between'}}>
                <Typography variant="p" component='p' sx={{fontWeight:'bold' , mb:'8px'}}>mahmoud sameh</Typography>
                <Delete sx={{['&:hover']:{color:theme.palette.red , cursor:'pointer'}}}/>
                </Box>
                <Typography variant="span" component='span'>This App is very nice & cooperating</Typography>
                <Typography variant="span" component='span' sx={{fontWeight:'bold' , display:'block' , mt:'8px' , color:'#999'}}>08/02/2024</Typography>
              </Box>
            </Container>
        </Box>
    )
}
export default Comments