import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <nav>
            <NavLink to='/'><Button sx={{color:'#fff'}}>Home</Button></NavLink>
            <NavLink to='/contacts'><Button sx={{ color:'#fff'}}>Contacts</Button></NavLink>
        </nav>
    )
}