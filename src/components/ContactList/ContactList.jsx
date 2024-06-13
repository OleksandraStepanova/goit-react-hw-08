import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/selector";
import { List, ListItem } from "@mui/material";

export default function ContactList() {
    const contacts = useSelector(selectFilteredContacts);
  
    return (
        <List sx={{display:'flex',flexWrap:'wrap'}}>
            {contacts.map((contactItem) => (
                <ListItem sx={{width:0.25}} key={contactItem.id}>
                    <Contact contact={contactItem}/>
                </ListItem>
            ))}
        </List>
    )
}