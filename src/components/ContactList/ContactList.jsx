import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeContact } from "../../redux/contactsSlice";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <ul className={styles.list}>
      {filteredContacts.map(({ id, name, phone }) => (
        <li key={id} className={styles.item}>
          <p>
            {name}: {phone}
          </p>
          <button
            type="button"
            onClick={() => dispatch(removeContact(id))}
            className={styles.button}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
