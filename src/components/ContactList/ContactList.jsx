import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/selector";
import { List, ListItem } from "@mui/material";

export default function ContactList({modalOpen}) {
    const contacts = useSelector(selectFilteredContacts);
  
    return (
        <List sx={{display:'flex',flexWrap:'wrap', justifyContent:'center'}}>
            {contacts.map((contactItem) => (
                <ListItem sx={{width:'356px'}} key={contactItem.id}>
                    <Contact contact={contactItem} modalOpen={modalOpen} />
                </ListItem>
            ))}
        </List>
    )
}