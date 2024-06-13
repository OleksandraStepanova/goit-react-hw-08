import { Box, Button, Typography } from "@mui/material";

export default function UserMenu() {
    return (
        <Box sx={{ display: 'flex'}}>
            <Typography variant="h6">Welcome, ...!</Typography>
            <Button variant="text" sx={{color:'#fff'}}>Logout</Button>
        </Box>
    )
}