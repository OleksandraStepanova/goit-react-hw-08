import { AppBar, Box, Toolbar } from "@mui/material";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/Usermenu";


export default function Appbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{justifyContent:'space-between'}}>
                    <Navigation />
                    <UserMenu />
                    <AuthNav/>
                </Toolbar>
            </AppBar>
        </Box>
    )
}