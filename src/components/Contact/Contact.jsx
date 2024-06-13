import { HiPhone } from "react-icons/hi";
import { IoPerson } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { deleteContact } from '../../redux/contacts/operations';
import { Box, Button, Card, CardContent, List, ListItem, Typography } from "@mui/material";
import toast,{ Toaster } from 'react-hot-toast';

export default function Contact({ contact: {id, name, number } }) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(id)).unwrap().then(()=>toast('The contact has been deleted'));
    }

    const handlePatch = () => {
        console.log(id);
    }

    return (
        <>
            <Card sx={{width:'400px', height:'160px'}}>
                <CardContent sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <List>
                        <ListItem sx={{display:'flex', gap:2}}>
                            <IoPerson />
                            <Typography variant="h6">{name}</Typography>  
                        </ListItem>    
                        <ListItem sx={{display:'flex', gap:2}}>
                            <HiPhone/>
                            <Typography variant="p">{number}</Typography>  
                        </ListItem>
                    </List>       
                    <Box sx={{display:'flex', flexDirection:'column', gap:2}}>                        
                        {/* <Button variant="outlined" sx={{ height: 1 }} type="button" onClick={handlePatch}>Edit</Button> */}
                        <Button variant="outlined" sx={{ height: 1 }} type="button" onClick={handleDelete}>Delete</Button>
                    </Box>
                </CardContent>                     
            </Card>
            <Toaster/>
        </>
    )
}