import { HiPhone } from "react-icons/hi";
import { IoPerson } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { deleteContact } from '../../redux/contacts/operations';
import { Button, Card, CardContent, List, ListItem, Typography } from "@mui/material";

export default function Contact({ contact: {id, name, number } }) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(id));
    }

    return (
        <Card sx={{width:'400px'}}>
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
                <Button variant="outlined" sx={{height:1}} type="button" onClick={handleDelete}>Delete</Button>
            </CardContent>                     
        </Card>
    )
}