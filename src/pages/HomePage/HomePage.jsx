import { PhonelinkLockOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export default function HomePage() {
    return (
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', padding:'100px 0'}}>
            <Typography variant="h1" >Phone Book</Typography>
            <Typography variant="h2">Secure storage of your contacts</Typography>
            <PhonelinkLockOutlined sx={{fontSize:'56px', marginTop:'20px'}}/>
        </Box>
    )
}