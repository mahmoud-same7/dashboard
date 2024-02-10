import { useTheme } from "@emotion/react"
import { Box, Stack, Container, Button } from "@mui/material"
import Header from "../components/header"

const dataName1 = ['الاسم :' , 'الجنسيه :' ,'العمر :' , 'مكان الفقد :' , 'الاوصاف:' , 'لون اللبس :' ]
const dataName2 = ['رقم الهويه :' , 'الاسم :' ,'رقم الجوال  :' , 'صله القرابه :' , 'اللوكيشن:' , 'تاريخ البلاغ :' ]

const Detail_Report = ()=> {
    const theme = useTheme()
    return(
        <Box className='detail_report'>
               <Container maxWidth="lg">
               <Stack spacing={2} sx={{flexDirection:{xs:'column' , lg:'row'}, mt:'20px',mb:'10px' , justifyContent:'space-between'}}>
                    <Box sx={{background:'#eee',borderRadius:'10px',boxShadow:'3px 5px 12px #eee' ,display:'flex' ,alignItems:'center' , justifyContent:'center'}}>
                        <img width='90%'  height='90%' style={{margin:'auto' , display:'block'}} src={require('../assets/Flag_of_Palestine.svg.png')} alt="" />
                    </Box>
                    <Box >
                        <Box sx={{display:'flex',width:'300px' , direction:'rtl' , justifyContent:'space-between',mt:'15px' , mb:'15px'}}>
                        <ul>
                            {dataName1.map((el,indx)=> {
                                return(
                                    <li key={indx} style={{marginBottom:'10px' , fontWeight:'bold'}}>{el}</li>
                                )
                            })}
                        </ul>
                        <ul>
                            <li style={{marginBottom:'10px'}}> ماجد</li>
                            <li style={{marginBottom:'10px'}}> كويتي</li>
                            <li style={{marginBottom:'10px'}}>15</li>
                            <li style={{marginBottom:'10px'}}> المنطقه الشرقيه </li>
                            <li style={{marginBottom:'10px'}}> ابيض البشره وطويل </li>
                            <li style={{marginBottom:'10px'}}> اسود </li>
                        </ul>
                        </Box>
                        <Header title='معلومات المبلغ' textCenter="center" textColor='#fff' bgColor={theme.palette.blue} pad='8px 2px' />
                        <Box sx={{display:'flex',width:'300px' , direction:'rtl' , justifyContent:'space-between',mt:'15px' , mb:'15px'}}>
                            
                        <ul>
                        {dataName2.map((el,indx)=> {
                                return(
                                    <li key={indx} style={{marginBottom:'10px' , fontWeight:'bold'}}>{el}</li>
                                )
                            })}
                        </ul>
                        <ul>
                            <li style={{marginBottom:'10px'}}> 100000000000001</li>
                            <li style={{marginBottom:'10px'}}> ابو القاسم</li>
                            <li style={{marginBottom:'10px'}}>9665294753</li>
                            <li style={{marginBottom:'10px'}}>  والده </li>
                            <li style={{marginBottom:'10px'}}>  جده  </li>
                            <li style={{marginBottom:'10px'}}> 08/02/2024 </li>
                        </ul>
                        </Box>
                        <Box sx={{textAlign:'center' , mt:'10px' , mb:'10px'}}>
                            <Button sx={{width:'120px',display:'inline-block', mr:'10px' , background:theme.palette.red , color:'#fff' , fontWeight:'bold', ['&:hover']:{background:theme.palette.red , color:'#fff' , boxShadow:'2px 4px 6px #999'}}}>رفض</Button>
                            <Button sx={{width:'120px' , background:theme.palette.green , color:'#fff' , fontWeight:'bold', ['&:hover']:{background:theme.palette.green , color:'#fff' , boxShadow:'2px 4px 6px #999'}}}>قبول</Button>
                        </Box>
                    </Box>
               </Stack>
               </Container>
        </Box>
    )
}
export default Detail_Report