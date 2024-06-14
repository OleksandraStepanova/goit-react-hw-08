import { Box, LinearProgress} from "@mui/material";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from '../../components/SearchBox/SearchBox'
import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "../../redux/contacts/selector";
import { useEffect, useState } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import ModalDelete from "../../components/ModalDelete/ModalDelete";

export default function ContactsPage() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);
    const [open, setOpen] = useState(false);
    const [currentContact, setCurrentContact] = useState();

    const handleOpen = (contact) => {
        setOpen(true);
        setCurrentContact(contact);
    }

    const handleClose = () => {
        setOpen(false);

    } 


    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])
    
    return (
        <Box component='section' >
           <Box sx={{padding:'32px', display:'flex', justifyContent:'space-between', flexWrap:'wrap', alignItems:'center', gap:'20px'}}>
                <ContactForm />
                <SearchBox />
           </Box>
            {isLoading&&<LinearProgress/>}
            <ContactList modalOpen={handleOpen} />
            <ModalDelete open={open} close={handleClose} id={currentContact} />
        </Box>
    )
}